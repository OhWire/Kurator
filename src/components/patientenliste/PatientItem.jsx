import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiMedicalCross } from "react-icons/ci";
import { FaNotesMedical } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { PiPersonSimpleTaiChi } from "react-icons/pi";

const PatientItem = ({ patient }) => {
  const [isElevated, setIsElevated] = useState(false);
  const navigate = useNavigate();
  const totalTasks = 10; // Assuming there are 10 tasks in total for simplicity

  const handleClick = () => {
    setIsElevated(!isElevated);
  };

  const handleProfileClick = (event) => {
    event.stopPropagation();
    navigate(`/PatientenProfil/${patient.id}`, { state: { patient } });
  };

  const handleSISClick = (event) => {
    event.stopPropagation();
    window.location.href = '/SIS';
  };

  const handleDocsClick = (event) => {
    event.stopPropagation();
    window.location.href = '/Dokumente';
  };

  const getPosition = () => {
    const percentage = (patient.tasksCompleted / totalTasks) * 100;
    return `${percentage}%`;
  };

  const getGradientStyle = () => {
    const percentage = (patient.tasksCompleted / totalTasks) * 100;

    let backgroundColor;
    if (percentage <= 50) {
      backgroundColor = `linear-gradient(to right, #d2b7b7, #d2d2b7 ${percentage * 2}%)`;
    } else {
      backgroundColor = `linear-gradient(to right, #d2d2b7, #b7d2c5 ${(percentage - 50) * 2}%)`;
    }

    return {
      background: backgroundColor,
    };
  };

  return (
    <div
      className={`p-4 bg-custom-light-gray bg-opacity-50 rounded-2xl shadow-sm flex flex-col items-center transition-transform duration-300 ${isElevated ? 'transform translate-y-[-10px]' : ''}`}
      onClick={handleClick}
    >
      <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between">
        <div className="flex w-[50%]">
          <div className="flex mr-6 w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full justify-center items-center bg-custom-green">
            <PiPersonSimpleTaiChi className='w-10 h-10 opacity-40 shadow-xl' />
          </div>
          <div className='flex mx-2 items-center'>
            <div className="flex rounded-md bg-opacity-75 drop-shadow-md w-[12vw]">
              <h2
                className="text-2xl cursor-pointer sm:text-2xl md:text-xl font-lato hover:text-custom-dark-gray duration-200 transition-all"
                onClick={handleProfileClick}
              >
                {patient.name}
              </h2>
            </div>
            <div className="flex flex-col items-center mx-4 px-2 rounded-xl bg-opacity-40 h-10">
              <p className="font-lato text-sm p-0 px-2 text-black">Raum: {patient.room}</p>
              <p className="font-lato text-sm p-0 px-2 text-black">geb. {patient.birthYear}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 sm:mt-0 sm:space-x-4 lg:space-x-6">
          <button
            className='flex border border-gray-400 border-opacity-60 w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 justify-center items-center rounded-full bg-custom-green m-1 drop-shadow-md transform transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-opacity-35'
            onClick={(event) => event.stopPropagation()}
          >
            <CiMedicalCross className='fill-custom-dark-gray opacity-100 h-4 w-4 sm:h-4 sm:w-4 lg:h-8 lg:w-8' />
          </button>
          <button
            onClick={handleSISClick}
            className='flex border border-gray-400 border-opacity-60 w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 justify-center items-center rounded-full bg-custom-green m-1 drop-shadow-md transform transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-opacity-35'
          >
            <FaNotesMedical className='fill-custom-dark-gray opacity-100 h-4 w-4 sm:h-4 sm:w-4 lg:h-8 lg:w-8' />
          </button>
          <button
            className='flex border border-gray-400 border-opacity-60 w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 justify-center items-center rounded-full bg-custom-green m-1 drop-shadow-md transform transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-opacity-35'
            onClick={(event) => event.stopPropagation()}
          >
            <IoPeopleCircleOutline className='fill-custom-dark-gray opacity-100 h-4 w-4 sm:h-4 sm:w-4 lg:h-8 lg:w-8' />
          </button>
          <button
            className='flex border border-gray-400 border-opacity-60 w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 justify-center items-center rounded-full bg-custom-green m-1 drop-shadow-md transform transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-opacity-35'
            onClick={handleDocsClick}
          >
            <CiFolderOn className='fill-custom-dark-gray opacity-100 h-4 w-4 sm:h-4 sm:w-4 lg:h-8 lg:w-8' />
          </button>
        </div>
        <div className="relative w-full sm:w-32 lg:w-44 ml-0 sm:ml-4 lg:ml-6 h-4 md:h-6 bg-gray-100 border border-opacity-10 border-gray-400 rounded-xl drop-shadow-xl overflow-hidden mt-4 sm:mt-0">
          <div
            className="absolute h-full w-12 rounded-xl transition-transform duration-300 border border-gray-200"
            style={{ ...getGradientStyle(), left: getPosition() }}
          ></div>
        </div>
      </div>
      {isElevated && (
        <div className="mt-4 p-2 bg-gray-100 rounded-lg shadow-inner w-full">
          <p className="text-sm sm:text-base">{patient.notes}</p>
        </div>
      )}
    </div>
  );
};

export default PatientItem;
