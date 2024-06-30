import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';

const Aufnahme = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        klient: ['', '', '', ''],
        eigeneFamiliengruendung: ['', '', '', ''],
        praegendeErlebnisse: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        navigate('/next');
      }}
    >
      {() => (
        <Form className='flex flex-col w-full h-full z-20'>
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className='text-4xl font-fjalla p-6'>
                Dokumentation
                <span className='text-xl'>_Stammdatenblatt</span>
              </h2>
            </div>
            <div className="flex w-[30%] justify-center items-center">
              <input
                type="text"
                placeholder='Suchen...'
                className='bg-custom-light-gray drop-shadow-md shadow-lg bg-opacity-45 mx-6 px-6 py-1 rounded-xl'
              />
              <FaFilter />
            </div>
          </div>
          <div className="flex justify-center items-center h-[85%] w-full">
            <div className="flex w-[95%] h-[95%] bg-custom-light-gray bg-opacity-25 rounded-xl p-4">
              <div className="flex flex-col pl-4 pt-4 w-[40%] mx-6 h-full space-y-8">
                <div className="flex flex-col space-y-4 w-[90%] h-[50%]">
                  <h2 className='text-xl p-0 font-fjalla'>Klient</h2>
                  {['Name, Vorname', 'Name, Vorname', 'Name, Vorname', 'Name, Vorname'].map((placeholder, index) => (
                    <Field
                      key={index}
                      name={`klient[${index}]`}
                      placeholder={placeholder}
                      className='flex drop-shadow-md font-Beba p-4 h-[5%] rounded-xl'
                    />
                  ))}
                </div>
                <div className="flex flex-col space-y-4 w-[90%] h-[50%]">
                  <h2 className='text-xl p-0 font-fjalla'>Eigene Familiengründung</h2>
                  {['Name, Vorname', 'Name, Vorname', 'Name, Vorname', 'Name, Vorname'].map((placeholder, index) => (
                    <Field
                      key={index}
                      name={`eigeneFamiliengruendung[${index}]`}
                      placeholder={placeholder}
                      className='flex drop-shadow-md font-Beba p-4 h-[5%] rounded-xl'
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center w-[50%] h-full">
                <div className="flex flex-col w-[45%] my-4 h-full space-y-4">
                  <h2 className='text-xl p-0 font-fjalla'>Eigene Familiengründung</h2>
                  {['Name, Vorname', 'Name, Vorname', 'Name, Vorname', 'Name, Vorname'].map((placeholder, index) => (
                    <Field
                      key={index}
                      name={`eigeneFamiliengruendung[${index}]`}
                      placeholder={placeholder}
                      className='flex drop-shadow-md font-Beba p-4 h-[5%] rounded-xl'
                    />
                  ))}
                </div>
                <div className="flex flex-col h-full w-[80%]">
                  <h2 className="text-xl p-0 font-fjalla">Persönliche prägende Erlebnisse</h2>
                  <Field
                    name="praegendeErlebnisse"
                    placeholder='Beschreibung'
                    className='h-[100%] w-[100%] my-6 rounded-xl'
                  />
                </div>
              </div>
              <div className="flex flex-col h-100 justify-between items-center mr-6 mt-6">
                <button
                  type="submit"
                  className='font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray'
                >
                  Weiter
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className='font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray'
                >
                  Zurück
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Aufnahme;
