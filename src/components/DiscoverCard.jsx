import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscoverCard = ({ discover, sliderRef, afterChange }) => {
  const settings = {
    dots: false, 
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: afterChange, 
  };

  return (
    <div className="w-full sm:max-w-[500px] max-w-[300px] items-center">
      <Slider ref={sliderRef} {...settings}>
        {discover.map((item, index) => (
          <div key={index} className="px-2"> 
            <img
              src={item.imgURL}
              alt={item.name}
              className="h-[280px] w-[280px] rounded-3xl object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DiscoverCard;