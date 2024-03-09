import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username,
      password
    };

    const response = await axios({
      url: 'http://localhost:5000/api/register',
      method: 'POST',
      data: payload
    });

    alert(response.data.message);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;