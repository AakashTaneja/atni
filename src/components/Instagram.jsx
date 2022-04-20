import React from "react";

function Instagram(){
    const instaImageURL = "https://www.instagram.com/p/Cb7Q1VELBZW/media/?size=m";
    const instaPostURL = "https://www.instagram.com/p/Cb7Q1VELBZW/";

    const instaImage = "https://instagram.fblr1-4.fna.fbcdn.net/v/t51.2885-15/277792623_4910750472307424_5155540565999883697_n.webp?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fblr1-4.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oO3Z3QYeRr4AX_6nqjZ&edm=AGenrX8BAAAA&ccb=7-4&oh=00_AT8jkVOGbJjgs-S7fjP5Ng8Nk6QOEvR1EpsziCWJGWB3jA&oe=625288FF&_nc_sid=5eceaa";
    



    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            instaPostURL, "_blank");
    }


    return(
        <div className="" onClick={handleClick}>
        
            
            <div className="">

                <img className="instaImage" src={instaImageURL} ></img>

                
                
            </div>
            
                
                
            
            
        </div>
        
    );
}

export default Instagram;