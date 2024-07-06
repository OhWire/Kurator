// confirm.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.post('/confirm', (req, res) => {
  const { email, code } = req.body;
  // Beispiel-Bestätigungslogik
  if (email && code === '123456') {
    res.status(200).send({ message: 'Bestätigung erfolgreich!' });
  } else {
    res.status(400).send({ message: 'Bestätigung fehlgeschlagen!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
