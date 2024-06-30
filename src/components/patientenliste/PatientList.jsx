import React from 'react';
import PatientItem from './PatientItem';
import { CiFilter } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const patients = [
  { id: 1, name: 'Max Mustermann', room: '030', birthYear: 1934, notes: '', tasksCompleted: 7 },
  { id: 2, name: 'Anna Müller', room: '028', birthYear: 1935, notes: 'Anna Müller ist auffällig reich, sie hat jedoch vergessen, dass sie Enkel hat, vielleicht sollte ich sie daran erinnern', tasksCompleted: 3 },
  { id: 3, name: 'John Doe', room: '029', birthYear: 1940, notes: 'John Doe needs regular check-ups.', tasksCompleted: 5 },
  { id: 4, name: 'Jane Smith', room: '031', birthYear: 1945, notes: 'Jane Smith requires special dietary meals.', tasksCompleted: 8 },
  { id: 5, name: 'Peter Parker', room: '032', birthYear: 1960, notes: 'Peter Parker has a known allergy to penicillin.', tasksCompleted: 2 },
  { id: 6, name: 'Bruce Wayne', room: '033', birthYear: 1955, notes: 'Bruce Wayne prefers evening check-ups.', tasksCompleted: 6 },
  { id: 7, name: 'Clark Kent', room: '034', birthYear: 1952, notes: 'Clark Kent needs regular eye check-ups.', tasksCompleted: 8 },
  { id: 8, name: 'Diana Prince', room: '035', birthYear: 1970, notes: 'Diana Prince is scheduled for a physiotherapy session.', tasksCompleted: 4 },
  // Add more patients as needed
];

const PatientList = () => {
  return (
    <div className="z-20 p-6 pb-20 h-screen flex flex-col  rounded-xl overflow-y-auto custom-scrollbar-container custom-scrollbar  bg-opacity-80">
      <div className="flex w-full h-32 justify-between items-center">
        <h1 className="text-6xl tracking-wide mb-4 font-fjalla ">Patientenliste</h1>
        <div className="flex w-full justify-end p-4">
          <div className="flex w-72 h-8 m-4 bg-custom-lighjt drop-shadow-xl rounded-xl items-center hover:cursor-pointer">
            <input type="text" placeholder="Suchen..." className="text-gray-500 p-2 w-full rounded-xl" />
          </div>
          <div className="flex m-4">
            <button>
              <CiFilter className='w-6 h-6 opacity-40 transition transform hover:opacity-70 duration-200' />
            </button>
          </div>
          <div className="flex">
            <Link to="/step1" className='flex m-4'>
              <button>
                <CiCirclePlus className='w-6 h-6 opacity-40 transition transform hover:opacity-70 duration-200' />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {patients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
