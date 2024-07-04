import React, { useState, useRef } from 'react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

const Vitalzeichenprotokoll = () => {
  const initialStats = {
    temperature: '',
    pulse: '',
    bloodPressure: '',
    respiration: '',
    oxygenSaturation: '',
    weight: '',
  };

  const [stats, setStats] = useState(initialStats);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const vitalzeichenRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (vitalzeichenRef.current.requestFullscreen) {
        vitalzeichenRef.current.requestFullscreen();
      } else if (vitalzeichenRef.current.mozRequestFullScreen) { /* Firefox */
        vitalzeichenRef.current.mozRequestFullScreen();
      } else if (vitalzeichenRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        vitalzeichenRef.current.webkitRequestFullscreen();
      } else if (vitalzeichenRef.current.msRequestFullscreen) { /* IE/Edge */
        vitalzeichenRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div ref={vitalzeichenRef} className="p-4 rounded-2xl bg-custom-light-gray bg-opacity-60 overflow-y-auto w-full h-full z-20 custom-scrollbar ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-lato text-2xl mx-4">VITALZEICHEN PROTOKOLL</h2>
        <button onClick={toggleFullscreen} className="p-2 bg-custom-light-gray rounded-full hover:bg-custom-dark-gray transition-all duration-300">
          {isFullscreen ? <FiMinimize className="w-6 h-6" /> : <FiMaximize className="w-6 h-6" />}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap h-full overflow-y-scroll">
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Temperatur</label>
          <input
            type="text"
            name="temperature"
            value={stats.temperature}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Puls</label>
          <input
            type="text"
            name="pulse"
            value={stats.pulse}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Blutdruck</label>
          <input
            type="text"
            name="bloodPressure"
            value={stats.bloodPressure}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Atmung</label>
          <input
            type="text"
            name="respiration"
            value={stats.respiration}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Sauerstoffsättigung</label>
          <input
            type="text"
            name="oxygenSaturation"
            value={stats.oxygenSaturation}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Gewicht</label>
          <input
            type="text"
            name="weight"
            value={stats.weight}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Vitalzeichenprotokoll;
