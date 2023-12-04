"use client"
import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { io, Socket } from 'socket.io-client';
import { ApiConnection } from '../../../../enums';

interface Message {
  user: string;
  content: string;
}

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const cookies = parseCookies(null);
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
      console.log(receivedMessage);
      setMessages((messages) => [...messages, receivedMessage]);
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
        user: username,
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
          <h2 className="text-xl font-semibold">{username || 'Guest'}</h2>
          <input
            className="border border-gray-300 p-2"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col items-end mb-2">
              <div className="bg-green-300 text-black p-2 rounded-lg max-w-xs">
                <strong>{msg.user}:</strong> {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <input
              className="flex-1 border border-gray-300 p-2 rounded-l"
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
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
