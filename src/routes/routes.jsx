import React, { lazy } from 'react';
import Dashboard from '../components/dashboard/dashboard';
import Dienstplan from '../components/dienstplan/dienstplan';
import PatientList from '../components/patientenliste/PatientList';
import PatientenProfil from '../components/patientenprofil/PatientenProfil';
import Step1 from '../components/Doku/aufnahme/steps/Step1';
import Step2 from '../components/Doku/aufnahme/steps/Step2';
import Step3 from '../components/Doku/aufnahme/steps/Step3';
import Step4 from '../components/Doku/aufnahme/steps/Step4';
import Step5 from '../components/Doku/aufnahme/steps/Step5';
import Step6 from '../components/Doku/aufnahme/steps/Step6';
import Step7 from '../components/Doku/aufnahme/steps/Step7';
import Dokumente from "../components/patientenprofil/Dokumente/Dokumente"
import DokumentationPflegeplanungKommunikation from '../components/Doku/aufnahme/DokumentationPflegeplanungKommunikation';
import DokumentationPflegeplanungMobilitaet from '../components/Doku/aufnahme/DokumentationPflegeplanungMobilitaet';
import Register from '../components/Register/register';
import ConfirmPage from '../components/Register/ConfirmPage';
import Mitarbeiterprofil from '../components/Mitarbeiterprofil/Mitarbeiterprofil';
import SISForm from '../components/patientenprofil/_MedInfo/SIS';
import PatientInfoComponent from '../components/patientenprofil/_MedInfo/last/letzteseite';

const LoginPage = lazy(() => import('../components/Login/Login'));

const routes = [
    { path: "/", element: <LoginPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/step1", element: <Step1 /> }, // Initial step
    { path: "/step2", element: <Step2 /> },
    { path: "/step3", element: <Step3 /> },
    { path: "/step4", element: <Step4 /> },
    { path: "/step5", element: <Step5 /> },
    { path: "/step6", element: <Step6 /> },
    { path: "/step7", element: <Step7 /> },
    { path: "/SIS", element: <SISForm /> },
    { path: "/last", element: <PatientInfoComponent /> },
    { path: "/dokumentation_pflegeplanung_kommunikation", element: <DokumentationPflegeplanungKommunikation /> },
    { path: "/dokumentation_pflegeplanung_mobilitaet", element: <DokumentationPflegeplanungMobilitaet /> },
    { path: "/dienstplan", element: <Dienstplan /> },
    { path: "/patientenliste", element: <PatientList /> },
    { path: "/PatientenProfil/:id", element: <PatientenProfil /> },
    { path: "/register", element: <Register /> },
    { path: "/confirm", element: <ConfirmPage /> },
    { path: "/MitarbeiterProfil/:id", element: <Mitarbeiterprofil /> },
    { path: "/Dokumente", element: <Dokumente /> }
];

export default routes;
