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

// API endpoint to add a new entry to Stammdaten
app.post('/add-stammdaten', (req, res) => {
  const {
    vorname, nachname, geburtsname, geburtsdatum, geschlecht,
    nationalitaet, adresse, plz, stadt, land, telefon, email,
    versicherungsnummer, notfallkontakt, notfalltelefon, zimmernummer
  } = req.body;

  const query = `
    INSERT INTO Stammdaten (
      vorname, nachname, geburtsname, geburtsdatum, geschlecht, nationalitaet,
      adresse, plz, stadt, land, telefon, email, versicherungsnummer,
      notfallkontakt, notfalltelefon, zimmernummer
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    vorname, nachname, geburtsname, geburtsdatum, geschlecht, nationalitaet,
    adresse, plz, stadt, land, telefon, email, versicherungsnummer,
    notfallkontakt, notfalltelefon, zimmernummer
  ], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
  });
});

// API endpoint to add step2 data
app.post('/add-step2-data', (req, res) => {
  const {
    diagnoses,
    medications,
    allergies,
    importantInfo,
    therapies
  } = req.body;

  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  // Insert diagnoses
  const diagnosisQuery = `INSERT INTO Diagnoses (patient_id, diagnosis) VALUES (?, ?)`;
  db.query(diagnosisQuery, [patientId, diagnoses], (err, result) => {
    if (err) {
      console.error('Error inserting diagnosis:', err);
      res.status(500).json({ error: 'Error inserting diagnosis' });
      return;
    }
  });

  // Insert medications
  medications.forEach(medication => {
    const medicationQuery = `
      INSERT INTO Medications (patient_id, name, dose, frequency, duration)
      VALUES (?, ?, ?, ?, ?)
    `;
    db.query(medicationQuery, [
      patientId,
      medication.name,
      medication.dose,
      medication.frequency,
      medication.duration
    ], (err, result) => {
      if (err) {
        console.error('Error inserting medication:', err);
        res.status(500).json({ error: 'Error inserting medication' });
        return;
      }
    });
  });

  // Insert allergies
  allergies.forEach(allergy => {
    const allergyQuery = `
      INSERT INTO Allergies (patient_id, type, intensity, treatment, details)
      VALUES (?, ?, ?, ?, ?)
    `;
    db.query(allergyQuery, [
      patientId,
      allergy.type,
      allergy.intensity,
      allergy.treatment,
      allergy.details
    ], (err, result) => {
      if (err) {
        console.error('Error inserting allergy:', err);
        res.status(500).json({ error: 'Error inserting allergy' });
        return;
      }
    });
  });

  // Insert important information
  const importantInfoQuery = `INSERT INTO ImportantInfo (patient_id, info) VALUES (?, ?)`;
  db.query(importantInfoQuery, [patientId, importantInfo], (err, result) => {
    if (err) {
      console.error('Error inserting important information:', err);
      res.status(500).json({ error: 'Error inserting important information' });
      return;
    }
  });

  // Insert therapies
  const therapiesQuery = `INSERT INTO Therapies (patient_id, therapy) VALUES (?, ?)`;
  db.query(therapiesQuery, [patientId, therapies], (err, result) => {
    if (err) {
      console.error('Error inserting therapy:', err);
      res.status(500).json({ error: 'Error inserting therapy' });
      return;
    }
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

// API endpoint to add step3 data
app.post('/add-step3-data', (req, res) => {
  const { categories } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  categories.forEach(category => {
    const query = `
      INSERT INTO Categories (patient_id, name, intensity, details)
      VALUES (?, ?, ?, ?)
    `;
    db.query(query, [
      patientId,
      category.name,
      category.rating,
      category.details
    ], (err, result) => {
      if (err) {
        console.error('Error inserting category:', err);
        res.status(500).json({ error: 'Error inserting category' });
        return;
      }
    });
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

// API endpoint to add step4 data
app.post('/add-step4-data', (req, res) => {
  const { categories } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  categories.forEach(category => {
    const query = `
      INSERT INTO Categories (patient_id, name, intensity, details)
      VALUES (?, ?, ?, ?)
    `;
    db.query(query, [
      patientId,
      category.name,
      category.rating,
      category.details
    ], (err, result) => {
      if (err) {
        console.error('Error inserting category:', err);
        res.status(500).json({ error: 'Error inserting category' });
        return;
      }
    });
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

// API endpoint to add step5 data
app.post('/add-step5-data', (req, res) => {
  const { categories } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  categories.forEach(category => {
    const query = `
      INSERT INTO Categories (patient_id, name, intensity, details)
      VALUES (?, ?, ?, ?)
    `;
    db.query(query, [
      patientId,
      category.name,
      category.intensity,
      category.details
    ], (err, result) => {
      if (err) {
        console.error('Error inserting category:', err);
        res.status(500).json({ error: 'Error inserting category' });
        return;
      }
    });
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

// API endpoint to add step6 data
app.post('/add-step6-data', (req, res) => {
  const { goalsAndMeasures } = req.body;
  const patientId = req.body.patientId; // Assuming patientId is provided in the request body

  goalsAndMeasures.forEach(goalAndMeasure => {
    const query = `
      INSERT INTO GoalsAndMeasures (patient_id, name, goal, measures, responsibilities, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [
      patientId,
      goalAndMeasure.name,
      goalAndMeasure.goal,
      goalAndMeasure.measures,
      goalAndMeasure.responsibilities,
      goalAndMeasure.status
    ], (err, result) => {
      if (err) {
        console.error('Error inserting goals and measures:', err);
        res.status(500).json({ error: 'Error inserting goals and measures' });
        return;
      }
    });
  });

  res.status(200).json({ message: 'Data inserted successfully' });
});

// API endpoint to add step7 data
app.post('/add-step7-data', (req, res) => {
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
