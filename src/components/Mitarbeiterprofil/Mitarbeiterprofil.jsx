import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Biografie from '../patientenprofil/Biografie';
import Granny from '../img/Granny1.jpeg';
import Checklist from '../patientenprofil/Checklist';
import employeeData from "./employeeData.json"
import Qualifikationen from './Qualifikationen';
import Kontakt from './Kontakt';
import Persönliches from './Persönliches';

const Mitarbeiterprofil = () => {
  const { state } = useLocation();
  const { patient } = state || {};
  const [activeTab, setActiveTab] = useState('Dokumentation');
  const [employee, setEmployee] = useState(employeeData.employee);
  const [isEditing, setIsEditing] = useState(false);
  const [editableEmployee, setEditableEmployee] = useState(employee);

  useEffect(() => {
    setEditableEmployee(employee);
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableEmployee({ ...editableEmployee, [name]: value });
  };

  const handleSave = () => {
    setEmployee(editableEmployee);
    setIsEditing(false);
    // Save updated data to server or localStorage
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dokumentation':
        return <Persönliches />;
      case 'Medizinische Informationen':
        return <Qualifikationen />;
      case 'Biografie':
        return <Kontakt />;
      default:
        return <Persönliches />;
    }
  };

  return (
    <div className="p-6 flex flex-col w-full h-full justify-start items-start z-20">
      <div className="rounded-2xl p-8 w-full">
        <div className="flex items-center w-full justify-between">
          
          <div className="bg-custom-green bg-opacity-20 flex justify-center items-center  p-6 ml-16 rounded-xl shadow-lg">
            <div className='flex flex-col justify-center items-center'>
              {isEditing ? (
                <>
                  <div className="flex flex-col ">
                  <input
                    type="text"
                    name="name"
                    value={editableEmployee.name}
                    onChange={handleInputChange}
                    className="font-fjalla text-custom-dark-gray text-4xl py-2 bg-transparent"
                  />
                  <input
                    type="number"
                    name="birthYear"
                    value={editableEmployee.birthYear}
                    onChange={handleInputChange}
                    className="font-lato font-semibold text-sm py-1 bg-transparent"
                  />
                  <input
                    type="text"
                    name="gender"
                    value={editableEmployee.gender}
                    onChange={handleInputChange}
                    className="font-lato font-semibold text-sm py-1 bg-transparent"
                  />
                  <input
                    type="text"
                    name="location"
                    value={editableEmployee.location}
                    onChange={handleInputChange}
                    className="font-lato font-semibold text-sm py-1 bg-transparent"
                  />
                  <input
                    type="text"
                    name="address"
                    value={editableEmployee.address}
                    onChange={handleInputChange}
                    className="font-lato font-semibold text-sm py-1 bg-transparent"
                  />
                  <input
                    type="text"
                    name="position"
                    value={editableEmployee.position}
                    onChange={handleInputChange}
                    className="font-lato font-semibold text-sm py-1 bg-transparent"
                  />
                  </div>
                </>
              ) : (
                <>
                 <div className="flex flex-col justify-center items-center w-64">
                    <h1 className="font-fjalla text-custom-dark-gray text-4xl py-2">
                      {employee.name.toUpperCase()}
                    </h1>
                    <p className="font-lato font-semibold text-sm py-1">
                      ALTER: {new Date().getFullYear() - employee.birthYear} JAHRE
                    </p>
                    <p className="font-lato font-semibold text-sm py-1">
                      GESCHLECHT: {employee.gender || 'UNBEKANNT'}
                    </p>
                    <p className="font-lato font-semibold text-sm py-1">
                      AUFENTHALTSORT: {employee.location || 'UNBEKANNT'}
                    </p>
                    <p className="font-lato font-semibold text-sm py-1">
                      ADRESSE: {employee.address}
                    </p>
                    <p className="font-lato font-semibold text-sm py-1">
                      POSITION: {employee.position}
                    </p>
                 </div>
                </>
              )}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-4 font-lato font-semibold text-sm py-1 bg-custom-dark-gray bg-opacity-25 hover:bg-opacity-100 transition-all duration-300 text-white rounded-xl px-4 mx-"
              >
                {isEditing ? 'Abbrechen' : 'Bearbeiten'}
              </button>
              {isEditing && (
                <button
                  onClick={handleSave}
                  className="mt-4 font-lato font-semibold text-sm py-1 bg-custom-dark-gray  text-white rounded-xl px-4"
                >
                  Speichern
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Granny}
              alt={employee.name}
              className="flex border-4 border-custom-dark-gray border-opacity-40 justify-center align-center text-white  h-36 w-36 mb-16 rounded-full mr-6 bg-custom-green"
            />
          </div>
        </div>
        

        <div className="flex w-full h-4 justify-end items-end ">
          <button
            className={`min-w-48 text-lg border z-20 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 bg-opacity-50 font-Beba tracking-wider py-2 my-6 mx-4 rounded-full ${activeTab === 'Dokumentation' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
            onClick={() => setActiveTab('Dokumentation')}
          >
            Persönliches
          </button>
          <button
            className={`min-w-48 text-lg border z-20 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 bg-opacity-50 font-Beba tracking-wider py-2 my-6 mx-4 rounded-full ${activeTab === 'Medizinische Informationen' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
            onClick={() => setActiveTab('Medizinische Informationen')}
          >
            Qualifikationen
          </button>
          <button
            className={`min-w-48 text-lg border z-20 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 bg-opacity-50 font-Beba tracking-wider py-2 my-6 mx-4 rounded-full ${activeTab === 'Biografie' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray bg-opacity-20 border border-black border-opacity-15 text-black'}`}
            onClick={() => setActiveTab('Biografie')}
          >
            Kontakt
          </button>
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default Mitarbeiterprofil;
