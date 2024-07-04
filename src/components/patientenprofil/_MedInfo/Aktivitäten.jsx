import React, { useState, useRef } from 'react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

const AktivitätenProtokoll = () => {
  const initialActivities = {
    walking: '',
    eating: '',
    sleeping: '',
    exercising: '',
    socializing: '',
  };

  const [activities, setActivities] = useState(initialActivities);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const activitiesRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivities((prevActivities) => ({
      ...prevActivities,
      [name]: value,
    }));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (activitiesRef.current.requestFullscreen) {
        activitiesRef.current.requestFullscreen();
      } else if (activitiesRef.current.mozRequestFullScreen) { /* Firefox */
        activitiesRef.current.mozRequestFullScreen();
      } else if (activitiesRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        activitiesRef.current.webkitRequestFullscreen();
      } else if (activitiesRef.current.msRequestFullscreen) { /* IE/Edge */
        activitiesRef.current.msRequestFullscreen();
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
    <div ref={activitiesRef} className="p-4 rounded-2xl bg-custom-light-gray bg-opacity-60 overflow-hidden w-full h-full z-20 custom-scrollbar">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-lato text-2xl mx-4">AKTIVITÄTEN PROTOKOLL</h2>
        <button onClick={toggleFullscreen} className="p-2 bg-custom-light-gray rounded-full hover:bg-custom-dark-gray transition-all duration-300">
          {isFullscreen ? <FiMinimize className="w-6 h-6" /> : <FiMaximize className="w-6 h-6" />}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto h-[calc(100vh-8rem)]"> {/* Updated to be scrollable */}
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Gehen</label>
          <input
            type="text"
            name="walking"
            value={activities.walking}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Essen</label>
          <input
            type="text"
            name="eating"
            value={activities.eating}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Schlafen</label>
          <input
            type="text"
            name="sleeping"
            value={activities.sleeping}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Sport treiben</label>
          <input
            type="text"
            name="exercising"
            value={activities.exercising}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
        <div className="flex flex-col px-4 col-span-1">
          <label className="font-medium font-istok text-lg tracking-wide">Sozialisation</label>
          <input
            type="text"
            name="socializing"
            value={activities.socializing}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-custom-light-gray bg-opacity-75 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AktivitätenProtokoll;
