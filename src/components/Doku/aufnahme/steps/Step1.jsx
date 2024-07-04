import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { saveStep1Data } from '../state/actions';

const validationSchema = Yup.object().shape({
  vorname: Yup.string().required('Vorname ist erforderlich'),
  nachname: Yup.string().required('Nachname ist erforderlich'),
  geburtsname: Yup.string(),
  geburtsdatum: Yup.date().required('Geburtsdatum ist erforderlich').nullable(),
  geschlecht: Yup.string().required('Geschlecht ist erforderlich'),
  nationalitaet: Yup.string().required('Nationalität ist erforderlich'),
  adresse: Yup.string().required('Adresse ist erforderlich'),
  plz: Yup.string().required('PLZ ist erforderlich'),
  stadt: Yup.string().required('Stadt ist erforderlich'),
  land: Yup.string().required('Land ist erforderlich'),
  telefon: Yup.string().required('Telefon ist erforderlich'),
  email: Yup.string().email('Ungültige Email-Adresse').required('Email ist erforderlich'),
  versicherungsnummer: Yup.string().required('Versicherungsnummer ist erforderlich'),
  notfallkontakt: Yup.string().required('Notfallkontakt ist erforderlich'),
  notfalltelefon: Yup.string().required('Notfalltelefon ist erforderlich')
});

const Step1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Create dispatch function

  return (
    <Formik
      initialValues={{
        vorname: '',
        nachname: '',
        geburtsname: '',
        geburtsdatum: '',
        geschlecht: '',
        nationalitaet: '',
        adresse: '',
        plz: '',
        stadt: '',
        land: '',
        telefon: '',
        email: '',
        versicherungsnummer: '',
        notfallkontakt: '',
        notfalltelefon: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(saveStep1Data(values));
        resetForm();
        setSubmitting(false);
        navigate('/step2'); // Navigate to the next page
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-full h-full z-20'>
          <div className="flex h-[15%] justify-between items-center">
            <div className="flex p-10 py-16">
              <h2 className='text-4xl font-fjalla p-6'>Dokumentation<span className='text-xl'>_Stammdatenblatt</span></h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="flex w-[95%] h-full bg-custom-light-gray bg-opacity-25 rounded-xl p-4 overflow-y-scroll custom-scrollbar">
              <div className="flex flex-col w-full mx-6 h-full space-y-4">
                <div className="flex flex-wrap justify-between space-y-4 w-full h-full">
                  <h2 className='text-xl p-0 font-fjalla w-full'>Stammdatenblatt</h2>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="vorname"
                      placeholder="Vorname"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="vorname" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="nachname"
                      placeholder="Nachname"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="nachname" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="geburtsname"
                      placeholder="Geburtsname"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="geburtsdatum"
                      type="date"
                      placeholder="Geburtsdatum"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="geburtsdatum" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field as="select" name="geschlecht" className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35">
                      <option value="" label="Geschlecht wählen" />
                      <option value="männlich" label="Männlich" />
                      <option value="weiblich" label="Weiblich" />
                      <option value="divers" label="Divers" />
                    </Field>
                    <ErrorMessage name="geschlecht" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="nationalitaet"
                      placeholder="Nationalität"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="nationalitaet" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="adresse"
                      placeholder="Adresse"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="adresse" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="plz"
                      placeholder="PLZ"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="plz" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="stadt"
                      placeholder="Stadt"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="stadt" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="land"
                      placeholder="Land"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="land" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="telefon"
                      placeholder="Telefon"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="telefon" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="email"
                      placeholder="Email"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="versicherungsnummer"
                      placeholder="Versicherungsnummer"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="versicherungsnummer" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="notfallkontakt"
                      placeholder="Notfallkontakt"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="notfallkontakt" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <Field
                      name="notfalltelefon"
                      placeholder="Notfalltelefon"
                      className="flex drop-shadow-md font-Beba p-2 rounded-xl bg-custom-light-gray bg-opacity-35"
                    />
                    <ErrorMessage name="notfalltelefon" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>
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
              disabled={isSubmitting}
            >
              Weiter
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
