import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { confirmUser } from './auth.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/confirm', (req, res) => {
  const { email, code } = req.body;
  confirmUser(email, code, (err, result) => {
    if (err) {
      console.error('Confirmation error:', err); // Log the error for debugging
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User confirmed successfully' });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
