import React, { useState, useEffect } from 'react';
import { FaHandHoldingMedical, FaBars, FaTimes, FaBarsStaggered } from "react-icons/fa6"; // Added FaBars and FaTimes
import { Link, useLocation } from 'react-router-dom';
import { CiHome, CiSearch, CiUser } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { to: "/dashboard", icon: <CiHome className='w-6 h-6' />, name: "Home" },
    { to: "/patientenliste", icon: <CiSearch className='w-6 h-6' />, name: "Search" },
    { to: "/explore", icon: <MdExplore className='w-6 h-6' />, name: "Explore" },
    { to: "/message", icon: <FaRegMessage className='w-4 h-4' />, name: "Message" },
    { to: "/profile", icon: <CiUser className='w-6 h-6' />, name: "Profile" },
  ];

  return (
    <div className={`flex flex-col items-center w-16 h-full  bg-custom-gray border border-black border-opacity-15 bg-opacity-60 shadow-2xl rounded-2xl relative overflow-visible md:w-auto md:h-auto md:rounded-xl md:bg-opacity-100 md:shadow-none ${isMenuOpen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className="flex justify-between  items-center w-full p-4 md:justify-center md:items-start md:pt-6 md:h-32">
        <Link to="/">
          <button onClick={() => setIsMenuOpen(false)}>
            <FaHandHoldingMedical className='fill-custom-dark-gray w-6 h-6 md:w-8 md:h-8' />
          </button>
        </Link>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}> {/* Toggle button for small screens */}
          {isMenuOpen ? <FaTimes className='w-6 h-6' /> : <FaBarsStaggered className='w-6 h-6' />} {/* FaTimes when open, FaBars when closed */}
        </button>
      </div>
      <div className={`flex flex-col space-y-4 justify-center items-center w-full h-full ${isMenuOpen ? 'h-screen' : ''} md:pt-4 md:space-y-6`}>
        {menuItems.map(item => (
          <Link to={item.to} key={item.name} onClick={() => { setSelected(item.to); setIsMenuOpen(false); }}>
            <button className={`flex justify-center items-center rounded-full w-10 h-10 transition-all duration-300 ${
              selected === item.to ? 'border bg-green bg-opacity-90 ml-6 fill-black border-b-2 border-gray-600 drop-shadow-xl border-opacity-65' : 'border-transparent hover:bg-white hover:border-4 hover:border-gray-50 hover:border-opacity-25 hover:bg-opacity-100 hover:ml-6'
            } hover:fill-black md:w-12 md:h-12 md:ml-0`}>
              {React.cloneElement(item.icon, {
                className: `${selected === item.to ? 'fill-black' : 'fill-custom-dark-gray group-hover:fill-black'} w-6 h-6 transition-colors duration-300`,
              })}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
