import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://add-your-ip:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching message", err);
      });
  }, []);

  return (
    <>
      <h1>Welcome to chaicode frontend</h1>
      <h2>data {message}</h2>
    </>
  );
}

export default App;
