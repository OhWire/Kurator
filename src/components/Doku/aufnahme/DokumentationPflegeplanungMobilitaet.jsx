import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const DokumentationPflegeplanungMobilitaet = () => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!isSaved) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSaved]);

  const handleSave = (values) => {
    console.log('Saved values:', values);
    setIsSaved(true);
  };

  return (
    <Formik
      initialValues={{ 
        mobilitaet1: '', mobilitaet2: '', mobilitaet3: '', mobilitaet4: '', mobilitaet5: '',
        mobilitaet6: '', mobilitaet7: '', mobilitaet8: '', mobilitaet9: '', mobilitaet10: '',
        mobilitaet11: '', mobilitaet12: '', mobilitaet13: '', mobilitaet14: '', mobilitaet15: '',
        mobilitaet16: '', mobilitaet17: '', mobilitaet18: '', mobilitaet19: '', mobilitaet20: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        handleSave(values);
        navigate('/step3');
      }}
    >
      {({ values, isSubmitting, handleChange }) => (
        <Form className='flex flex-col w-full h-full z-20' onChange={() => setIsSaved(false)}>
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className='text-4xl font-fjalla p-6'>Dokumentation<span className='text-xl'>_Pflegeplanung_mobilitaet</span></h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full overflow-y-auto custom-scrollbar">
            <div className="flex w-[95%] h-[95%] bg-custom-light-gray bg-opacity-25 rounded-xl p-4">
              <div className="flex flex-wrap justify-between w-full h-full space-y-4 overflow-y-auto">
                <h3 className='text-2xl font-fjalla mb-4 w-full'>Mobilität</h3>
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="w-[47%] mb-4">
                    <h4 className='text-lg font-lato mb-2'>Detail {i + 1}</h4>
                    <Field
                      name={`mobilitaet${i + 1}`}
                      placeholder={`Enter detail ${i + 1}...`}
                      maxLength="150"
                      className='w-full my-2 rounded-xl p-4 font-lato text-lg transition-all duration-200 bg-custom-dark-gray ease-in-out focus:shadow-outline focus:bg-custom-light-gray'
                      style={{ minHeight: '40px' }}
                    />
                    <ErrorMessage name={`mobilitaet${i + 1}`} component="div" className="text-red-500" />
                    <div className="text-right text-xs text-gray-500">
                      {values[`mobilitaet${i + 1}`].length}/150
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <button
              type="button"
              onClick={() => {
                if (isSaved || window.confirm('You have unsaved changes. Do you really want to leave?')) {
                  navigate('/step2');
                }
              }}
              className='font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray'
            >
              Zurück
            </button>
            <button
              type="submit"
              className='font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray'
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DokumentationPflegeplanungMobilitaet;
