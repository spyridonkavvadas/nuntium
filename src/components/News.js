import { Container, Row, Col,  Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function News() {
    // Empty array in useState
    //const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/news'
          };

          axios.request(options)
           .then(function (response) {
          // console.log(response.data)
            setArticles(response.data)
            setLoading(false);
          }).catch(function (error) {
              console.error(error);
          });


    }, [])

  
    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
       <Container>
      
            {articles.map((article, i) =>
               
               <>
                 <Card key={i} className="mt-2" style={{ width: 'auto' }}>

                    <Card.Body>


                        <Card.Title>{article.Title.replace(/[""]/, '')}</Card.Title>

                        <Card.Text> 
                        {
                        article.Description
                        }

                        {"  "} 
                        <Button value="Read More" size="sm"
                        href={article.ArticleLINK}
                        //target="_blank"
                        >Read More</Button>
                        </Card.Text>
                        
                       
                    </Card.Body>

                    <Card.Footer className="text-muted">
                    
                        <Container>
                            <Row>
                                <Col sm>
                                    Published: {article.PublishedDateUTC}
                                </Col>
                                <Col sm>
                                    Author: {article.Author}
                                </Col>
                                <Col sm>
                                    Publisher: {article.Publisher}
                                </Col>
                            </Row>
                        </Container>

                    </Card.Footer>
                   
                </Card>

                </>

             )}



        </Container>
    )
}
