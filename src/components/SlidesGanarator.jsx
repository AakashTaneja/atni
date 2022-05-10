import React from "react";
import TweetWithImage from "./TweetWithImage";
import Koo from "./Koo";
import NewsInline from "./NewsInline";
import Youtube from "./Youtube";



function SlidesGenerator(){

    return(
        <div>
            <div style={{ width: 300 }}>
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
    </div>
        </div>
        
        

    );
}

export default SlidesGenerator;