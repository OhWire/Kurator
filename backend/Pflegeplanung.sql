CREATE DATABASE IF NOT EXISTS Patientenprofile;
USE Patientenprofile;

CREATE TABLE IF NOT EXISTS Stammdaten (
  id INT PRIMARY KEY AUTO_INCREMENT,
  vorname VARCHAR(255) NOT NULL,
  nachname VARCHAR(255) NOT NULL,
  geburtsname VARCHAR(255),
  geburtsdatum DATE NOT NULL,
  geschlecht VARCHAR(50) NOT NULL,
  nationalitaet VARCHAR(100) NOT NULL,
  adresse VARCHAR(255) NOT NULL,
  plz VARCHAR(10) NOT NULL,
  stadt VARCHAR(100) NOT NULL,
  land VARCHAR(100) NOT NULL,
  telefon VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  versicherungsnummer VARCHAR(50) NOT NULL,
  notfallkontakt VARCHAR(255) NOT NULL,
  notfalltelefon VARCHAR(20) NOT NULL,
  zimmernummer VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Diagnosen (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  diagnosis TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Medikamente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  name TEXT,
  dose TEXT,
  duration TEXT,
  frequency TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Allergien (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  type TEXT,
  intensity TEXT,
  treatment TEXT,
  details TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS WichtigeInformationen (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  info TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Therapien (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  therapy TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Kategorien (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  name TEXT,
  intensity TEXT,
  details TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Evaluationen (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  name TEXT,
  frequency TEXT,
  notes TEXT,
  responsible TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ZieleUndMassnahmen (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  name TEXT,
  goal TEXT,
  measures TEXT,
  responsibilities TEXT,
  status TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Management (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  management TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Pflegekraft (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  nurse TEXT,
  FOREIGN KEY (patient_id) REFERENCES Stammdaten(id) ON DELETE CASCADE
);
