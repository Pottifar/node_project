const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // import the User model

const app = express();

app.use(express.json()); // middleware for parsing json request bodies

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).send('User already exists.');

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  user = new User({ username, password: hashedPassword });
  await user.save();

  res.send('User registered successfully');
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid username.');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid password.');

  res.json({
    message: `Welcome, ${username}!`
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});