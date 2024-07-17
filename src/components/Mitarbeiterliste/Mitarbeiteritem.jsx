import React from 'react';
import { useNavigate } from 'react-router-dom';

const MitarbeiterItem = ({ employee }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/MitarbeiterProfil/${employee.id}`, { state: { employeeId: employee.id } });
  };

  return (
    <div
      className="p-4 bg-white rounded-xl drop-shadow-md cursor-pointer"
      onClick={handleItemClick}
    >
      <h2 className="text-2xl font-bold">{employee.name}</h2>
      <p>Abteilung: {employee.department}</p>
      <p>Email: {employee.email}</p>
      <p>Telefon: {employee.phone}</p>
    </div>
  );
};

export default MitarbeiterItem;
