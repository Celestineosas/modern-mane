import React from 'react'
import Button from '../components/Button'

const Footer = () => {
  return (
    <section id='about-us' className="padding w-full flex lg:flex-row flex-col max-container gap-20 lg:36 justify-between items-start xl:mt-20 mt-10 border-t border-gray-300">
    <div className='flex flex-1 items-start justify-between w-full'>
    <div className="flex flex-col gap-10">
    <h2 className="text-black text-2xl font-montserrat leading-normal font-black">
     MODERN MANE
    </h2>
     <ul className="text-left text-md flex flex-col font-palanquin leading-normal text-gray-500">
        
        <li>Wood Lane Forest Hills, NY. 11375</li>
        <li>(123) 456-7890</li>
        <li>reserve@moderman.com</li>
        <li>info@moderman</li>
     </ul>
    </div>
    <div className="flex flex-col gap-10">
    <h2 className="text-black text-lg font-montserrat leading-normal font-bold">
     Menu
    </h2>
     <ul className="text-left gap-2 text-md flex flex-col font-palanquin leading-normal text-gray-500">
        
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>News</li>
     </ul>
    </div>
    </div>

    <div className='flex flex-1 items-start sm:flex-row gap-10 flex-col justify-between w-full'>
    <div className="flex flex-col gap-10">
    <h2 className="text-black text-xl font-montserrat leading-normal font-bold">
     Quick links
    </h2>
     <ul className="text-left text-md gap-2 flex flex-col font-palanquin leading-normal text-gray-500">
        
        <li>Menu</li>
        <li>Opportunities</li>
        <li>Privacy Policy</li>
        <li>Location % Contacts</li>
     </ul>
    </div>
    <div className="flex flex-col gap-10">
    <h2 className="text-black text-lg font-montserrat leading-normal font-bold">
     Operational
    </h2>
     <ul className="text-left gap-2 text-md flex flex-col font-palanquin leading-normal text-gray-500">
        
        <li>Mon-Fri 8:00Am - 4:00PM</li>
        <li>Sat-Sun 8:00Am - 4:00PM</li>
      
     </ul>
     <div className='mt-3'> 
        <Button label="Reserve now"/>
     </div>
    </div>
    </div>
    </section>
  )
}

export default Footer
