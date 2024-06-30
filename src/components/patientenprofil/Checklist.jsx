import React, { useState } from 'react';
import { TfiWrite } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { GoInfo } from "react-icons/go";


const Checklist = () => {
  const initialItems = [
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Wundversorgung', status: 'green' },
    { label: 'Ernährung und Flüssigkeitszufuhr', status: 'green' },
    { label: 'Kommunikation mit Angehörigen und Ärzten', status: 'red' },
    { label: 'Hygiene und Sauberkeit', status: 'green' },
    { label: 'Schmerzmanagement', status: 'red' },
    { label: 'Waschen', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Wundversorgung', status: 'green' },
    { label: 'Ernährung und Flüssigkeitszufuhr', status: 'green' },
    { label: 'Kommunikation mit Angehörigen und Ärzten', status: 'red' },
    { label: 'Hygiene und Sauberkeit', status: 'green' },
    { label: 'Schmerzmanagement', status: 'red' },
    { label: 'Waschen', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Schmerzmanagement', status: 'red' },
    { label: 'Waschen', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Waschen', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
    { label: 'Schmerzmanagement', status: 'red' },
    { label: 'Waschen', status: 'green' },
    { label: 'Waschen', status: 'red' },
    { label: 'Medikamenten Vergabe', status: 'green' },
  ];

  const [items, setItems] = useState(initialItems);

  const handleToggle = (index) => {
    const updatedItems = items.map((item, idx) => {
      if (idx === index) {
        return { ...item, status: item.status === 'green' ? 'red' : 'green' };
      }
      return item;
    });

    setItems(updatedItems);

    if (updatedItems[index].status === 'green') {
      setTimeout(() => {
        setItems((prevItems) =>
          prevItems.map((item, idx) => {
            if (idx === index) {
              return { ...item, status: 'red' };
            }
            return item;
          })
        );
      }, 5000); // Adjust this timeout as needed
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-custom-light-gray bg-opacity-60  overflow-hidden w-full h-full z-20 custom-scrollbar">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full overflow-y-scroll  ">
        <div className="flex justify-start items-start mb-4">
          <h2 className="font-lato text-2xl mx-4 ">CHECKLISTE DOKUMENTATION</h2>
        </div>
        <br/>
        {items.map((item, index) => (
          <div key={index} className="flex items-center px-4 col-span-1">
            <span className="font-medium font-istok text-lg tracking-wide flex-1">{item.label}</span>
            <div className="flex items-center space-x-4">
              <button
                className={`w-20 h-6 rounded-full flex items-center justify-start px-1 transition duration-300 bg-custom-light-gray shadow-md drop-shadow-lg`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`w-10 h-5 rounded-full transform transition-transform duration-300 ${item.status === 'green' ? 'translate-x-8 bg-green-800' : 'translate-x-0 bg-red-800'}`}
                ></div>
              </button>
            </div>
            <div className="flex w-12 h-8 mx-6 space-x-4 ">
              <button className="w-10 h-10 px-1 bg-custom-light-gray hover:bg-custom-dark-gray bg-opacity-50 rounded-full flex items-center justify-center hover:w-12 hover:bg-opacity-90 transition duration-300">
                <GrNotes className='w66 h-6' />
              </button>
              <button className="w-10 h-10 px-1 bg-custom-light-gray hover:bg-custom-dark-gray bg-opacity-50 rounded-full flex items-center justify-center hover:w-12 hover:bg-opacity-90 transition duration-300">
                <GoInfo className='w-6 h-6' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;
