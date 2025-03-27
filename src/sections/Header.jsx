import React from 'react'
import Nav from '../components/Nav'
import AppointementForm from '../components/AppointementForm'

const Header = () => {
  return (
    <section className='flex flex-col max-width bg-background max-lg:bg-background-md  bg-cover max-lg:bg-center'>
      <Nav />
      <div className='mt-40 mx-4 lg:mx-0 lg:w-3/5  '>
     <AppointementForm />
      </div>
      <div className='md:mt-20 mt-10 mx-20 max-md:mx-4 mb-10 flex flex-1  lg:gap-20 gap-10 items-left max-lg:flex-col-reverse'>
        <p className='font-palanquin text-white-400 text-md leading-5 lg:max-w-lg max-lg:max-w-lg text-left'>
          Our mission is to provide exceptional grooming services in a refined and friendly 
          environment. Whether you're here for classic haircut, a modern fade, or a clean shave. Our baebers are dedicated to ensuring you leave looking and feeling your best
        </p>
        <h2 className='font-montserrat uppercase text-white lg:max-w-lg font-semibold text-4xl lg:whitespace-nowrap max-sm:text-3.5xl xl:text-right'>
          Where Tradition <br></br>  Meets Modern Style
        </h2>

      </div>
    </section>
  )
}

export default Header
