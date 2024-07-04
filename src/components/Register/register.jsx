import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
        birthday: form.birthday
      });
      console.log(response.data);
      // Nach erfolgreicher Registrierung, können Sie den Benutzer weiterleiten oder eine Erfolgsmeldung anzeigen
      alert('Registrierung erfolgreich! Sie können sich nun anmelden.');
    } catch (error) {
      console.error(error);
      alert('Registrierung fehlgeschlagen! Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center z-20">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrierung</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
              Geburtstag
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Passwort
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
              minLength="12"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{12,}"
              title="Das Passwort muss mindestens 12 Zeichen lang sein und mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten."
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
              Registrieren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
