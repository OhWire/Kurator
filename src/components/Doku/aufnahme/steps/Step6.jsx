import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';
import { saveStep6Data } from '../state/actions';
import { useDispatch } from 'react-redux';

const initialValues = {
  goalsAndMeasures: [
    {
      name: 'Kurzfristige Ziele',
      goal: '',
      measures: '',
      responsibilities: '',
      status: ''
    },
    {
      name: 'Langfristige Ziele',
      goal: '',
      measures: '',
      responsibilities: '',
      status: ''
    },
    {
      name: 'Konkrete Maßnahmen zur Zielerreichung',
      goal: '',
      measures: '',
      responsibilities: '',
      status: ''
    },
    {
      name: 'Verantwortlichkeiten und Zuständigkeiten',
      goal: '',
      measures: '',
      responsibilities: '',
      status: ''
    }
  ]
};

const responsibilityOptions = ['Pflegekraft', 'Arzt', 'Angehörige', 'Patient'];
const statusOptions = ['In Bearbeitung', 'Abgeschlossen', 'Ausstehend'];

const Step6 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [focusedRow, setFocusedRow] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const patientId = 1; // Use the actual patientId you want to associate
        dispatch(saveStep6Data({ ...values, patientId }));
        navigate('/step7');
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col w-full h-full z-20">
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className="text-4xl font-fjalla p-6">
                Pflegeplanung<span className="text-xl">_Ziele und Maßnahmen</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="flex w-[95%] h-full bg-custom-light-gray bg-opacity-25 rounded-xl p-4 overflow-y-scroll custom-scrollbar">
              <FieldArray name="goalsAndMeasures">
                {({ form }) => (
                  <div className="flex flex-col w-full space-y-4">
                    <div className="grid grid-cols-5 gap-2 items-center">
                      <div className="text-xl text-center font-fjalla">Kategorie</div>
                      <div className="text-xl text-center font-fjalla">Ziele</div>
                      <div className="text-xl text-center font-fjalla">Maßnahmen</div>
                      <div className="text-xl text-center font-fjalla">Verantwortlichkeiten</div>
                      <div className="text-xl text-center font-fjalla">Status</div>
                    </div>
                    {form.values.goalsAndMeasures.map((_, index) => (
                      <div key={index} className={`grid grid-cols-5 gap-2 items-center ${focusedRow === index ? 'h-24' : 'h-16'}`}>
                        <Field
                          name={`goalsAndMeasures[${index}].name`}
                          placeholder="Kategorie"
                          className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-custom-light-gray bg-opacity-35"
                          disabled
                        />
                        <Field
                          name={`goalsAndMeasures[${index}].goal`}
                          placeholder="Ziele"
                          className="flex justify-center items-center drop-shadow-md pt-4 h-16 font-lato text-md text-left rounded-xl bg-custom-light-gray bg-opacity-35 px-6 w-full"
                          component="textarea"
                          rows="4"
                        />
                        <Field
                          name={`goalsAndMeasures[${index}].measures`}
                          placeholder="Maßnahmen"
                          className="flex justify-center items-center drop-shadow-md pt-4 h-16 font-lato text-md text-left rounded-xl bg-custom-light-gray bg-opacity-35 px-6 w-full"
                          component="textarea"
                          rows="4"
                        />
                        <Field as="select" name={`goalsAndMeasures[${index}].responsibilities`} className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-custom-light-gray bg-opacity-35  w-full">
                          <option value="">Verantwortlichkeiten</option>
                          {responsibilityOptions.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </Field>
                        <Field as="select" name={`goalsAndMeasures[${index}].status`} className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-custom-light-gray bg-opacity-35 w-full">
                          <option value="">Status</option>
                          {statusOptions.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </Field>
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

export default Step6;
