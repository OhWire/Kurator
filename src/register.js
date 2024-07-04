import express from 'express';
import bodyParser from 'body-parser';
import { registerUser } from './auth.js';

const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  registerUser(username, password, email, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User registered successfully', user: result });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
