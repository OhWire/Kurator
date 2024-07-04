import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Hinzugefügt
import { authenticateUser } from './auth.js';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // CORS erlauben

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  authenticateUser(username, password, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User authenticated successfully', token: result.getAccessToken().getJwtToken() });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
