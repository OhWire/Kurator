import React from 'react';

const MedizinischeInfo = ({ patient }) => {
  return (
    <div className="flex flex-col w-92 h-96 bg-custom-light-gray bg-opacity-65 border-2 border-gray-400 rounded-xl overflow-y-auto py-2 z-20">
      <div className="flex">
        <div className="flex flex-col p-2 mx-4">
          <h2 className='text-2xl pb-2 font-Beba'>Anamnese:</h2>
          <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.anamnese || 'Keine Anamnese verfügbar'}</p>
        </div>
    
        <div className="flex flex-col p-2 mx-4">
          <h2 className='text-2xl pb-2 font-Beba'>Aktuelle Probleme:</h2>
          <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.aktuelleProbleme || 'Keine aktuellen Probleme verfügbar'}</p>
        </div>
    
        <div className="flex flex-col p-2 mx-4">
          <h2 className='text-2xl pb-2 font-Beba'>Diagnose:</h2>
          <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.diagnoses || 'Keine Diagnose verfügbar'}</p>
        </div>
    
        <div className="flex flex-col p-2 mx-4">
          <h2 className='text-2xl pb-2 font-Beba'>Behandlung:</h2>
          <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.behandlung || 'Keine Behandlung verfügbar'}</p>
        </div>
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Allergien:</h2>
        {patient.profile.allergies && patient.profile.allergies.length > 0 ? (
          patient.profile.allergies.map((allergy, index) => (
            <div key={index} className="flex flex-col mb-2">
              <p className='font-ibm-plex-mono tracking-tight text-md'>Typ: {allergy.type || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Details: {allergy.details || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Intensität: {allergy.intensity || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Behandlung: {allergy.treatment || 'Keine Angabe'}</p>
            </div>
          ))
        ) : (
          <p className='font-ibm-plex-mono tracking-tight text-md'>Keine Allergien verfügbar</p>
        )}
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Kategorien:</h2>
        {patient.profile.categories && patient.profile.categories.length > 0 ? (
          patient.profile.categories.map((category, index) => (
            <div key={index} className="flex  mb-2 justify-around">
              <p className='font-ibm-plex-mono tracking-tight text-md'>Name: {category.name || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Intensität: {category.intensity || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Details: {category.details || 'Keine Angabe'}</p>
            </div>
          ))
        ) : (
          <p className='font-ibm-plex-mono tracking-tight text-md'>Keine Kategorien verfügbar</p>
        )}
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Evaluation:</h2>
        {patient.profile.evaluation && patient.profile.evaluation.length > 0 ? (
          patient.profile.evaluation.map((evaluation, index) => (
            <div key={index} className="flex flex-col mb-2">
              <p className='font-ibm-plex-mono tracking-tight text-md'>Name: {evaluation.name || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Verantwortlich: {evaluation.responsible || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Häufigkeit: {evaluation.frequency || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Notizen: {evaluation.notes || 'Keine Angabe'}</p>
            </div>
          ))
        ) : (
          <p className='font-ibm-plex-mono tracking-tight text-md'>Keine Evaluation verfügbar</p>
        )}
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Ziele und Maßnahmen:</h2>
        {patient.profile.goalsAndMeasures && patient.profile.goalsAndMeasures.length > 0 ? (
          patient.profile.goalsAndMeasures.map((goal, index) => (
            <div key={index} className="flex flex-col mb-2">
              <p className='font-ibm-plex-mono tracking-tight text-md'>Name: {goal.name || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Ziel: {goal.goal || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Maßnahmen: {goal.measures || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Verantwortlichkeiten: {goal.responsibilities || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Status: {goal.status || 'Keine Angabe'}</p>
            </div>
          ))
        ) : (
          <p className='font-ibm-plex-mono tracking-tight text-md'>Keine Ziele und Maßnahmen verfügbar</p>
        )}
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Wichtige Informationen:</h2>
        <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.importantInfo || 'Keine wichtigen Informationen verfügbar'}</p>
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Medikationen:</h2>
        {patient.profile.medications && patient.profile.medications.length > 0 ? (
          patient.profile.medications.map((medication, index) => (
            <div key={index} className="flex flex-col mb-2">
              <p className='font-ibm-plex-mono tracking-tight text-md'>Name: {medication.name || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Dosis: {medication.dose || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Dauer: {medication.duration || 'Keine Angabe'}</p>
              <p className='font-ibm-plex-mono tracking-tight text-md'>Häufigkeit: {medication.frequency || 'Keine Angabe'}</p>
            </div>
          ))
        ) : (
          <p className='font-ibm-plex-mono tracking-tight text-md'>Keine Medikationen verfügbar</p>
        )}
      </div>

      <div className="flex flex-col p-2 mx-4">
        <h2 className='text-2xl pb-2 font-Beba'>Therapien:</h2>
        <p className='font-ibm-plex-mono tracking-tight text-md'>{patient.profile.therapies || 'Keine Therapien verfügbar'}</p>
      </div>
    </div>
  );
};

export default MedizinischeInfo;