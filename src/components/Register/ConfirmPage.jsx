import React, { useState } from 'react';
import axios from 'axios';

const ConfirmPage = () => {
  const [form, setForm] = useState({
    email: '',
    code: '',
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
      const response = await axios.post('http://localhost:3001/confirm', {
        email: form.email,
        code: form.code,
      });
      console.log(response.data);
      alert('Bestätigung erfolgreich!');
    } catch (error) {
      console.error('Bestätigungsfehler:', error.response?.data || error.message);
      alert('Bestätigung fehlgeschlagen! Bitte überprüfen Sie Ihre Angaben.');
    }
  };

  return (
    <div className="relative w-full h-full p-6 flex items-center justify-end rounded-xl overflow-hidden bg-custom-dark-gray bg-opacity-15">
      <div className="max-w-xl w-full bg-black bg-opacity-45 rounded-2xl shadow-md p-16 mr-10 h-[80%] flex flex-col justify-center relative z-10">
        <h2 className="text-5xl tracking-widest text-white font-bold text-center mb-4 font-fjalla">ACCOUNT CONFIRMATION</h2>
        <p className="text-center text-white text-lato mb-8">ENTER THE CODE SENT TO YOUR EMAIL</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="code"
              placeholder="ENTER CONFIRMATION CODE"
              value={form.code}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-custom-green to-custom-light-gray text-black font-Beba text-xl py-2 rounded-full hover:border hover:border-black hover:border-opacity-10 hover:from-custom-green hover:drop-shadow-md transition duration-300"
            >
              CONFIRM ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
