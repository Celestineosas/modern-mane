import React, { useState, useRef, useEffect } from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { discover } from "../constants";
import DiscoverCard from "../components/DiscoverCard";
import DiscoverCarousel from "../components/DiscoverCarousel";
import BookPrice from "../components/BookPrice";
import { motion, useAnimation } from 'framer-motion';


const Discover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = discover.length;

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };


  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === totalSlides - 1;

  const bigTextControls = useAnimation();
  const smallTextControls = useAnimation();


  useEffect(() => {
    const handleScroll = () => {
      const bigTextElement = document.querySelector('.big-text');
      const smallTextElement = document.querySelector('.small-text');



      if (bigTextElement) {
        const bigTextRect = bigTextElement.getBoundingClientRect();
        if (bigTextRect.top < window.innerHeight && bigTextRect.bottom > 0) {
          bigTextControls.start({ opacity: 1, y: 0 });
        }
      }

      if (smallTextElement) {
        const smallTextRect = smallTextElement.getBoundingClientRect();
        if (smallTextRect.top < window.innerHeight && smallTextRect.bottom > 0) {
          smallTextControls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bigTextControls, smallTextControls]);



  return (
    <section className="padding space-y-24 w-full flex flex-col max-container justify-center bg-[#EFE9D5]">
      <div className="flex flex-1 w-full gap-24 justify-between flex-col lg:flex-row max-w-[1200px] mx-auto">
        <div className="flex flex-col space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            animate={bigTextControls} className="sm:text-4xl text-4xl lg:max-w-lg font-san leading-none xl:whitespace-nowrap text-black font-semibold capitalize big-text">
            DISCOVER<br></br>OUR WORKS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={smallTextControls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} className="font-montserrat text-black text-sm leading-normal max-w-md lg:max-w-sm small-text">
            Our team of experienced barbers is dedicated to their craft. We stay
            updated with the latest techniques and styles to ensure you get the
            best service possible.
          </motion.p>

          <div className="flex flex-1 flex-col gap-5">
            <p className="font-montserrat text-black font-bold text-lg">
              ({currentSlide + 1}/{totalSlides})
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                className={`p-2 rounded-full ${isPrevDisabled
                  ? "bg-white text-gray-600 cursor-not-allowed"
                  : "bg-[#D98324] text-white hover:bg-[#D98324] cursor-pointer"
                  }`}
              >
                <HiArrowLongLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`p-2 rounded-full ${isNextDisabled
                  ? "bg-white text-gray-600 cursor-not-allowed"
                  : "bg-[#D98324] text-white hover:bg-[#D98324] cursor-pointer"
                  }`}
              >
                <HiArrowLongRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <DiscoverCard
            discover={discover}
            sliderRef={sliderRef}
            afterChange={handleAfterChange}
          />
        </div>
      </div>
      <div className="flex flex-1 xl:gap-36 gap-24 w=full justify-between items-center flex-col lg:flex-row max-w-[1200px] ">
        <div className="flex flex-col items-center">
          <DiscoverCarousel />
        </div>
        <div className="flex flex-1 flex-col gap-10 items-center">
          <h2 className="sm:text-4xl text-4xl lg:max-w-lg font-san leading-none xl:whitespace-nowrap text-black font-semibold capitalize">
            OUR PRICES
          </h2>
          <div class="flex gap-5 flex-col">
            <BookPrice />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;