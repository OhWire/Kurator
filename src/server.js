import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { registerUser, authenticateUser, confirmUser } from './auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

const corsOptions = {
  origin: '*', // Erlauben Sie alle Ursprünge
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Registrierung
app.post('/register', (req, res) => {
  const { username, password, email, givenName, familyName, birthdate } = req.body;
  console.log('Request Body:', req.body); // Log the request body for debugging
  registerUser(username, password, email, givenName, familyName, birthdate, (err, result) => {
    if (err) {
      console.error('Error registering user:', err); // Log the error for debugging
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User registered successfully', user: result });
  });
});

// Bestätigung
app.post('/confirm', (req, res) => {
  const { email, code } = req.body;
  console.log('Received data:', { email, code }); // Log received data

  confirmUser(email, code, (err, result) => {
    if (err) {
      console.error('Confirmation error:', err); // Log the error for debugging
      return res.status(400).json({ message: 'Bestätigung fehlgeschlagen!', error: err.message });
    }
    res.status(200).send({ message: 'Bestätigung erfolgreich!', result });
  });
});

// Anmeldung
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Request Body:', req.body); // Log the request body for debugging
  authenticateUser(username, password, (err, result) => {
    if (err) {
      console.error('Authentication error:', err); // Log the error for debugging
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'User authenticated successfully', token: result.getAccessToken().getJwtToken() });
  });
});

app.listen(PORT, '0.0.0.0', () => { // Binden Sie den Server an alle Netzwerkschnittstellen
  console.log(`Server läuft auf http://0.0.0.0:${PORT}`);
});
