
-- Tabelle für Bewohner im Altenheim
CREATE DATABASE IF NOT EXISTS DokumentationDB;
USE DokumentationDB;
CREATE TABLE IF NOT EXISTS Stammdatenblatt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vorname VARCHAR(50) NOT NULL,
    nachname VARCHAR(50) NOT NULL,
    geburtsname VARCHAR(50),
    geburtsdatum DATE NOT NULL,
    geschlecht VARCHAR(20),
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




