import React from "react";
// import newsdata from "../newsdata";
// import newsdataJSON from "../newsdataJSON";
//import resultsFromDB from "../Database";
import HeadLine from "./HeadLine";
import {Container, Row, Col} from "react-bootstrap";
import SocialSlider from "./SocialSlider";
import Margin from "./Margin";
// var newsDataFromDB = [{}];

// async function fetchNewsDB(){
//     const res = await fetch('http://localhost:3001/api/news',{
//         method: 'GET',
//     });
//     newsDataFromDB = await res.json();
//     console.log(newsDataFromDB); 
// }
// fetchNewsDB();


function Capsule(){
    const [newsDataFromDB, setnewsDataFromDB] = React.useState(null);
    React.useEffect(() => {
        fetch('http://localhost:3001/api/news')
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            setnewsDataFromDB(data);
        })
    }, []);
    
    
    return(
        
        <div>
           {newsDataFromDB && newsDataFromDB.map(newsitem =>
           
           <div>
            {alert(JSON.stringify(newsitem.headline))}
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
           )}
           
          
        </div>

    );
}

export default Capsule;