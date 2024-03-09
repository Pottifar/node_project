import React from 'react';
import Login from './Components/Login';
import Register from './Components/Registrer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <Login />
      <h1>Register</h1>
      <Register />
    </div>
  );
}

export default App;