import React, { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? <Login setUser={setUser} /> : <Chat user={user} receiverId="receiver123" />}
    </div>
  );
};

export default App;
