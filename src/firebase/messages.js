import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore

// Send a new message
const sendMessage = async (senderId, receiverId, text) => {
  try {
    await addDoc(collection(db, "messages"), {
      senderId,
      receiverId,
      text,
      timestamp: Timestamp.now(),
    });
    console.log("Message sent!");
  } catch (error) {
    console.error("Error sending message: ", error);
  }
};

// Fetch messages between two users in real-time
const fetchMessages = (senderId, receiverId, callback) => {
  const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

  return onSnapshot(q, (snapshot) => {
    const messages = [];
    snapshot.forEach((doc) => {
      const msg = doc.data();
      if (
        (msg.senderId === senderId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === senderId)
      ) {
        messages.push(msg);
      }
    });
    callback(messages);
  });
};

export { sendMessage, fetchMessages };
