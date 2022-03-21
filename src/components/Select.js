import React from 'react'
import {Container, Card } from 'react-bootstrap';
//import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Select() {

// Variables
const [NewsProviders, setNewsProviders] = useState([]);
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

      // const {_id, Title, ArticleLINK, PublishedDateUTC, Publisher, Country,Category, Language, Description, ImageURL} = 
     axios.request(options)
       .then(function (response) {

      // console.log(response.data)
        setNewsProviders(response.data)
        setLoading(false);
      }).catch(function (error) {
          console.error(error);
      });

    // console.log(Publisher);
    // console.log(Title);

}, [])


if (isLoading) {
    return <div className="App">Loading...</div>;
  }

// Filter out double values from the array of object properties
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const uniquePublishers = getUniqueListBy(NewsProviders, 'Publisher')
    const uniqueCategory = getUniqueListBy(NewsProviders, 'Category')
    const uniqueLanguage = getUniqueListBy(NewsProviders, 'Language')
    const uniqueCountry = getUniqueListBy(NewsProviders, 'Country')


  return (
    <Container>
    

    <h4>Select News Parameters</h4>


    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">You have selected News from:</Card.Header>
        <Card.Body>

       {/* <Carousel control='false'>

        <Carousel.Item interval={2000}>
          <span class="badge bg-primary">BBC</span>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <span class="badge bg-secondary">CNN</span>
        </Carousel.Item>


        <Carousel.Item>
          <span class="badge bg-success">Al Jazeera</span>
        </Carousel.Item>

        <Carousel.Item>
        <span class="badge bg-danger">Economic</span>
        </Carousel.Item>

        <Carousel.Item>
        <span class="badge bg-warning">Technology</span>
        </Carousel.Item>

        <Carousel.Item>
          <span class="badge bg-info">English</span>
        </Carousel.Item>

        <Carousel.Item>
          <span class="badge bg-light">USA</span>
        </Carousel.Item>

        <Carousel.Item>
          <span class="badge bg-dark">UK</span>
        </Carousel.Item>

      </Carousel> */}
        <div>News Providers: 
          <span class="badge bg-primary">BBC</span>
          <span class="badge bg-secondary">CNN</span>
          <span class="badge bg-success">Al Jazeera</span>
        </div>

        <div>Category: 
          <span class="badge bg-danger">Economic</span>
          <span class="badge bg-warning">Technology</span>
        </div>

        <div>Language: 
          <span class="badge bg-warning">English</span>
          <span class="badge bg-secondary">German</span>
        </div>

        <div>Country: 
          <span class="badge bg-success">United States Of America</span>
          <span class="badge bg-secondary">Germany</span>
        </div>

          <div>
            <button type="button" className="btn btn-dark">GO</button>
          </div>

        </Card.Body>
    </Card>





    {/* Select News Provider */}
    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select News Provider</Card.Header>
        <Card.Body>
      
        {uniquePublishers.map((uniqueProvider, i) =>
          
          <>
             <button type="button" className="btn btn-primary " value={uniqueProvider.Publisher} onClick={() => console.log(uniqueProvider.Publisher)}> {uniqueProvider.Publisher} </button>
          </>
               
        )}
        
        </Card.Body>
    </Card>


   {/* Select News Category */}
    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select Category</Card.Header>
        <Card.Body>

          {uniqueCategory.map((uniqueCat, i) =>
          <>
             <button type="button" className="btn btn-primary"> {uniqueCat.Category} </button>
          </>
               
        )}

        </Card.Body>
    </Card>


   {/* Select News Language */}

    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select Language</Card.Header>
        <Card.Body>
        
        {uniqueLanguage.map((uniqueLang, i) =>
          <>
             <button type="button" className="btn btn-primary"> {uniqueLang.Language} </button>
          </>

        )}

        </Card.Body>
    </Card>


    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select Country</Card.Header>
        <Card.Body>
 
        {uniqueCountry.map((uniqueCount, i) =>
          <>
             <button type="button" className="btn btn-primary"> {uniqueCount.Country} </button>
          </>

        )}

        </Card.Body>
    </Card>

    </Container>
  )
}

