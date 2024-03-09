import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username
    };

    const response = await axios({
      url: 'http://localhost:5000/api/login',
      method: 'POST',
      data: payload
    });

    alert(response.data.message);

    setUsername("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;