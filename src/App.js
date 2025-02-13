import React from "react";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h2>Welcome, {user?.displayName}</h2>
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
