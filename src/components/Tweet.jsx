import React from "react";

function Tweet(){
    const tweetURL = "https://twitter.com/msisodia/status/1501960676939825153";
    const tweetText = "The election results in Punjab have a clear message - The politics of our country is moving away from divide and rule to provide and rule. Congratulations India.";
    const profilePic = "https://pbs.twimg.com/profile_images/1507737772529897476/qE4BNcjH_400x400.jpg";
    const name= "Manish Sisodia";
    const handle = "@msisiia";



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

export default Tweet;