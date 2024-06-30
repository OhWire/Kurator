import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
};

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  port: dbConfig.port,
  multipleStatements: true 
});

connection.connect(err => {
  if (err) {
    console.error("Fehler beim Verbinden zum MySQL-Server:", err.message);
    return;
  }
  console.log('Verbunden mit dem MySQL-Server');

  const createDatabaseAndTable = `
    CREATE DATABASE IF NOT EXISTS ${dbConfig.database};
    USE ${dbConfig.database};
    CREATE TABLE IF NOT EXISTS Stammdatenblatt (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vorname VARCHAR(50),
        nachname VARCHAR(50),
        geburtsname VARCHAR(50),
        geburtsdatum DATE,
        geschlecht VARCHAR(20),
        nationalitaet VARCHAR(50),
        adresse VARCHAR(100),
        plz VARCHAR(10),
        stadt VARCHAR(50),
        land VARCHAR(50),
        telefon VARCHAR(20),
        email VARCHAR(100),
        versicherungsnummer VARCHAR(50),
        notfallkontakt VARCHAR(100),
        notfalltelefon VARCHAR(20)
    );
  `;

  connection.query(createDatabaseAndTable, (err, result) => {
    if (err) {
      console.error("Fehler beim Erstellen der Datenbank oder Tabelle:", err.message);
    } else {
      console.log("Datenbank und Tabelle wurden erfolgreich erstellt (falls nicht vorhanden).");
    }
    connection.end();
  });
});
