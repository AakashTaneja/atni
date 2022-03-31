import React from "react";

function News(){
const newsURL = "https://www.indiatvnews.com/news/india/yogi-adityanath-takes-oath-for-second-term-up-bjp-bulldozer-baba-gorakhpur-gorakhnath-temple-hindutva-2022-03-25-765956";
const newsText = "  Yogi Adityanath: 'Bulldozer Baba’ comes back stronger Yogi Adityanath: 'Bulldozer Baba’ comes back stronger ";
const newsImage = "https://www.thehindu.com/incoming/69ks7e/article65261688.ece/alternates/FREE_1200/6607_25_3_2022_20_0_27_1_25_03_UPCMSWEARINGINCEREMONYLUCKNOW_A.JPG";

function handleClick(){
    //window.location.href = tweetURL;
    window.open( 
        newsURL, "_blank");
}

    return(
        <div onClick={handleClick} className="newsBox">

            <div className="newsLogoAndHeadline">
                <div>
                     <img className ="siteLogo" src="https://static.indiatvnews.com/ins-web/images/sitelogo.png"></img>
                </div>
                <div>
                    {newsText} 
                </div>
           
            
            </div>
            
    
            <div className="newsLogoDiv">
                <img className ="newsImage" src={newsImage}></img>
            </div>
            
            
           
           
            

        </div>

    );
}

export default News;