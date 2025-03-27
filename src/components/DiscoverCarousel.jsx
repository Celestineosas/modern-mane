import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousels } from "../constants";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const DiscoverCarousel = () => {
  const settings = {
    dots: false, // Disable dots
    arrows: false, // Disable inbuilt arrows
    infinite: false, // Disable infinite scrolling
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carousels.length;

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

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === totalSlides - 1;

  return (
    <div className="w-full p-10 rounded-lg flex flex-col gap-7 bg-[#D98324] sm:max-w-[420px] max-w-[320px]">
      <Slider
        ref={sliderRef}
        {...settings}
        afterChange={(current) => setCurrentSlide(current)} // Update current slide
      >
        {carousels.map((carousel) => (
          <div className="flex flex-col" key={carousel.name}>
            <p className="font-montserrat text-black font-normal text-md leading-normal lg:max-w-sm">
              {carousel.text}
            </p>
            <div className="flex mt-16 justify-between">
              <h2 className="text-lg font-montserrat leading-none text-black font-semibold">
                {carousel.name}
              </h2>
              <div className="flex items-center gap-5">
                <button
                  onClick={handlePrev}
                  disabled={isPrevDisabled}
                  className={`p-2 rounded-full ${isPrevDisabled
                    ? " text-gray-600 cursor-not-allowed"
                    : " text-white cursor-pointer"
                    }`}
                >
                  <HiArrowLongLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isNextDisabled}
                  className={`p-2 rounded-full ${isNextDisabled
                    ? " text-gray-600 cursor-not-allowed"
                    : " text-white cursor-pointer"
                    }`}
                >
                  <HiArrowLongRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DiscoverCarousel;