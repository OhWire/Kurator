import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AdditionalInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [form, setForm] = useState({
    firstName: state?.firstName || '',
    lastName: state?.lastName || '',
    birthday: state?.birthday || '',
    address: '',
    phoneNumber: '',
    // Weitere Felder nach Bedarf
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
      // Hier können Sie die Daten verarbeiten und speichern
      console.log('Form Data:', form);
      alert('Daten erfolgreich übermittelt!');
      // Nach der Verarbeitung weiter navigieren
      navigate('/success'); // Beispiel für eine Erfolgsseite
    } catch (error) {
      console.error('Fehler bei der Übermittlung:', error);
      alert('Fehler bei der Übermittlung! Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="relative w-full h-full p-6 flex items-center justify-end rounded-xl overflow-hidden bg-custom-dark-gray bg-opacity-15">
      <div className="max-w-xl w-full bg-black bg-opacity-45 rounded-2xl shadow-md p-16 mr-10 h-[80%] flex flex-col justify-center relative z-10">
        <h2 className="text-5xl tracking-widest text-white font-bold text-center mb-4 font-fjalla">ADDITIONAL INFORMATION</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block text-sm font-medium text-white">Birthday</label>
            <input
              type="text"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-white">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-custom-green to-custom-light-gray text-black font-Beba text-xl py-2 rounded-full hover:border hover:border-black hover:border-opacity-10 hover:from-custom-green hover:drop-shadow-md transition duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfoPage;
