import React from "react";
import image from "../Assets/container.png";
import Slider from "react-slick";
import Part1img from '../Assets/ch1.jpg';
import Part2img from '../Assets/ch2.jpg'; 
import '../Styles/Homepart.css'; 

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
           <img className="zoomable-image" src={image} alt="bnm"/>
          </div>
          <div>
            <img className="zoomable-image" src={Part1img} alt="bnm"  />
          </div>
          <div>
            <img className="zoomable-image" src={Part2img} alt="bnm" />
          </div>
        </Slider>
      </div>
    </>
  );
}
