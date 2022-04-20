import React from "react";

function Tweet(props){
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
                <div className="twitter-koo-biotext">
                
                <div>
                <img className="twitter-koo-logo" src={props.socialdata.twitterLogo} />
                </div>
                     
                </div>
                
                
            </div>
                
                <div className="twitter-koo-text">
                    {props.socialdata.tweetText}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default Tweet;