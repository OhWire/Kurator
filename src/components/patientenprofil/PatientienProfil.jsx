import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MedizinischeInfo from './_MedInfo/MedizinischeInfo';
import Biografie from './_MedInfo/Biografie';
import Granny from '../img/Granny1.jpeg';
import Checklist from './_MedInfo/Checklist';
import Vitalzeichenprotokoll from './_MedInfo/Vitalzeichenprotokoll';
import Aktivitäten from './_MedInfo/Aktivitäten';
import Wunddoku from './_MedInfo/Wunddoku';
import MedicationPlan from './_MedInfo/Medikationsplan';

const PatientenProfil = () => {
  const { state } = useLocation();
  const { patient } = state || {};
  const [activeTab, setActiveTab] = useState('Dokumentation');

  if (!patient) {
    return <div>Patientendaten nicht verfügbar</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dokumentation':
      case 'Checkliste':
        return <Checklist />;
      case 'Medizinische Informationen':
        return <MedizinischeInfo patient={patient} />;
      case 'Biografie':
        return <Biografie biography={patient.biography || 'Keine Biografie verfügbar'} />;
      case 'Vitalzeichenprotokoll':
        return <Vitalzeichenprotokoll />;
      case 'Aktivitäten':
        return <Aktivitäten />;
      case 'Wunddokumentation':
        return <Wunddoku />;
      case 'Medikationsplan':
        return <MedicationPlan patient={patient} />;
      default:
        return <Checklist />;
    }
  };

  return (
    <div className="p-4 flex flex-col w-full h-full justify-start items-start z-20 overflow-y-auto">
      <div className="flex flex-col rounded-2xl p-4 w-full h-full ">
        <div className="flex justify-between items-center w-full mb-12">
          <div className="flex items-center bg-custom-green bg-opacity-20 px-6 py-6 rounded-xl shadow-lg w-[40%]">
            <div className="flex items-center justify-center">
              <img
                src={Granny}
                alt={patient.name}
                className="flex border-4 border-custom-dark-gray border-opacity-40 justify-center align-center text-white w-16 h-16 rounded-full mr-4 bg-custom-green"
              />
            </div>
            <div className='flex space-x-4 justify-around items-center w-full'>
              <div className="flex">
                <h1 className="font-fjalla text-custom-dark-gray text-2xl py-1">
                  {patient.name ? patient.name.toUpperCase() : 'NAME NICHT VERFÜGBAR'}
                </h1>
              </div>
              <div className="flex flex-col">
                <p className='font-lato font-semibold text-xs py-1'>
                  ALTER: {patient.birthYear ? new Date().getFullYear() - patient.birthYear : 'UNBEKANNT'} JAHRE
                </p>
                <p className='font-lato font-semibold text-xs py-1'>
                  GESCHLECHT: {patient.gender || 'UNBEKANNT'}
                </p>
                <p className='font-lato font-semibold text-xs py-1'>
                  AUFENTHALTSORT: {patient.location || 'UNBEKANNT'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-6">
            <button
              className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Dokumentation' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
              onClick={() => setActiveTab('Dokumentation')}
            >
              Dokumentation
            </button>
            <button
              className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Medizinische Informationen' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
              onClick={() => setActiveTab('Medizinische Informationen')}
            >
              Med. Informationen
            </button>
            <button
              className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Biografie' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray bg-opacity-20 border border-black border-opacity-15 text-black'}`}
              onClick={() => setActiveTab('Biografie')}
            >
              Biografie
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center w-full h-12 mb-4">
          <button className='w-[12vw] h-10 px-4 bg-custom-light-gray hover:bg-custom-dark-gray transition-all duration-300 hover:text-white text-sm font-lato font-light rounded-2xl hover:cursor-pointer'
            onClick={() => setActiveTab('Checkliste')}
          >
            Checkliste
          </button>
          <button className='w-[12vw] h-10 px-4 bg-custom-light-gray hover:bg-custom-dark-gray transition-all duration-300 hover:text-white text-sm font-lato font-light rounded-2xl hover:cursor-pointer'
            onClick={() => setActiveTab('Vitalzeichenprotokoll')}
          >
            Vitalzeichenprotokoll
          </button>
          <button className='w-[12vw] h-10 px-4 bg-custom-light-gray hover:bg-custom-dark-gray transition-all duration-300 hover:text-white text-sm font-lato font-light rounded-2xl hover:cursor-pointer'
            onClick={() => setActiveTab('Aktivitäten')}
          >
            Aktivitäten
          </button>
          <button className='w-[12vw] h-10 px-4 bg-custom-light-gray hover:bg-custom-dark-gray transition-all duration-300 hover:text-white text-sm font-lato font-light rounded-2xl hover:cursor-pointer'
            onClick={() => setActiveTab('Wunddokumentation')}
          >
            Wunddokumentation
          </button>
          <button
            className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Medikationsplan' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
            onClick={() => setActiveTab('Medikationsplan')}
          >
            Medikationsplan
          </button>
        </div>
      </div>

      <div className="flex-grow w-full h-[180%] overflow-y-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default PatientenProfil;
