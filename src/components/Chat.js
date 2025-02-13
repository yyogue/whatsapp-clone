import React, { useState, useEffect } from "react";
import { sendMessage, fetchMessages } from "../firebase/messages";

const Chat = ({ user, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsubscribe = fetchMessages(user.uid, receiverId, setMessages);
    return () => unsubscribe();
  }, [user.uid, receiverId]);

  const handleSend = async () => {
    if (newMessage.trim()) {
      await sendMessage(user.uid, receiverId, newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Welcome, {user.displayName}!</h2> {/* Greeting message */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.senderId === user.uid ? "sent" : "received"}>
            <p>{msg.text}</p>
            <span>{new Date(msg.timestamp.seconds * 1000).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
