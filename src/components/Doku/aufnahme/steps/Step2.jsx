import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';

const initialValues = {
  kriterien: [
    { name: 'Allgemeine Lebensgeschichte' },
    { name: 'Beruflicher Werdegang' },
    { name: 'Familiäre Situation' },
    { name: 'Gewohnheiten und Vorlieben' },
    { name: 'Hobbys und Interessen' },
    { name: 'Soziale Interaktionen' }
  ]
};

const Step2 = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        navigate('/step3');
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col w-full h-full z-20">
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className="text-4xl font-fjalla p-6">
                Biographie<span className="text-xl"></span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="flex w-[95%] h-full bg-custom-light-gray bg-opacity-25 rounded-xl p-4 overflow-y-scroll custom-scrollbar">
              <FieldArray name="kriterien">
                {({ form }) => (
                  <div className="flex flex-col w-full space-y-4">
                    <div className="grid grid-cols-1 gap-2 items-center">
                    </div>
                    {form.values.kriterien.map((_, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div
                          className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-gray-200 w-full cursor-pointer"
                          onClick={() => setActiveField(activeField === index ? null : index)}
                        >
                          {form.values.kriterien[index].name}
                        </div>
                        {activeField === index && (
                          <Field
                            name={`kriterien[${index}].details`}
                            placeholder="Geben Sie Details ein"
                            className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-white w-full"
                            component="textarea"
                            rows="4"
                          />
                        )}
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

export default Step2;
