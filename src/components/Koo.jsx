import React from "react";

function Koo(props){
    function handleClick(){
        //window.location.href = tweetURL;
        window.open( 
            props.socialdata.kooURL, "_blank");
    }

    return(
        <div className="twitter-koo-box koo-box" onClick={handleClick}>
            <div className="twitter-koo-biosection">
                <div className="twitter-koo-biopic">
                    <img className="twitter-koo-img-profile" src={props.socialdata.profilePic} />
                </div>
                <div className="twitter-koo-biotext">
                {props.socialdata.name} 
                     <br></br>
                     {props.socialdata.handle} 
                </div>
                <div>
                    <img className="twitter-koo-logo" src={props.socialdata.kooLogo} />
                </div>

            </div>
            <div className="twitter-koo-text">
                    {props.socialdata.kooText}
                </div>
        

        </div>

    );
}

export default Koo;

