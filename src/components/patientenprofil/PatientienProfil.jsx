import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MedizinischeInfo from './MedizinischeInfo';
import Biografie from './Biografie';
import Granny from '../img/Granny1.jpeg'
import Checklist from './Checklist';

const PatientenProfil = () => {
  const { state } = useLocation();
  const { patient } = state;
  const [activeTab, setActiveTab] = useState('Dokumentation');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dokumentation':
        return <Checklist />;
      case 'Medizinische Informationen':
        return <MedizinischeInfo />;
      case 'Biografie':
        return <Biografie />;
      default:
        return <Checklist />;
    }
  };

  return (
    <div className="p-6 flex flex-col   w-full h-full  justify-start items-start ">
      <div className="  rounded-2xl  p-8 w-full    ">
        <div className="flex  items-center w-full  ">
          <div className="flex  items-center justify-center">
            <img
              src={Granny} // Replace with actual path or state
              alt={patient.name}
              className=" flex border-4 border-custom-dark-gray border-opacity-40 justify-center align-center text-white w-24 h-24 rounded-full mr-6  bg-custom-green"
            />
          </div>
          <div className="bg-custom-green bg-opacity-20 p-4 rounded-xl shadow-lg  ">
            <div>
              <h1 className="font-fjalla text-custom-dark-gray   text-4xl  py-2 ">{patient.name.toUpperCase()}</h1>
              <p className='font-lato  font-semibold  text-sm py-1'>ALTER: {new Date().getFullYear() - patient.birthYear} JAHRE</p>
              <p className='font-lato  font-semibold  text-sm py-1'>GESCHLECHT: {patient.gender || 'UNBEKANNT'}</p>
              <p className='font-lato font-semibold  text-sm py-1'>AUFENTHALTSORT: {patient.location || 'UNBEKANNT'}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full h-4 justify-end items-end   ">
          <button
            className={`min-w-48 text-lg border z-20    bg-opacity-50 font-Beba tracking-wider  py-2 my-6 mx-4 rounded-full    ${activeTab === 'Dokumentation' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray  ' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20   text-black'}`}
            onClick={() => setActiveTab('Dokumentation')}
          >
            Dokumentation
          </button>
          <button
            className={`min-w-48 text-lg border z-20   bg-opacity-50 font-Beba tracking-wider  py-2 my-6 mx-4 rounded-full    ${activeTab === 'Medizinische Informationen' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray  ' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20   text-black'}`}
            onClick={() => setActiveTab('Medizinische Informationen')}
          >
            Med. Informationen
          </button>
          <button
            className={`min-w-48 text-lg border z-20   bg-opacity-50 font-Beba tracking-wider  py-2 my-6 mx-4 rounded-full    ${activeTab === 'Biografie' ? ' text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray  ' : 'bg-custom-light-gray bg-opacity-20  border border-black border-opacity-15  text-black'}`}
            onClick={() => setActiveTab('Biografie')}
          >
            Biografie
          </button>
        </div>
        </div>

        {renderTabContent()}
      </div>
    
  );
};

export default PatientenProfil;
