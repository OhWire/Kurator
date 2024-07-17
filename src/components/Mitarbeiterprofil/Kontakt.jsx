import React from 'react'
import { FaDeskpro, FaFacebook, FaHouseUser, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Kontakt = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-96 bg-transparent rounded-xl overflow-y-auto py-2 z-20'>
        <div className="flex w-[95%] h-[90%] justify-between
         items-center  ">
            <div className="flex flex-col   items-center w-64 h-full  shadow-xl rounded-xl bg-custom-green bg-opacity-45 hover:bg-opacity-85 hover:scale-105 transition-all duration-200">
                <h2 className='font-fjalla text-4xl text-left w-full px-4 text-custom-dark-gray drop-shadow-md py-4 '>Kontakt</h2>
                <div className="flex px-4 items-center text-xl  w-full h-[60%] font-lato font-light text-custom-dark-gray   ">
                    <ul classname="flex h-full space-y-6  " >
                        <li>
                         Name Vorname        
                        </li>
                        <li>
                           Telefonnummer
                        </li>
                        <li>
                           Email-Adresse
                        </li>
                        <li>
                            Voller Name
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className="flex flex-col   items-center w-64 h-full  shadow-xl rounded-xl bg-custom-green bg-opacity-45 hover:bg-opacity-65 hover:scale-105 transition-all duration-200">
                <h2 className='font-fjalla text-4xl text-left w-full px-4 text-custom-dark-gray drop-shadow-md py-4 '>Standort</h2>
                <div className="flex px-4 items-center text-xl  w-full h-[60%] font-lato font-light text-custom-dark-gray   ">
                    <ul classname="flex h-full w-full space-x-4  " >
                        <li className='flex space-x-4 justify-between items-center w-full  '>
                         <FaHouseUser className='w-10 h-10 hover:scale-105  transition-all duration-300 hover:fill-black my-2'/>
                         <p>Standort</p>      
                        </li>
                        <li className='flex space-x-4 justify-between items-center w-full  '>
                         <FaDeskpro className='w-10 h-10 hover:scale-105  transition-all duration-300 hover:fill-black my-2'/>
                         Station X     
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
            <div className="flex flex-col   items-center w-64 h-full  shadow-xl rounded-xl bg-custom-green bg-opacity-75 hover:bg-opacity-85 hover:scale-105 transition-all duration-200">
                <h2 className='font-fjalla text-4xl text-left w-full px-4 text-custom-dark-gray drop-shadow-md py-4 '>Social Media</h2>
                <div className="flex px-4 items-center  text-xl  w-full h-[60%] font-lato font-light text-custom-dark-gray   ">
                    <ul classname="flex h-full w-full space-y-6 justify-center items-center " >
                        <li>
                            <FaTwitter className='w-10 h-10 hover:scale-105 transition-all duration-300 hover:fill-black my-2'/>        
                        </li>
                        <li>
                            <FaInstagram className='w-10 h-10 hover:scale-105 transition-all duration-300 hover:fill-black my-2'/>
                        </li>
                        <li>
                            <FaFacebook className='w-10 h-10 hover:scale-105 transition-all duration-300 hover:fill-black my-2'/>
                        </li>
                        <li>
                            <FaYoutube className='w-10 h-10 hover:scale-105 transition-all duration-300 hover:fill-black my-2'/>
                        </li>
                       
                    </ul>
                </div>
            </div>
            
            

        </div>

    </div>
  )
}

export default Kontakt