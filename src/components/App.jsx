import React from "react";
import Tweet from "./Tweet";
import TweetWithImage from "./TweetWithImage";
import News from "./News";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";

import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import SliderArrow from "./SliderArrow";



function App(){

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      
    return(
        <div>
             <h1>and the news is</h1>
           {/*
            <News />
            <Tweet /> 
            <Tweet />
           
            <Tweet /> */}

            <Container className="mastercarausal">
                <Row>
                    <Col>
                     <News />
                    </Col>
                </Row>
                {/*<Row>
                    <Col>
                        <TweetWithImage /> 
                    </Col>
                    <Col>
                        <Tweet /> 
                    </Col>
                    <Col>
                        <Tweet /> 
                    </Col>
                    <Col>
                        <Tweet /> 
                    </Col>
                    
                   
                </Row>
                 <div className="mastercarausal">
                
                    <div className="container">
                        <News />
                        <Tweet /> 
                        <Tweet />
                        <Tweet /> 
                        <Tweet />
                        <Tweet />
                    
                    </div>
                </div> */}
            <Row>

            </Row>

            <Slider {...settings}>
                <div style={{ width: 300 }}>
                <TweetWithImage /> 
                </div>
                <div style={{ width: 200 }}>
                    <Tweet /> 
                </div>
                <div style={{ width: 200 }}>
                    <Tweet /> 
                </div>
                <div style={{ width: 200 }}>
                    <Tweet /> 
                </div>
                <div style={{ width: 200 }}>
                    <Tweet /> 
                </div>
                <div style={{ width: 200 }}>
                    <Tweet /> 
                </div>
            </Slider>

            </Container>       

        </div>

        
        
    )
}

export default App;