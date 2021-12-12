
import { Container, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function News() {
    // Empty array in useState
   const [articles, setArticles] = useState([]);
 
      
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://newsapi.org/v2/everything?q=apple&from=2021-12-11&to=2021-12-11&sortBy=popularityhttps://newsapi.org/v2/everything?q=apple&from=2021-12-11&to=2021-12-11&sortBy=popularity&apiKey=0c71072a6c3a4878b1d35cc733032ade'
            //,
            // params: {lang: 'en', country: 'US'},
            // headers: {
            //   'x-rapidapi-host': 'https://newsapi.org',
            //   'x-rapidapi-key': '0c71072a6c3a4878b1d35cc733032ade'
            // }
          };
         
          axios.request(options)
           .then(function (response) {
            console.log(response.data)
            setArticles(response.data)
          }).catch(function (error) {
              console.error(error);
          });  
          
        console.log(articles);
        
    }, [articles])

    //convert the result Object to array 
    const result = Object.keys(articles).map((key) => articles[key]);
    console.log(result);

    return (
       <Container>
        <div>
        
            {result.map(item => 
               <>
                           <Card className="mt-2" style={{ width: 'auto' }}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2">{item.subtitle}</Card.Subtitle>
                <Card.Text>
                {item.content}
                </Card.Text>
                <Card.Link href="#">Published: {item.published} </Card.Link>
                <Card.Link href="#">Author: {item.author}</Card.Link>
            </Card.Body>
            </Card>
                </>
             )}
        
        </div>

   


        </Container>
    )
}

 