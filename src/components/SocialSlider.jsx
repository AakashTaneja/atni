import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Tweet from "./Tweet";
import TweetWithImage from "./TweetWithImage";
import TweetWithVideo from "./TweetWithVideo";
import Koo from "./Koo";
import NewsInline from "./NewsInline";
import Youtube from "./Youtube";

function SocialSlider(props){
    // console.log(JSON.stringify(props.socaildata));
    const settings = {
        className: "slider variable-width",
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 600,
        centerMode: false,
        slidesToScroll: 1,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      console.log("this is social data type "+JSON.stringify(props.socaildata));

      

      const renderSlides = () =>
      
      Array.from(props.socaildata).map(socialitem=>  
             
        socialitem.type === "Tweet" ?
        (<div style={{ width: 220 }}> <Tweet  socialdata={socialitem}/> </div> )
        : socialitem.type === "TweetWithImage" ?
        (<div style={{ width: 300 }}> <TweetWithImage socialdata={socialitem}/> </div> )
        : socialitem.type === "Koo" ?
        (<div style={{ width: 220 }}> <Koo socialdata={socialitem}/> </div> )
        : socialitem.type === "Youtube" ?
        (<div style={{ width: 250 }}> <Youtube socialdata={socialitem}/> </div> )
        : socialitem.type === "NewsInline" ?
        (<div style={{ width: 250 }}> <NewsInline socialdata={socialitem}/> </div> )
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