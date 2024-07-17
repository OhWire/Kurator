import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Granny from '../img/Granny1.jpeg';
import Persönliches from './Persönliches';
import Qualifikationen from './Qualifikationen';
import Kontakt from './Kontakt';

const Mitarbeiterprofil = () => {
  const { state } = useLocation();
  const { employeeId } = state || {};
  const [activeTab, setActiveTab] = useState('Persönliches');
  const [employeeData, setEmployeeData] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableEmployee, setEditableEmployee] = useState(null);

  useEffect(() => {
    fetch('/employeeData.json')
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
        const emp = Array.isArray(data) ? data.find(emp => emp.id === employeeId) : null;
        setEmployee(emp);
        setEditableEmployee(emp);
      })
      .catch((error) => console.error('Error fetching employee data:', error));
  }, [employeeId]);

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
      case 'Persönliches':
        return <Persönliches employee={employee} />;
      case 'Qualifikationen':
        return <Qualifikationen employee={employee} />;
      case 'Kontakt':
        return <Kontakt employee={employee} />;
      default:
        return <Persönliches employee={employee} />;
    }
  };

  if (!employee) {
    return <div>Mitarbeiterdaten nicht gefunden</div>;
  }

  return (
    <div className="p-4 flex flex-col w-full h-full justify-start items-center z-20 ">
      <div className="flex flex-col rounded-2xl p-6 w-full h-full overflow-y-auto shadow-lg">
        <div className="flex flex-col items-center w-full mb-8">
          <div className="flex items-center justify-center space-x-6 h-[80%] bg-custom-green bg-opacity-20 px-6 py-6 rounded-xl shadow-md w-full ">
            <div className="flex h-full w-full space-x-8 justify-center items-center">
              <img
                src={Granny}
                alt={employee.name}
                className="border-4 border-custom-dark-gray border-opacity-40 w-24 h-24 rounded-full bg-custom-green"
              />
              <h1 className="font-fjalla text-custom-dark-gray text-2xl py-1">{employee.name.toUpperCase()}</h1>
              <p className="font-lato font-semibold text-sm leading-6">
                <span className='text-md text-custom-dark-gray'>ALTER:</span> <br /> {new Date().getFullYear() - employee.birthYear} JAHRE
              </p>
              <p className="font-lato font-semibold text-sm leading-6">
                <span className='text-md text-custom-dark-gray'>GESCHLECHT:</span> <br /> {employee.gender || 'UNBEKANNT'}
              </p>
              <p className="font-lato font-semibold text-sm leading-6">
                <span className='text-md text-custom-dark-gray'>AUFENTHALTSORT:</span> <br /> {employee.location || 'UNBEKANNT'}
              </p>
              <p className="font-lato font-semibold text-sm leading-6">
                <span className='text-md text-custom-dark-gray'>ADRESSE:</span> <br /> {employee.address}
              </p>
              <p className="font-lato font-semibold text-sm leading-6">
                <span className='text-md text-custom-dark-gray'>POSITION:</span> <br /> {employee.position}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 font-lato font-semibold text-sm py-1 bg-custom-dark-gray bg-opacity-25 hover:bg-opacity-100 transition-all duration-300 text-white rounded-xl px-4"
            >
              Bearbeiten
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button
            className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Persönliches' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
            onClick={() => setActiveTab('Persönliches')}
          >
            Persönliches
          </button>
          <button
            className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Qualifikationen' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray border border-black border-opacity-15 bg-opacity-20 text-black'}`}
            onClick={() => setActiveTab('Qualifikationen')}
          >
            Qualifikationen
          </button>
          <button
            className={`min-w-36 text-sm border z-20 bg-opacity-50 hover:bg-opacity-85 hover:text-white hover:bg-custom-dark-gray transition-all duration-300 font-Beba tracking-wider py-2 px-4 rounded-full ${activeTab === 'Kontakt' ? 'text-custom-dark-green drop-shadow-xl shadow-lg bg-custom-dark-gray' : 'bg-custom-light-gray bg-opacity-20 border border-black border-opacity-15 text-black'}`}
            onClick={() => setActiveTab('Kontakt')}
          >
            Kontakt
          </button>
        </div>
        {isEditing ? (
          <div className="bg-custom-green bg-opacity-20 flex flex-col p-6 rounded-xl shadow-md w-full mb-8">
            <input
              type="text"
              name="name"
              value={editableEmployee.name}
              onChange={handleInputChange}
              className="font-fjalla text-custom-dark-gray text-xl py-1 bg-transparent"
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
            <div className="flex mt-4 space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="font-lato font-semibold text-sm py-1 bg-custom-dark-gray bg-opacity-25 hover:bg-opacity-100 transition-all duration-300 text-white rounded-xl px-4"
              >
                Abbrechen
              </button>
              <button
                onClick={handleSave}
                className="font-lato font-semibold text-sm py-1 bg-custom-dark-gray text-white rounded-xl px-4"
              >
                Speichern
              </button>
            </div>
          </div>
        ) : null}
        <div className="w-full">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Mitarbeiterprofil;
