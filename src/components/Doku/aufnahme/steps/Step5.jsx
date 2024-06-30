import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';

const initialValues = {
  kriterien: [
    { name: 'Körperpflege', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    { name: 'Motivation', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    { name: 'Wünsche', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    { name: 'Hautzustand', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    { name: 'Hautschäden', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    { name: 'Dekubitus', probleme: '', ressourcen: '', ziele: '', massnahmen: '', scala: '' },
    
  ]
};

const TextInputWithButton = ({ field, form, name, index, setFocusedRow }) => {
  const [value, setValue] = useState(field.value);
  const [isFocused, setIsFocused] = useState(false);

  const handleSave = () => {
    form.setFieldValue(name, value);
    setIsFocused(false);
    setFocusedRow(null);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setFocusedRow(index);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setFocusedRow(null);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        {...field}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`drop-shadow-md font-lato text-sm p-4 rounded-xl text-left align-text-top w-full ${isFocused ? 'h-24' : ''}`}
      />
      {isFocused && (
        <button
          type="button"
          onClick={handleSave}
          className="absolute text-xs right-0 mr-2 bg-custom-dark-gray text-white rounded-md px-2 py-1"
        >
          Save
        </button>
      )}
    </div>
  );
};

const Step5 = () => {
  const navigate = useNavigate();
  const [focusedRow, setFocusedRow] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        navigate('/step6');
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col w-full h-full z-20">
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className="text-4xl font-fjalla p-6">
                Pflegeplanung<span className="text-xl">_Eigene Pflege</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="flex w-[95%] h-full bg-custom-light-gray bg-opacity-25 rounded-xl p-4 overflow-y-scroll custom-scrollbar">
              <FieldArray name="kriterien">
                {({ form }) => (
                  <div className="flex flex-col w-full space-y-4">
                    <div className="grid grid-cols-7 gap-2 items-center">
                      <div className="text-xl text-center font-fjalla">Kriterium</div>
                      <div className="text-xl text-center font-fjalla">Probleme</div>
                      <div className="text-xl text-center font-fjalla">Ressourcen</div>
                      <div className="text-xl text-center font-fjalla">Ziele</div>
                      <div className="text-xl text-center font-fjalla">Maßnahmen</div>
                      <div className="text-xl text-center font-fjalla">Bewertung</div>
                    </div>
                    {form.values.kriterien.map((_, index) => (
                      <div key={index} className={`grid grid-cols-7 gap-2 items-center ${focusedRow === index ? 'h-24' : 'h-16'}`}>
                        <Field
                          name={`kriterien[${index}].name`}
                          placeholder="Kriterium"
                          className="drop-shadow-md font-lato text-md text-center p-4 mx-4 rounded-xl bg-gray-200"
                          disabled
                        />
                        <Field
                          name={`kriterien[${index}].probleme`}
                          component={TextInputWithButton}
                          form={form}
                          field={form.getFieldProps(`kriterien[${index}].probleme`)}
                          index={index}
                          setFocusedRow={setFocusedRow}
                        />
                        <Field
                          name={`kriterien[${index}].ressourcen`}
                          component={TextInputWithButton}
                          form={form}
                          field={form.getFieldProps(`kriterien[${index}].ressourcen`)}
                          index={index}
                          setFocusedRow={setFocusedRow}
                        />
                        <Field
                          name={`kriterien[${index}].ziele`}
                          component={TextInputWithButton}
                          form={form}
                          field={form.getFieldProps(`kriterien[${index}].ziele`)}
                          index={index}
                          setFocusedRow={setFocusedRow}
                        />
                        <Field
                          name={`kriterien[${index}].massnahmen`}
                          component={TextInputWithButton}
                          form={form}
                          field={form.getFieldProps(`kriterien[${index}].massnahmen`)}
                          index={index}
                          setFocusedRow={setFocusedRow}
                        />
                        <div className="flex ml-6 space-x-1">
                          {[...Array(10).keys()].map(i => (
                            <label key={i + 1} className="flex items-center space-x-1">
                              <Field
                                type="radio"
                                name={`kriterien[${index}].scala`}
                                value={`${i + 1}`}
                                className="hidden"
                              />
                              <span className={`block w-4 h-4 border-2 border-custom-dark-gray rounded-full cursor-pointer ${values.kriterien[index].scala === `${i + 1}` ? 'bg-custom-green' : ''}`} />
                            </label>
                          ))}
                        </div>
                        <div>
                          {values.kriterien[index].scala && (
                            <span className="flex w-full justify-end text-sm font-bold">{values.kriterien[index].scala}</span>
                          )}
                        </div>
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

export default Step5;
