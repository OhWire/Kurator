const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'pd-db.cgxo83sfolio.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'PatDocTest',
  database: 'Patientenprofile'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.post('/step7', (req, res) => {
  const { evaluation, nurse, management } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  // Insert evaluation data
  evaluation.forEach(evaluationItem => {
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
        console.error('Error inserting evaluation:', err);
        res.status(500).json({ error: 'Error inserting evaluation' });
        return;
      }
    });
  });

  // Insert nurse data
  const nurseQuery = `INSERT INTO Nurse (patient_id, nurse) VALUES (?, ?)`;
  db.query(nurseQuery, [patientId, nurse], (err, result) => {
    if (err) {
      console.error('Error inserting nurse data:', err);
      res.status(500).json({ error: 'Error inserting nurse data' });
      return;
    }
  });

  // Insert management data
  const managementQuery = `INSERT INTO Management (patient_id, management) VALUES (?, ?)`;
  db.query(managementQuery, [patientId, management], (err, result) => {
    if (err) {
      console.error('Error inserting management data:', err);
      res.status(500).json({ error: 'Error inserting management data' });
      return;
    }
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
