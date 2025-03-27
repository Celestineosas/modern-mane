import React from 'react'
import Button from '../components/Button'
import { arrowRight, locationIcon, phoneIcon } from '../assets/icons'
import { motion} from 'framer-motion';



const Service = () => {
    return (
        <section id='services' className='padding grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 w-full max-container bg-[#8c6a5d]'>
            <div className='flex flex-col space-y-16'>
                <motion.h2

                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='sm:text-4xl text-4xl lg:max-w-lg font-san leading-none xl:whitespace-nowrap  text-white font-semibold capitalize'>
                    SERVICE BEYOND <br></br> EXPECTATION
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                     className='info-text lg:max-w-sm'>
                    Our barbershop is the territory created purely for men who appreciate premium quality, time, and flawless looking.
                    We will help you to look stylish and confident in the most discrete way.
                     </motion.p>
                      <motion.div
              
                          initial={{ opacity: 0, y: 50 }} 
                          whileInView={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 0.5, delay:  0.1 }}>
                
                    <Button label="Submit request" iconURL={arrowRight} />
                 </motion.div>
            </div>
            <div className='flex'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8069286693555!2d-74.00601568459512!3d40.71277617933117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1788c7d37b%3A0xa0bdb6dcf34e1f1!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1617051607564!5m2!1sen!2sus"
                    width="550"
                    height="470"
                    style={{ border: 0, borderRadius: '25px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
            <div className='flex flex-col space-y-28 max-lg:space-y-16'>
                <div className='flex gap-10 justify-center border-b border-white pb-28 max-lg:pb-16'>
                    <img src={locationIcon} alt='location' width={70}  className='bg-white object-contain rounded-2xl' />
                    <span className='flex flex-col space-y-5'>
                        <h2 className="text-2xl font-montserrat text-white font-semibold">
                            LOCATION
                        </h2>
                        <p className="info-text">+28 winston st. Upper West Side, Manhattan New York, NY 05120</p>
                    </span>
                </div>
                <div className='flex gap-10 justify-center'>
                    <img src={phoneIcon} alt='Phone' width={70}  className='bg-white object-contain rounded-2xl' />
                    <span className='flex flex-col space-y-5'>
                        <h2 className="text-2xl font-montserrat text-white font-semibold">
                            +1234 5678
                        </h2>
                        <p className="info-text">Monday-Saturday: 9am-8pm Sunday: 9am-6pm</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Service
