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
  host: 'database-2.cgxo83sfolio.eu-central-1.rds.amazonaws.com', // Ändern Sie die URL entsprechend Ihrer MySQL-Konfiguration
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

// Endpunkt, um Stammdaten hinzuzufügen
app.post('/add-stammdaten', (req, res) => {
  const { vorname, nachname, geburtsdatum, geschlecht, nationalitaet, adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon, zimmernummer } = req.body;

  const query = `INSERT INTO Stammdaten (vorname, nachname, geburtsdatum, geschlecht, nationalitaet, adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon, zimmernummer) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(query, [vorname, nachname, geburtsdatum, geschlecht, nationalitaet, adresse, plz, stadt, land, telefon, email, versicherungsnummer, notfallkontakt, notfalltelefon, zimmernummer], (err, result) => {
    if (err) {
      console.error('Fehler beim Hinzufügen der Stammdaten:', err);
      res.status(500).json({ error: 'Fehler beim Hinzufügen der Stammdaten' });
      return;
    }
    res.status(200).json({ message: 'Stammdaten erfolgreich hinzugefügt', patientId: result.insertId });
  });
});

// Endpunkt, um Step2-Daten hinzuzufügen
app.post('/add-step2-data', (req, res) => {
  const { diagnoses, medications, allergies, importantInfo, therapies, patientId } = req.body;

  const medicationPromises = medications.map(medication => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO Medications (patient_id, name, dose, frequency, duration) VALUES (?, ?, ?, ?, ?)`;
      db.query(query, [patientId, medication.name, medication.dose, medication.frequency, medication.duration], (err, result) => {
        if (err) {
          return reject('Fehler beim Hinzufügen der Medikamente');
        }
        resolve(result);
      });
    });
  });

  const allergyPromises = allergies.map(allergy => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO Allergies (patient_id, type, details, intensity, treatment) VALUES (?, ?, ?, ?, ?)`;
      db.query(query, [patientId, allergy.type, allergy.details, allergy.intensity, allergy.treatment], (err, result) => {
        if (err) {
          return reject('Fehler beim Hinzufügen der Allergien');
        }
        resolve(result);
      });
    });
  });

  const additionalInfoPromise = new Promise((resolve, reject) => {
    const query = `INSERT INTO AdditionalInfo (patient_id, importantInfo, therapies) VALUES (?, ?, ?)`;
    db.query(query, [patientId, importantInfo, therapies], (err, result) => {
      if (err) {
        return reject('Fehler beim Hinzufügen der zusätzlichen Informationen');
      }
      resolve(result);
    });
  });

  Promise.all([...medicationPromises, ...allergyPromises, additionalInfoPromise])
    .then(() => res.status(200).json({ message: 'Daten erfolgreich hinzugefügt' }))
    .catch(error => res.status(500).json({ error }));
});

// Endpunkt, um Step3-Daten hinzuzufügen
app.post('/add-step3-data', (req, res) => {
  const { currentHealth, psychologicalSupport, socialSupport, spiritualSupport, patientId } = req.body;

  const query = `INSERT INTO PsychosocialSupport (patient_id, currentHealth, psychologicalSupport, socialSupport, spiritualSupport) VALUES (?, ?, ?, ?, ?)`;
  
  db.query(query, [patientId, currentHealth, psychologicalSupport, socialSupport, spiritualSupport], (err, result) => {
    if (err) {
      console.error('Fehler beim Hinzufügen der psychosozialen Unterstützung:', err);
      res.status(500).json({ error: 'Fehler beim Hinzufügen der psychosozialen Unterstützung' });
      return;
    }
    res.status(200).json({ message: 'Psychosoziale Unterstützung erfolgreich hinzugefügt' });
  });
});

// Endpunkt, um Step4-Daten hinzuzufügen
app.post('/add-step4-data', (req, res) => {
  const { resources, supportNetwork, copingStrategies, previousTherapies, patientId } = req.body;

  const query = `INSERT INTO Resources (patient_id, resources, supportNetwork, copingStrategies, previousTherapies) VALUES (?, ?, ?, ?, ?)`;
  
  db.query(query, [patientId, resources, supportNetwork, copingStrategies, previousTherapies], (err, result) => {
    if (err) {
      console.error('Fehler beim Hinzufügen der Ressourcen:', err);
      res.status(500).json({ error: 'Fehler beim Hinzufügen der Ressourcen' });
      return;
    }
    res.status(200).json({ message: 'Ressourcen erfolgreich hinzugefügt' });
  });
});

// Endpunkt, um Step5-Daten hinzuzufügen
app.post('/add-step5-data', (req, res) => {
  const { dailyRoutine, nutrition, physicalActivity, sleepPattern, patientId } = req.body;

  const query = `INSERT INTO DailyLife (patient_id, dailyRoutine, nutrition, physicalActivity, sleepPattern) VALUES (?, ?, ?, ?, ?)`;
  
  db.query(query, [patientId, dailyRoutine, nutrition, physicalActivity, sleepPattern], (err, result) => {
    if (err) {
      console.error('Fehler beim Hinzufügen der Alltagsdaten:', err);
      res.status(500).json({ error: 'Fehler beim Hinzufügen der Alltagsdaten' });
      return;
    }
    res.status(200).json({ message: 'Alltagsdaten erfolgreich hinzugefügt' });
  });
});

// Endpunkt, um Step6-Daten hinzuzufügen
app.post('/add-step6-data', (req, res) => {
  const { goalsAndMeasures, patientId } = req.body;

  const goalPromises = goalsAndMeasures.map(goal => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO GoalsAndMeasures (patient_id, name, goal, measures, responsibilities, status) VALUES (?, ?, ?, ?, ?, ?)`;
      db.query(query, [patientId, goal.name, goal.goal, goal.measures, goal.responsibilities, goal.status], (err, result) => {
        if (err) {
          return reject('Fehler beim Hinzufügen der Ziele und Maßnahmen');
        }
        resolve(result);
      });
    });
  });

  Promise.all(goalPromises)
    .then(() => res.status(200).json({ message: 'Ziele und Maßnahmen erfolgreich hinzugefügt' }))
    .catch(error => res.status(500).json({ error }));
});

// Endpunkt, um Step7-Daten hinzuzufügen
app.post('/step7', (req, res) => {
  const { evaluation, nurse, management, patientId } = req.body;

  const insertEvaluationData = evaluation.map(evaluationItem => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO Evaluation (patient_id, name, responsible, frequency, notes) VALUES (?, ?, ?, ?, ?)`;
      db.query(query, [patientId, evaluationItem.name, evaluationItem.responsible, evaluationItem.frequency, evaluationItem.notes], (err, result) => {
        if (err) {
          return reject('Fehler beim Hinzufügen der Evaluation');
        }
        resolve(result);
      });
    });
  });

  const insertNurseData = new Promise((resolve, reject) => {
    const nurseQuery = `INSERT INTO Nurse (patient_id, nurse) VALUES (?, ?)`;
    db.query(nurseQuery, [patientId, nurse], (err, result) => {
      if (err) {
        return reject('Fehler beim Hinzufügen der Nurse-Daten');
      }
      resolve(result);
    });
  });

  const insertManagementData = new Promise((resolve, reject) => {
    const managementQuery = `INSERT INTO Management (patient_id, management) VALUES (?, ?)`;
    db.query(managementQuery, [patientId, management], (err, result) => {
      if (err) {
        return reject('Fehler beim Hinzufügen der Management-Daten');
      }
      resolve(result);
    });
  });

  Promise.all([...insertEvaluationData, insertNurseData, insertManagementData])
    .then(() => res.status(200).json({ message: 'Daten erfolgreich hinzugefügt' }))
    .catch(error => res.status(500).json({ error }));
});

// Endpunkt, um alle Patientendaten abzurufen
app.get('/patients', (req, res) => {
  const query = `SELECT * FROM Stammdaten`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Patientendaten:', err);
      res.status(500).json({ error: 'Fehler beim Abrufen der Patientendaten' });
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
