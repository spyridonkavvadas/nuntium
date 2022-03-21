import React from 'react'
import {Container, Card, Row, Col } from 'react-bootstrap';
//import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Select() {

// Variables
const [NewsProviders, setNewsProviders] = useState([]);
const [isLoading, setLoading] = useState(true);
const [SelectedProviders, setSelectedProviders] = useState([]);
const [SelectedCategories, setSelectedCategories] = useState([]);
const [SelectedLanguages, setSelectedLanguages] = useState([]);
const [SelectedCountries, setSelectedCountries] = useState([]);


useEffect(() => {

  const options = {
        method: 'GET',
        url: 'http://localhost:5000/news'
      };

     axios.request(options)
       .then(function (response) {

      // console.log(response.data)
        setNewsProviders(response.data)
        setLoading(false);
      }).catch(function (error) {
          console.error(error);
      });

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
 
    {/* You have selected News from: */}
    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">You have selected News from:</Card.Header>
        <Card.Body>
         <Container>

            <Row>
              <Col sm={3}><h6>News Providers:</h6>  </Col>
              
              <Col sm={9}>
                  {SelectedProviders.map((selectedProvider, i ) =>         
                  <span class="badge bg-info m-1" key={i}>{selectedProvider}</span>
                  )} 
              </Col>
            </Row>

            <Row>
              <Col sm={3}><h6>Category: </h6>  </Col>
              
              <Col sm={9}>
              {SelectedCategories.map((selectedCategory, i ) =>         
              <span class="badge bg-warning m-1" key={i}>{selectedCategory}</span>
              )}
              </Col>
            </Row>

            <Row>
              <Col sm={3}><h6>Language: </h6>  </Col>
              
              <Col sm={9}>
                {SelectedLanguages.map((selectedLanguage, i ) =>         
                <span class="badge bg-secondary m-1" key={i}>{selectedLanguage}</span>
                )}
              </Col>
            </Row>

            <Row>
              <Col sm={3}><h6>Country: </h6>  </Col>
              
              <Col sm={9}>
                {SelectedCountries.map((selectedCountry, i ) =>         
                <span class="badge bg-danger m-1" key={i}>{selectedCountry}</span>
                )}
              </Col>
            </Row>

            <Row>
              
              <Col sm={12}>
                <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-success">SEE THE NEWS</button>
              </div>
              </Col>
            </Row>

              </Container>      
        </Card.Body>
    </Card>

    <h6>Push any button bellow to select news properties</h6>

    {/* Select News Provider */}
    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select News Provider</Card.Header>
        <Card.Body>
      
        {uniquePublishers.map((uniqueProvider, i) =>
          
          <>
             <button type="button" className="btn btn-primary btn-sm m-1" value="Add" onClick=
              {() => {
                setSelectedProviders([...SelectedProviders, uniqueProvider.Publisher]);  }
                }> {uniqueProvider.Publisher} 
              </button>
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
             <button type="button" className="btn btn-primary btn-sm m-1" value="Add" onClick=
              {() => {
                setSelectedCategories([...SelectedCategories, uniqueCat.Category]);  }
                }> {uniqueCat.Category} 
              </button>
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
             <button type="button" className="btn btn-primary btn-sm m-1" value="Add" onClick=
              {() => {
                setSelectedLanguages([...SelectedLanguages, uniqueLang.Language]);  }
                }> {uniqueLang.Language} 
              </button>
          </>

        )}

        </Card.Body>
    </Card>

    <Card style={{ width: 'auto' }}>
      <Card.Header className="text-warning">Select Country</Card.Header>
        <Card.Body>
 
        {uniqueCountry.map((unqCountry, i) =>
          <>

             <button type="button" className="btn btn-primary btn-sm m-1" value="Add" onClick=
              {() => {
                setSelectedCountries([...SelectedCountries, unqCountry.Country]);  }
                }> {unqCountry.Country} 
              </button>

          </>

        )}

        </Card.Body>
    </Card>

    </Container>
  )
}

