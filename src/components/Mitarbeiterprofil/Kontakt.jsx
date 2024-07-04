import React from 'react'

const Kontakt = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-96 bg-custom-light-gray bg-opacity-65 border-2 border-gray-400 rounded-xl overflow-y-auto py-2 z-20'>
        <div className="flex w-[95%] h-[90%] justify-between
         items-center  ">
            <div className="flex flex-col   items-center w-64 h-full border-b-2 border-black">
                <h2 className='font-fjalla text-2xl text-center w-full py-4'>Kontakt</h2>
                <div className="flex justify-center  text-sm items-center w-[90%] h-[60%]   ">
                    <ul >
                        <li>
                           Telefonnummer
                        </li>
                        <li>
                           Email-Adresse
                        </li>
                        <li>
                            Voller Name
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col  items-center w-64 h-full border-b-2 border-black">
                <h2 className='font-fjalla text-2xl text-center w-full py-4'>Standort</h2>
                <div className="flex  justify-center  text-sm items-center w-[90%] h-[60%]   ">
                    <ul className='flex flex-col' >
                        <li>
                           Haus Nazareth in Pürgen
                           
                        </li>
                        <li>Station1</li>
                        <li>Raum 309 Pflegestation</li>
                        
                    </ul>
                </div>
            </div>
            <div className="flex flex-col  items-center w-64 h-full border-b-2 border-black">
                <h2 className='font-fjalla text-2xl text-center w-full py-4'>Social Media</h2>
                <div className="flex justify-center  text-sm items-center w-[90%] h-[60%]  ">
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>TikTok</li>
                    </ul>
                </div>
            </div>
            
            

        </div>

    </div>
  )
}

export default Kontakt