import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';

const initialValues = {
  categories: [
    { name: 'Körperliche Ressourcen', rating: '', details: '' },
    { name: 'Kognitive Ressourcen', rating: '', details: '' },
    { name: 'Emotionale Ressourcn', rating: '', details: '' },
    { name: 'Sozial Ressourcen', rating: '', details: '' },
  ]
};

const Step4 = () => {
  const navigate = useNavigate();
  const [focusedRow, setFocusedRow] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        navigate('/step5');
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col w-full h-full z-20">
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className="text-4xl font-fjalla p-6">
                Pflegeplanung<span className="text-xl">_Kriterien</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="flex w-[95%] h-full bg-custom-light-gray bg-opacity-25 rounded-xl p-4 overflow-y-scroll custom-scrollbar">
              <FieldArray name="categories">
                {({ form }) => (
                  <div className="flex flex-col w-full space-y-4">
                    <div className="grid grid-cols-3 gap-2 items-center">
                      <div className="text-xl text-center font-fjalla">Kategorie</div>
                      <div className="text-xl text-center font-fjalla">Bewertung</div>
                      <div className="text-xl text-center font-fjalla">Details</div>
                    </div>
                    {form.values.categories.map((_, index) => (
                      <div key={index} className={`grid grid-cols-3 gap-2 items-center ${focusedRow === index ? 'h-24' : 'h-16'}`}>
                        <Field
                          name={`categories[${index}].name`}
                          placeholder="Kategorie"
                          className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-gray-200"
                          disabled
                        />
                        <div className="flex items-center space-x-1">
                          {[...Array(10).keys()].map(i => (
                            <label key={i + 1} className="flex items-center space-x-1">
                              <Field
                                type="radio"
                                name={`categories[${index}].rating`}
                                value={`${i + 1}`}
                                className="hidden"
                              />
                              <span className={`block w-4 h-4 border-2 border-custom-dark-gray rounded-full cursor-pointer ${values.categories[index].rating === `${i + 1}` ? 'bg-custom-green' : ''}`} />
                            </label>
                          ))}
                          <div className="flex justify-center items-center h-12 w-12">
                            {values.categories[index].rating && (
                              <span className="text-sm font-bold ml-6">{values.categories[index].rating}</span>
                            )}
                          </div>
                        </div>
                        <Field
                          name={`categories[${index}].details`}
                          placeholder="Geben Sie Details ein"
                          className="flex justify-center items-center drop-shadow-md pt-4 h-16 font-lato text-md text-left rounded-xl bg-gray-200 w-full"
                          component="textarea"
                          rows="4"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
            </div>
          </div>
          <div className="flex justify-between mt-4 px-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray"
            >
              Zurück
            </button>
            <button
              type="submit"
              className="font-lato semibold text-white bg-opacity-75 text-xl w-32 h-12 rounded-xl bg-custom-dark-gray"
            >
              Weiter
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step4;
