import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Tweet from "./Tweet";
import TweetWithImage from "./TweetWithImage";
import Koo from "./Koo";
import NewsInline from "./NewsInline";
import Youtube from "./Youtube";
import {lowerCase} from 'lodash';

function SocialSlider(props){
    // console.log(JSON.stringify(props.socaildata));
    const settings = {
        className: "slider variable-width",
        adaptiveHeight:false,
        dots: true,
        infinite: true,
        variableWidth: true,
        speed: 600,
        centerMode: false,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      //console.log("this is social data type "+JSON.stringify(props.socaildata));

      

      const renderSlides = () =>
      
      Array.from(props.socaildata).map(socialitem=>  
        
        lowerCase(socialitem.type) === lowerCase("Tweet") ?
        (<div style={{ width: 220 }}> <Tweet  socialdata={socialitem}/> </div> )
        : lowerCase(socialitem.type) === lowerCase("TweetWithImage") ?
        (<div style={{ width: 275 }}> <TweetWithImage socialdata={socialitem}/> </div> )
        : lowerCase(socialitem.type) === lowerCase("Koo") ?
        (<div style={{ width: 220 }}> <Koo socialdata={socialitem}/> </div> )
        : lowerCase(socialitem.type) === lowerCase("Youtube") ?
        (<div style={{ width: 250 }}> <Youtube socialdata={socialitem}/> </div> )
        : lowerCase(socialitem.type) === lowerCase("NewsInline") ?
        (<div style={{ width: 275 }}> <NewsInline socialdata={socialitem}/> </div> )
        : (<div style={{ width: 1 }}> </div> )
    
      );
     
    return(
        
        <div>
        <Slider {...settings}>
        {renderSlides()}
        

    
            {/* <div style={{ width: 300 }}>
                <TweetWithImage /> 
            </div>
            <div style={{ width: 220 }}>
                <Koo /> 
            </div>
            <div style={{ width: 250 }}>
                <NewsInline /> 
            </div>
            <div style={{ width: 250 }}>
                <Youtube /> 
            </div>  */}
           
          
            </Slider>

            <div>
           
            </div>
        </div>
        
    );
}

export default SocialSlider;