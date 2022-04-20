import React, {Component} from "react";
import Slider from "react-slick";

function PrevArrow(props){
  const ARROW_prev = "arrow_left.png";
    const { className, style, onClick } = props;
  return (
    <div
        className="slick-prev"
        style={{...style, display: 'block'}}
        onClick={onClick}
    >
        <img src={ARROW_prev} className= "arrowLeft hidden-mobile"  alt="arrow_left"/>
    </div>
);

}

export default PrevArrow;