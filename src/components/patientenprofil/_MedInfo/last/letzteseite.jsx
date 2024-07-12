import React, { useState, useEffect } from 'react';
import patientData from './patientData.json'; // Importing JSON directly

const PatientInfoComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating fetch from an API or file read
    setData(patientData);
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Handle loading state if needed
  }

  const {
    vorname,
    nachname,
    geburtsdatum,
    geschlecht,
    adresse,
    plz,
    stadt,
    email,
    telefon,
    notfallkontakt,
    notfalltelefon,
    versicherungsnummer,
    zimmernummer,
    nationalitaet,
    allergies,
    categories,
    diagnoses,
    evaluation,
    goalsAndMeasures,
    importantInfo,
    medications,
    therapies
  } = data;

  return (
    <div className="flex-col overflow-y-auto patient-info z-20 flex max-w-screen h-screen">
      <h2>Patient Information</h2>
      <div>
        <strong>Name:</strong> {vorname} {nachname}
      </div>
      <div><strong>Geburtsdatum:</strong> {geburtsdatum}</div>
      <div><strong>Geschlecht:</strong> {geschlecht}</div>
      <div><strong>Adresse:</strong> {adresse}, {plz} {stadt}</div>
      <div><strong>E-Mail:</strong> {email}</div>
      <div><strong>Telefon:</strong> {telefon}</div>
      <div><strong>Notfallkontakt:</strong> {notfallkontakt}</div>
      <div><strong>Notfalltelefon:</strong> {notfalltelefon}</div>
      <div><strong>Versicherungsnummer:</strong> {versicherungsnummer}</div>
      <div><strong>Zimmernummer:</strong> {zimmernummer}</div>
      <div><strong>Nationalität:</strong> {nationalitaet}</div>

      <h3>Allergien</h3>
      <ul>
        {allergies.map((allergy, index) => (
          <li key={index}>
            <strong>Typ:</strong> {allergy.type}<br />
            <strong>Details:</strong> {allergy.details}<br />
            <strong>Intensität:</strong> {allergy.intensity}<br />
            <strong>Behandlung:</strong> {allergy.treatment}
          </li>
        ))}
      </ul>

      <h3>Kategorien</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <strong>Name:</strong> {category.name}<br />
            <strong>Details:</strong> {category.details}<br />
            <strong>Intensität:</strong> {category.intensity}
          </li>
        ))}
      </ul>

      <h3>Diagnosen</h3>
      <div><strong>Diagnosen:</strong> {diagnoses}</div>

      <h3>Evaluation</h3>
      <ul>
        {evaluation.map((evalItem, index) => (
          <li key={index}>
            <strong>Name:</strong> {evalItem.name}<br />
            <strong>Frequenz:</strong> {evalItem.frequency}<br />
            <strong>Verantwortlich:</strong> {evalItem.responsible}<br />
            <strong>Notizen:</strong> {evalItem.notes}
          </li>
        ))}
      </ul>

      <h3>Ziele und Maßnahmen</h3>
      <ul>
        {goalsAndMeasures.map((goal, index) => (
          <li key={index}>
            <strong>Name:</strong> {goal.name}<br />
            <strong>Ziel:</strong> {goal.goal}<br />
            <strong>Maßnahmen:</strong> {goal.measures}<br />
            <strong>Verantwortlichkeiten:</strong> {goal.responsibilities}<br />
            <strong>Status:</strong> {goal.status}
          </li>
        ))}
      </ul>

      <h3>Wichtige Informationen</h3>
      <div><strong>Wichtige Informationen:</strong> {importantInfo}</div>

      <h3>Medikationen</h3>
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>
            <strong>Name:</strong> {medication.name}<br />
            <strong>Dosis:</strong> {medication.dose}<br />
            <strong>Dauer:</strong> {medication.duration}<br />
            <strong>Häufigkeit:</strong> {medication.frequency}
          </li>
        ))}
      </ul>

      <h3>Therapien</h3>
      <div><strong>Therapien:</strong> {therapies}</div>
    </div>
  );
};

export default PatientInfoComponent;
