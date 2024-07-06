import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/register', {
        username: form.email, // Verwenden Sie die E-Mail-Adresse als Benutzernamen
        email: form.email,
        password: form.password,
        givenName: form.firstName,
        familyName: form.lastName,
        birthdate: form.birthday,
      });
      console.log(response.data);
      alert('Registrierung erfolgreich! Sie können sich nun anmelden.');
      navigate('/confirm');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Registrierung fehlgeschlagen! Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center z-20">
      <div className="bg-custom-dark-gray bg-opacity-65 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-4xl mb-6 text-center font-bold font-ibm-plex-mono drop-shadow-xl text-white">Registrierung</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-thin text-custom-light-gray">
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
            <label htmlFor="lastName" className="block text-lg font-thin text-custom-light-gray">
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
            <label htmlFor="birthday" className="block text-lg font-thin text-custom-light-gray">
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
            <label htmlFor="email" className="block text-lg font-thin text-custom-light-gray">
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
            <label htmlFor="password" className="block text-lg font-thin text-custom-light-gray">
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
            <button type="submit" className="w-full bg-custom-green drop-shadow-xl hover:bg-custom-light-blue transition-all duration-300 hover:text-white text-black hover:rounded-xl p-2 rounded-md">
              Registrieren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
