import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
};

const db = mysql.createConnection(dbConfig);

db.connect(err => {
  if (err) {
    console.error('Fehler beim Verbinden zur Datenbank:', err.message);
    return;
  }
  console.log('Erfolgreich mit der Datenbank verbunden.');
});

app.post('/api/stammdatenblatt', (req, res) => {
  console.log('Empfangene Daten:', req.body);

  const {
    vorname, nachname, geburtsname, geburtsdatum, geschlecht, nationalitaet,
    adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon
  } = req.body;

  const sql = 'INSERT INTO Stammdatenblatt (vorname, nachname, geburtsname, geburtsdatum, geschlecht, nationalitaet, adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [
    vorname, nachname, geburtsname, geburtsdatum, geschlecht, nationalitaet,
    adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon
  ], (err, results) => {
    if (err) {
      console.error('Fehler beim Einfügen des Stammdatenblatts:', err);
      res.status(500).send('Fehler beim Hinzufügen des Stammdatenblatts.');
      return;
    }
    console.log('Stammdatenblatt erfolgreich hinzugefügt:', results);
    res.send('Stammdatenblatt erfolgreich hinzugefügt.');
  });
});

app.get('/api/stammdatenblatt', (req, res) => {
  const sql = 'SELECT * FROM Stammdatenblatt';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Stammdatenblätter:', err);
      res.status(500).send('Fehler beim Abrufen der Stammdatenblätter.');
      return;
    }
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send('Keine Stammdatenblätter gefunden.');
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
