import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa";

const people = [
  { name: "Neu" },
  { name: "Chris" },
  { name: "Jac" },
  { name: "Jojo" },
];

const days = ["Mo 14", "Di 15", "Mi 16", "Do 17", "Fr 18", "Sa 19", "So 20"];
const times = ["11.00", "12.00", "13.00", "14.00", "15.00"];
const schedule = [
  ["Pflegedienst", "Pflegedienst", "Pflegedienst"],
  ["Pause", "Pflegedienst", "Pflegedienst"],
  ["Pause", "Meeting", "Pflegedienst"],
  ["Pause", "Meeting", "Pflegedienst"],
];

const Dienstplan = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedDate, setSelectedDate] = useState("14-20 September, 2024");

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleDateChange = (direction) => {
    // Implement date change logic here
  };

  return (
    <div className="flex w-full h-[95%]  z-10 bg-transparent">
      <Sidebar 
        people={people} 
        onPersonClick={handlePersonClick} 
        selectedPerson={selectedPerson} 
      />
      <MainView 
        selectedDate={selectedDate} 
        onDateChange={handleDateChange} 
        days={days} 
        times={times} 
        schedule={schedule} 
      />
    </div>
  );
};

const Sidebar = ({ people, onPersonClick, selectedPerson }) => {
  return (
    <div className="flex flex-col w-[20%] h-[90%] items-center ">
      <div className="flex w-full">
        <h2 className='p-6 text-3xl font-fjalla tracking-wide'>Dienstplan</h2>
      </div>
      <label>
        <input className='w-[90%] rounded-lg mt-6' type="text" placeholder='Suchen...' />
      </label>
      <div className="flex flex-col w-full items-center">
        {people.map((person, index) => (
          <PersonButton 
            key={index} 
            person={person} 
            onClick={() => onPersonClick(person)} 
            isSelected={selectedPerson === person} 
          />
        ))}
      </div>
    </div>
  );
};

const PersonButton = ({ person, onClick, isSelected }) => {
  return (
    <div className="flex w-[80%] mt-6 items-center">
      <button 
        className={`flex justify-center items-center w-12 h-12 bg-black rounded-full mr-6 text-white ${isSelected ? 'bg-green-500' : ''}`} 
        onClick={onClick}
      >
        +
      </button>
      <h2 className='text-xl'>{person.name}</h2>
    </div>
  );
};

const MainView = ({ selectedDate, onDateChange, days, times, schedule }) => {
  return (
    <div className="flex w-[79%]  bg-transparent bg-opacity-15 mt-6">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex items-center justify-between pr-24 w-full h-12 bg-black bg-opacity-65 rounded-t-xl">
          <button className='flex ml-6 justify-center items-center w-28 h-8 bg-custom-light-gray bg-opacity-75 rounded-2xl text-xl text-w'>
            <p className='font-lato'>Heute</p>
          </button>
          <FaArrowLeft onClick={() => onDateChange('prev')} />
          <div className="flex justify-center items-center space-x-6">
            <FaCalendar />
            <p>{selectedDate}</p>
          </div>
          <FaArrowRight onClick={() => onDateChange('next')} />
        </div>
        <DaysHeader days={days} />
        <TimeSlots times={times} />
        <ScheduleTable schedule={schedule} />
      </div>
    </div>
  );
};

const DaysHeader = ({ days }) => {
  return (
    <div className="flex w-full rounded-lg h-8 bg-custom-dark-gray bg-opacity-35 my-1 ">
      {days.map((day, index) => (
        <div key={index} className="flex w-[20%] h-8 items-center justify-center">{day}</div>
      ))}
    </div>
  );
};

const TimeSlots = ({ times }) => {
  return (
    <div className="flex w-full h-6 bg-black bg-opacity-15 rounded-md my-1">
      {times.map((time, index) => (
        <div key={index} className="flex justify-center w-[20%]">{time}</div>
      ))}
    </div>
  );
};

const ScheduleTable = ({ schedule }) => {
  return (
    <div className="flex flex-col h-full w-full space-y-6 pt-10">
      {schedule.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between items-center w-full h-12 bg-black bg-opacity-15 shadow-md rounded-xl">
          {row.map((item, colIndex) => (
            <div 
              key={colIndex} 
              className={`flex justify-center items-center text-white font-lato w-[15%] h-10 mx-12 rounded-xl ${getItemClass(item)}`}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const getItemClass = (item) => {
  switch (item) {
    case "Pflegedienst":
      return "bg-custom-blue";
    case "Pause":
      return "bg-custom-dark-gray";
    case "Meeting":
      return "bg-custom-green";
    default:
      return "";
  }
};

export default Dienstplan;
