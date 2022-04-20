import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";

function HeadLine(props){

function handleClick(){
    //window.location.href = tweetURL;
    window.open( 
        props.headline.newsURL, "_blank");
}

    return(
        <div onClick={handleClick} className="headline-box">

        {/* {alert(JSON.stringify(props))} */}
            <div className="site-logo-headline">
                <div>
                     <img className ="site-logo" src={props.headline.siteLogo}></img>
                </div>
                <div className="headline-text">
                    {props.headline.headlineText}
                </div>
            </div>
            
    
            <div>
                <img className ="headline-image" src={props.headline.newsImage}></img>
            </div>   
        </div>

    );
}

export default HeadLine;