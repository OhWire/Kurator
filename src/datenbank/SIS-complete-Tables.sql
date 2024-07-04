-- Erstellt die Datenbank SIS, falls sie nicht existiert
CREATE DATABASE IF NOT EXISTS SIS;
USE SIS;

-- Tabelle Stammdatenblatt
CREATE TABLE IF NOT EXISTS Stammdatenblatt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vorname VARCHAR(50) NOT NULL,
    nachname VARCHAR(50) NOT NULL,
    geburtsname VARCHAR(50),
    geburtsdatum DATE NOT NULL,
    geschlecht ENUM('männlich', 'weiblich', 'divers', 'anderes'),
    nationalitaet VARCHAR(50) NOT NULL,
    adresse VARCHAR(100),
    plz VARCHAR(10),
    stadt VARCHAR(50),
    land VARCHAR(50),
    telefon VARCHAR(20),
    email VARCHAR(100),
    versicherungsnummer VARCHAR(50) NOT NULL,
    notfallkontakt VARCHAR(100) NOT NULL,
    notfalltelefon VARCHAR(20) NOT NULL
);

-- Tabelle MedicalData
CREATE TABLE IF NOT EXISTS MedicalData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    diagnoses TEXT,
    importantInfo TEXT,
    therapies TEXT,
    FOREIGN KEY (patient_id) REFERENCES Stammdatenblatt(id)
);

-- Tabelle Medications
CREATE TABLE IF NOT EXISTS Medications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medical_data_id INT NOT NULL,
    name ENUM('Medikament A', 'Medikament B', 'Medikament C') NOT NULL,
    dose ENUM('1mg', '5mg', '10mg') NOT NULL,
    frequency ENUM('1x täglich', '2x täglich', '3x täglich') NOT NULL,
    duration ENUM('1 Woche', '1 Monat', '3 Monate') NOT NULL,
    FOREIGN KEY (medical_data_id) REFERENCES MedicalData(id)
);

-- Tabelle Allergies
CREATE TABLE IF NOT EXISTS Allergies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medical_data_id INT NOT NULL,
    type ENUM('Heuschnupfen', 'Hausstaubmilbenallergie', 'Tierallergie', 'Nesselsucht', 'Sonnenallergie', 'Kontaktallergie', 'Schimmelallergie', 'kreuzallergien', 'insektengiftallergie', 'nahrungsmittelallergie', 'histamin', 'berufsbedingte allergien') NOT NULL,
    details TEXT,
    intensity ENUM('Leicht', 'Mittel', 'Schwer') NOT NULL,
    treatment TEXT,
    FOREIGN KEY (medical_data_id) REFERENCES MedicalData(id)
);

-- Tabelle Pflegeanamnese
CREATE TABLE IF NOT EXISTS Pflegeanamnese (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medical_data_id INT NOT NULL,
    category ENUM('Körperpflege und Hygiene', 'Ernährung und Flüssigkeitszufuhr', 'Ausscheidung', 'Mobilität und Bewegung', 'Schlaf und Ruhe') NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    details TEXT,
    FOREIGN KEY (medical_data_id) REFERENCES MedicalData(id)
);

-- Tabelle FunctionalStatus
CREATE TABLE IF NOT EXISTS Ressourcen und Fähigkeiten (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medical_data_id INT NOT NULL,
    category ENUM('Körperliche Ressourcen', 'Kognitive Ressourcen', 'Emotionale Ressourcen', 'Soziale Ressourcen') NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    details TEXT,
    FOREIGN KEY (medical_data_id) REFERENCES MedicalData(id)
);


