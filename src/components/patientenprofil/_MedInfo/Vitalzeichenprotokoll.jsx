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
    <div ref={vitalzeichenRef} className="p-4 rounded-2xl bg-white bg-opacity-60 overflow-y-auto w-full h-full z-20 custom-scrollbar">
      <div className="flex justify-end items-center mb-4">
        <button onClick={toggleFullscreen} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300">
          {isFullscreen ? <FiMinimize className="w-6 h-6" /> : <FiMaximize className="w-6 h-6" />}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Temperatur</label>
            <textarea
              name="temperature"
              value={stats.temperature}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Puls</label>
            <textarea
              name="pulse"
              value={stats.pulse}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Blutdruck</label>
            <textarea
              name="bloodPressure"
              value={stats.bloodPressure}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Atmung</label>
            <textarea
              name="respiration"
              value={stats.respiration}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Sauerstoffsättigung</label>
            <textarea
              name="oxygenSaturation"
              value={stats.oxygenSaturation}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block text-2xl pb-2 font-thin text-gray-700">Gewicht</label>
            <textarea
              name="weight"
              value={stats.weight}
              onChange={handleChange}
              className="mt-1 block w-full h-24 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitalzeichenprotokoll;
