import React from "react";

function NewsInline(props){


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
        <div>
                <img className ="news-inline-sitelogo" src={props.socialdata.siteLogo}></img>
        </div>
        <div className="news-inline-text">
            {props.socialdata.newsInlineText}
        </div>
                
            
            
        </div>
        
    );
}

export default NewsInline;