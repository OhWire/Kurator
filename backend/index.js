const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL-Verbindung
const db = mysql.createConnection({
  host: 'database-2.cjeguksiyehy.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'PatDocTest',
  database: 'Patientenprofile'
});

db.connect(err => {
  if (err) {
    console.error('Fehler beim Verbinden mit der Datenbank:', err);
    return;
  }
  console.log('Verbunden mit der MySQL-Datenbank.');
});

// Endpunkt, um alle Stammdaten abzurufen
app.get('/stammdaten', (req, res) => {
  const query = `SELECT * FROM Stammdatenblatt`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Stammdaten:', err);
      res.status(500).json({ error: 'Fehler beim Abrufen der Stammdaten' });
      return;
    }
    res.status(200).json(results);
  });
});

// Endpunkt, um Evaluation-Daten eines bestimmten Patienten abzurufen
app.get('/evaluation/:patientId', (req, res) => {
  const { patientId } = req.params;
  const query = `SELECT * FROM Evaluation WHERE patient_id = ?`;
  db.query(query, [patientId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Evaluation:', err);
      res.status(500).json({ error: 'Fehler beim Abrufen der Evaluation' });
      return;
    }
    res.status(200).json(results);
  });
});

// Endpunkt, um Nurse-Daten eines bestimmten Patienten abzurufen
app.get('/nurse/:patientId', (req, res) => {
  const { patientId } = req.params;
  const query = `SELECT * FROM Nurse WHERE patient_id = ?`;
  db.query(query, [patientId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Nurse-Daten:', err);
      res.status(500).json({ error: 'Fehler beim Abrufen der Nurse-Daten' });
      return;
    }
    res.status(200).json(results);
  });
});

// Endpunkt, um Management-Daten eines bestimmten Patienten abzurufen
app.get('/management/:patientId', (req, res) => {
  const { patientId } = req.params;
  const query = `SELECT * FROM Management WHERE patient_id = ?`;
  db.query(query, [patientId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Management-Daten:', err);
      res.status(500).json({ error: 'Fehler beim Abrufen der Management-Daten' });
      return;
    }
    res.status(200).json(results);
  });
});

// Endpunkt, um Evaluation-Daten hinzuzufügen
app.post('/step7', (req, res) => {
  const { evaluation, nurse, management } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  // Insert evaluation data
  const insertEvaluationData = evaluation.map(evaluationItem => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO Evaluation (patient_id, name, responsible, frequency, notes)
        VALUES (?, ?, ?, ?, ?)
      `;
      db.query(query, [
        patientId,
        evaluationItem.name,
        evaluationItem.responsible,
        evaluationItem.frequency,
        evaluationItem.notes
      ], (err, result) => {
        if (err) {
          console.error('Fehler beim Einfügen der Evaluation:', err);
          return reject('Fehler beim Einfügen der Evaluation');
        }
        resolve(result);
      });
    });
  });

  // Insert nurse data
  const insertNurseData = new Promise((resolve, reject) => {
    const nurseQuery = `INSERT INTO Nurse (patient_id, nurse) VALUES (?, ?)`;
    db.query(nurseQuery, [patientId, nurse], (err, result) => {
      if (err) {
        console.error('Fehler beim Einfügen der Nurse-Daten:', err);
        return reject('Fehler beim Einfügen der Nurse-Daten');
      }
      resolve(result);
    });
  });

  // Insert management data
  const insertManagementData = new Promise((resolve, reject) => {
    const managementQuery = `INSERT INTO Management (patient_id, management) VALUES (?, ?)`;
    db.query(managementQuery, [patientId, management], (err, result) => {
      if (err) {
        console.error('Fehler beim Einfügen der Management-Daten:', err);
        return reject('Fehler beim Einfügen der Management-Daten');
      }
      resolve(result);
    });
  });

  Promise.all([...insertEvaluationData, insertNurseData, insertManagementData])
    .then(() => {
      res.status(200).json({ message: 'Daten erfolgreich eingefügt' });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
