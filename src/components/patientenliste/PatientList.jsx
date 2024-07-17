import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PatientItem from './PatientItem';
import { CiFilter, CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { fetchPatients } from '../../../backend/actions'; // Beispiel Aktion zum Abrufen von Patienten

const PatientList = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients.data);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <div className="z-20 p-6 pb-20 h-screen flex flex-col rounded-xl overflow-y-auto custom-scrollbar-container custom-scrollbar bg-opacity-80">
      <div className="flex w-full h-32 justify-between items-center">
        <h1 className="text-6xl tracking-wide mb-4 font-fjalla">Patientenliste</h1>
        <div className="flex w-full justify-end p-4">
          <div className="flex w-72 h-8 m-4 bg-custom-light drop-shadow-xl rounded-xl items-center hover:cursor-pointer">
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
