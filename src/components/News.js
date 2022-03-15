import { Container, Row, Col,  Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function News() {
    // Empty array in useState
    //const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //const API_KEY = '0c71072a6c3a4878b1d35cc733032ade';
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/news'
            // ,
            // params: {access_key: 'bc9a37a661bd0084e1af273d5c732ef3', languages: 'en', countries: 'us', limit: '30'}
            // ,
            // headers: {
            //   'x-rapidapi-host': 'google-news.p.rapidapi.com',
            //   'x-rapidapi-key': '4b9c29964amshe4bdc3028b52ceap19c2dbjsn674d54c53ed5'
            // }
          };


          axios.request(options)
           .then(function (response) {
          // console.log(response.data)
            setArticles(response.data)
            setLoading(false);
          }).catch(function (error) {
              console.error(error);
          });

        //console.log(articles);

    }, [])

  
    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
   

    //convert the result Object to array
    //const result = Object.keys(articles).map((key) => articles[key]);

    //console.log(result);
    //console.log(articles);
    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

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
