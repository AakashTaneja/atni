import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Margin from "./Margin";

function About(){

    return(
        <div>
             <Container className="about" fluid="lg">
                    <Row>
                        <Col>
                        <h1>this is about us</h1>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                        <h1>sun loh bhai</h1>
                        </Col>
                    </Row>
                    
                </Container> 
                <Margin />
        </div>
    );
}

export default About;