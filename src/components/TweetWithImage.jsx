import React from "react";

function TweetWithImage(props){
    


    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            props.socialdata.tweetURL, "_blank");
    }


    return(
        <div className="twitter-koo-box twitter-box">
        
            
            <div onClick={handleClick} >
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic">
                    <img className="twitter-koo-img-profile" src={props.socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                     {props.socialdata.name} 
                     <br></br>
                     {props.socialdata.handle} 
                </div>
                
                
                <img className="twitter-koo-logo twitter-logo-with-media" src={props.socialdata.twitterLogo} />
            </div>
            
                
                <div className="twitter-koo-text">
                    {props.socialdata.tweetText}
                </div>
                <div>
                    <img className="tweet-image" src={props.socialdata.tweetImage}/>
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetWithImage;