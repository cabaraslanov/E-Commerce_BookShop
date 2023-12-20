import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"

const Slider = () => {
  return (
    <div className="">
      <Carousel autoPlay dynamicHeight 	infiniteLoop className="w-3/4 mx-auto">
        <div className="h-5/6 md:h-3/6">
          <img className="h-full object-cover" src={slide1} />
        </div>
        <div className="h-5/6 md:h-3/6">
          <img className="h-full object-cover" src={slide2} />
        </div>
        <div className="h-5/6 md:h-3/6">
          <img className="h-full object-cover" src={slide3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
