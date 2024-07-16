import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiPersonSimpleTaiChi } from "react-icons/pi";

const PatientItem = ({ patient }) => {
  const navigate = useNavigate();

  const handleProfileClick = (event) => {
    event.stopPropagation();
    navigate(`/PatientenProfil/${patient.id}`, { state: { patient } });
  };

  return (
    <div
      className="p-4 bg-custom-light-gray bg-opacity-50 rounded-2xl shadow-sm flex flex-col items-center transition-transform duration-300"
      onClick={handleProfileClick}
    >
      <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between">
        <div className="flex w-[50%]">
          <div className="flex mr-6 w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full justify-center items-center bg-custom-green">
            <PiPersonSimpleTaiChi className='w-10 h-10 opacity-40 shadow-xl' />
          </div>
          <div className='flex mx-2 items-center'>
            <div className="flex flex-col items-center mx-4 px-2 rounded-xl bg-opacity-40 h-10">
              <p className="font-lato text-sm p-0 px-2 text-black">ID: {patient.id}</p>
              <p className="font-lato text-sm p-0 px-2 text-black">Raum: {patient.zimmernummer}</p>
              <p className="font-lato text-sm p-0 px-2 text-black">geb. {patient.geburtsdatum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientItem;
