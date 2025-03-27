import React, { useEffect } from "react";
import { meetdetails } from "../constants";
import MeetCard from "../components/MeetCard";
import { meet4 } from "../assets/images";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { motion } from 'framer-motion';

const Meet = () => {



  return (
    <section id="about-us" className="padding space-y-24 w-full flex flex-col max-container justify-between items-center">
      <div className="flex-col flex flex-1 gap-10">
        <motion.h2
             
               initial={{ opacity: 0, y: 50 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.5, delay:  0.1 }}
              className="sm:text-4xl uppercase text-4xl lg:max-w-lg text-center font-san leading-none xl:whitespace-nowrap text-black font-semibold">
          Meet our Experts
        </motion.h2>
        <motion.p

            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay:  0.1 }} className="font-montserrat text-center text-black text-sm leading-normal lg:max-w-md">
          Each member of our team is committed to provide an exceptional grooming experience ensuring you leave our shop looking and feeling your best.
        </motion.p>
      </div>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-16 lg:gap-10 gap-14">
        {meetdetails.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
          >
            <MeetCard {...item} />
          </motion.div>
        ))}
        <motion.div
          className="flex flex-1 flex-col w-full max-sm:w-full relative"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: meetdetails.length * 0.1 }} // Delay after other cards
        >
          <img
            src={meet4}
            alt="meet4"
            className="h-[380px] w-[350px] object-cover rounded-md relative"
          />
          <div className="flex w-full justify-between absolute bottom-3 left-2 z-10">
            <span className="bg-white flex flex-col py-3 px-5 gap-3 rounded-md">
              <h3 className="font-montserrat text-black text-lg font-bold">
                Would you like to join <br /> our team?
              </h3>
              <div className="flex flex-1 gap-5">
                <a className="text-gray-500 font-palanquin text-sm" href="#">
                  <p>Send a resume</p>
                </a>
                <HiArrowLongRight className="w-6 h-6 bg-[#D98324] rounded-sm p-1" />
              </div>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Meet;