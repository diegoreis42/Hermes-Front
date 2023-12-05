"use client"
import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { io, Socket } from 'socket.io-client';
import { ApiConnection } from '../../../../enums';
import useStorage from '../../hooks/useStorage';

interface Message {
  user: string;
  content: string;
}

interface ChatProps {}

const Chat: React.FC<ChatProps> =  () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const cookies = parseCookies(null);
  const { getItem } = useStorage();

  const user = getItem('user');

  useEffect(() => {
    const socketInstance = io(ApiConnection.PATH_CHAT, {
      extraHeaders: {
        Authorization: cookies['access_token']
      }
    });

    socketInstance.on('connect', () => {
      console.log('Socket.IO connected');
      setSocket(socketInstance);
    });

    socketInstance.on('message', (receivedMessage: Message) => {
      setMessages(messages => [...messages, receivedMessage]);
    });

    socketInstance.on('disconnect', () => {
      console.log('Socket.IO disconnected');
    });

    return () => {
      if (socketInstance.connect()) {
        socketInstance.disconnect();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && messageInput.trim() !== '') {
      const newMessage: Message = {
        user: JSON.parse(user).name,
        content: messageInput
      };

      socket.emit('message', newMessage);

      setMessages((messages) => [...messages, newMessage]);

      setMessageInput('');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 bg-gray-200 flex items-center justify-between border-b">
          <h2 className="text-xl">Bem-vinde <strong>{JSON.parse(user).name}</strong> ao Hermes chat!</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col mb-2 space-y-2">
            {messages.map((msg, index) => (
            <div className={msg.user === JSON.parse(user).name ? "flex flex-row-reverse" : "flex flex-row"}>
              <div key={index} className={msg.user === JSON.parse(user).name ? "flex-row-reverse bg-green-300 text-black p-2 rounded-lg max-w-xs justify-end items-start": "bg-blue-300 text-black p-2 rounded-lg max-w-xs flex justify-start items-start"}>
                <strong>{msg.user}:</strong> {msg.content}
                </div>
            </div>
          ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              className="flex-1 border border-gray-300 p-2 rounded-l"
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button
              className="bg-green-400 text-white px-4 py-2 rounded-r"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
