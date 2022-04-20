import React from "react";

function TweetWithVideo(){
    const tweetURL = "https://twitter.com/BesuraTaansane/status/1512769377900589061";
    const tweetText = "cant even say 'punarjanm' .... he is muttering 'purnjamm, purnjamm' with great difficulty";
    const profilePic = "https://pbs.twimg.com/profile_images/1390221022662594563/4abPNc6m_400x400.jpg";
    const name= "Yogi Adityanath Office";
    const handle = "@myogioffice";
    const twitterLogo = "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429.png";



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
                
                
                <img className="twitterLogoWithMedia" src={twitterLogo} />
            </div>
            
                
                <div className="twitterText">
                    {tweetText}
                </div>
                <div>
                    <img className="tweetImage" src="https://pbs.twimg.com/media/FO2B31NVkAImDvP?format=jpg"/>
                </div>
                   
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default TweetWithVideo;