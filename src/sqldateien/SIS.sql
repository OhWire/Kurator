USE Patientenprofile;

CREATE DATABASE IF NOT EXISTS SIS;
USE SIS;

CREATE TABLE IF NOT EXISTS Gesprache (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  name_der_pflegebedurftigen_person VARCHAR(255) NOT NULL,
  gesprache_am DATE NOT NULL,
  handzeichen_pflegefachkraft VARCHAR(255),
  pflegebedurftige_person VARCHAR(255),
  angehoriger_betreuer VARCHAR(255),
  erstgesprach BOOLEAN,
  folgegesprach BOOLEAN,
  FOREIGN KEY (patient_id) REFERENCES Patientenprofile.Stammdaten(id)
);

CREATE TABLE IF NOT EXISTS Thema (
  id INT PRIMARY KEY AUTO_INCREMENT,
  gesprache_id INT,
  feld VARCHAR(255) NOT NULL,
  inhalt TEXT,
  FOREIGN KEY (gesprache_id) REFERENCES Gesprache(id)
);

CREATE TABLE IF NOT EXISTS Einschatzung (
  id INT PRIMARY KEY AUTO_INCREMENT,
  gesprache_id INT,
  risiko VARCHAR(255) NOT NULL,
  kognitiv_kommunikativ BOOLEAN,
  mobilitat_beweglichkeit BOOLEAN,
  krankheitsbezogen BOOLEAN,
  selbstversorgung BOOLEAN,
  soziales_leben BOOLEAN,
  haushaltsfuhrung BOOLEAN,
  status ENUM('niedrig', 'mittel', 'hoch', 'nicht relevant') NOT NULL,
  FOREIGN KEY (gesprache_id) REFERENCES Gesprache(id)
);
