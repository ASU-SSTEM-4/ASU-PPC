import './App.css';
import { React, useState } from 'react';

function App() {

  const [msg, setMsg] = useState("");

  onclick = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from MongoDB: " + data.message);
        setMsg(data.message);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={onclick}>Click Me!</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
