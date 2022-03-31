import React from "react";

function TweetWithImage(){
    const tweetURL = "https://twitter.com/myogioffice/status/1508004254518185988";
    const tweetText = "50 criminals surrender within 15 days of CM Shri @myogiadityanath Ji Maharaj storming back to power in UP.";
    const profilePic = "https://pbs.twimg.com/profile_images/1390221022662594563/4abPNc6m_400x400.jpg";
    const name= "Yogi Adityanath Office";
    const handle = "@myogioffice";



    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            tweetURL, "_blank");
    }


    return(
        <div className="twitterBox">
        
            
            <div onClick={handleClick} >
            <div className="twitterBioSection">
                <div className="twitterBioPic">
                    <img className="imgProfileTwitter" src={profilePic} />
                </div>
                <div className="twitterBioText">
                     {name} 
                     <br></br>
                     {handle} 
                </div>
                
            </div>
                
                <div className="twitterText">
                    {tweetText}
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetWithImage;