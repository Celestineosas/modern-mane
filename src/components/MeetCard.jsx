import React from 'react'

const MeetCard = ({ imgURL,  name, position}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full relative'>
     <img 
     src={imgURL}
     alt={name}
     className='h-[380px] w-[350px] object-cover rounded-md relative'
   
     />
      <div className='flex w-full justify-between absolute bottom-3 left-2 z-10'>
        <span className='bg-white flex flex-col py-1 px-5 rounded-md'>
         <h3 className="font-montserrat text-black text-md font-bold">{name}</h3>
         <p className='text-gray-500 font-palanquin text-sm'>{position}</p>
        </span>
      </div>
    </div>
  )
}

export default MeetCard
