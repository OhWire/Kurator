import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { confirmUser } from './auth.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/confirm', (req, res) => {
  const { email, code } = req.body;
  console.log('Request Body:', req.body); // Log the request body for debugging
  confirmUser(email, code, (err, result) => {
    if (err) {
      console.error('Confirmation error:', err); // Log the error for debugging
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User confirmed successfully' });
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
