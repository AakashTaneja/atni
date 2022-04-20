import React from "react";
import newsdata from "../newsdata";
import HeadLine from "./HeadLine";
import {Container, Row, Col} from "react-bootstrap";
import SocialSlider from "./SocialSlider";
import Margin from "./Margin";

function Capsule(){
    return(
        
        <div>
           {newsdata.map(newsitem =>
           <div>
            <Container className="mastercarousel" fluid="lg">
                    <Row>
                        <Col>
                        <HeadLine headline={newsitem.headline}/>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <SocialSlider socaildata={newsitem.social}/>
                        </Col>
                    </Row>
                    
                </Container> 
                <Margin />
           </div>
           )};
           
          
        </div>

    );
}

export default Capsule;