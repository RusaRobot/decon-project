import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const UISlider = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute flex justify-center items-center right-2 md:top-[255px] top-[160px] rounded-full w-5 h-5 bg-yellowSecondary hover:bg-yellowPrimary z-50 hover:cursor-pointer"
        onClick={onClick}
      >
        <GrFormNext className="text-[100px]" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute flex justify-center items-center left-2 md:top-[255px] top-[160px] rounded-full w-5 h-5 bg-yellowSecondary hover:bg-yellowPrimary z-50 hover:cursor-pointer"
        onClick={onClick}
      >
        <GrFormPrevious className="text-[100px]" />
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="w-100">
        <ul className="list-unstyled flex-row justify-content-center align-items-center mb-5">
          {dots}
        </ul>
      </div>
    ),
    beforeChange(oldIndex, newIndex) {
      setActiveSlideIndex(newIndex);
    },
    customPaging: (slideIndex) => (
      <div
        key={slideIndex}
        active={slideIndex === activeSlideIndex}
        className={
          slideIndex === activeSlideIndex
            ? "w-[6px] h-[6px] border-[3px] border-[#FFDC12] bg-[#FFDC12] bg-transparent bg rounded-full my-0 mx-[5px]"
            : "w-[6px] h-[6px] border-[3px] border-[#F0F3F7] bg-[#F0F3F7] bg-transparent rounded-full my-0 mx-[5px]"
        }
      ></div>
    ),
  };
  return (
    <div className="w-100">
      <Slider {...sliderSettings}>{props.children}</Slider>
    </div>
  );
};
export default UISlider;
