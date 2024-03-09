import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password
    };

    const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
    const response = await axios.post(url, payload);

    alert(response.data.message);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="input"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="input"
        />
        <button type="submit" className="button">
          {isLogin ? "Login" : "Register"}
        </button>
        <button type="button" onClick={() => setIsLogin(!isLogin)} className="button">
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </form>
    </div>
  );
}

export default App;