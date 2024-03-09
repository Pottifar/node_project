const express = require('express');
const app = express();

app.post('/api/login', (req, res) => {
    const { username } = req.body;
  
    // In a real app, you would validate the username and password, and possibly generate a token
  
    res.json({
      message: `Welcome, ${username}!`
    });
  });