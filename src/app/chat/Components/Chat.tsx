'use client'

import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ApiConnection } from '../../../../enums';

interface Message {
  user: string;
  content: string;
}

interface ChatProps { }

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
      console.log(receivedMessage)
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
        user: username,
        content: messageInput,
      };

      socket.emit('message', newMessage);

        setMessages(messages => [...messages, newMessage]);

      setMessageInput('');
    }
  };

  return (
    <div>
      <div>
        <h2>Welcome, {username || 'Guest'}!</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;