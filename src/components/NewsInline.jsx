import React from "react";
import {headlineLogoObject} from "../staticdata";
import {findNewsPubName} from "./StringFunctions";

function NewsInline(props){

    // headlineLogoObject[findNewsPubName(props.socialdata.newsInlineURL)]
    

    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            props.socialdata.newsInlineURL, "_blank");
    }


    return(
        <div className="news-inline-box" onClick={handleClick}>
        
        
            
        <div className="">
            <img className="news-inline-image" src={props.socialdata.newsInlineImage}/>
        </div>
        <div className="news-inline-text">
                <img className ="news-inline-sitelogo" src={headlineLogoObject[findNewsPubName(props.socialdata.newsInlineURL)]}></img>
        
            {props.socialdata.newsInlineText}
        </div>
                
            
            
        </div>
        
    );
}

export default NewsInline;