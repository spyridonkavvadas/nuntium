import React from 'react'
import {Container, Card } from 'react-bootstrap';

function Select() {


  return (
    <Container>
    
    <h4>Select News Parameters</h4>

    <Card style={{ width: 'auto' }}>
      <Card.Header>You have selected News from:</Card.Header>
        <Card.Body>
            
          <Card.Text>
            BBC, CNN, Al Jazeera, Economic, Technology, English, USA, UK
          </Card.Text>
          <button type="button" className="btn btn-dark">GO</button>

        </Card.Body>
    </Card>



    <Card style={{ width: 'auto' }}>
      <Card.Header>Select News Provider</Card.Header>
        <Card.Body>
          <button type="button" className="btn btn-primary">CNN</button>
          <button type="button" className="btn btn-secondary">BBC</button>
          <button type="button" className="btn btn-success">NBC</button>
          <button type="button" className="btn btn-info">CNBC</button>
          <button type="button" className="btn btn-warning">New Yourk Times</button>
          <button type="button" className="btn btn-danger">Al Jazeera</button>
          <button type="button" className="btn btn-light">The Times</button>
          <button type="button" className="btn btn-dark">DW</button>
          <button type="button" className="btn btn-link">Welt</button>
        </Card.Body>
    </Card>

    <Card style={{ width: 'auto' }}>
      <Card.Header>Select Category</Card.Header>
        <Card.Body>
          <button type="button" className="btn btn-primary">Headlines</button>
          <button type="button" className="btn btn-secondary">Politics</button>
          <button type="button" className="btn btn-success">International</button>
          <button type="button" className="btn btn-info">Economic</button>
          <button type="button" className="btn btn-warning">Religion</button>
          <button type="button" className="btn btn-danger">Technology</button>
          <button type="button" className="btn btn-light">Life Style</button>
          <button type="button" className="btn btn-dark">Defence</button>
          <button type="button" className="btn btn-link">Aviation</button>
        </Card.Body>
    </Card>

    <Card style={{ width: 'auto' }}>
      <Card.Header>Select Language</Card.Header>
        <Card.Body>
          <button type="button" className="btn btn-primary">Egnlish</button>
          <button type="button" className="btn btn-secondary">German</button>
          <button type="button" className="btn btn-success">French</button>
          <button type="button" className="btn btn-info">Arabic</button>
          <button type="button" className="btn btn-warning">Israeli</button>
          <button type="button" className="btn btn-danger">Russian</button>
          <button type="button" className="btn btn-light">Hindu</button>
          <button type="button" className="btn btn-dark">Italian</button>
          <button type="button" className="btn btn-link">Swedish</button>
        </Card.Body>
    </Card>


    <Card style={{ width: 'auto' }}>
      <Card.Header>Select Country</Card.Header>
        <Card.Body>
          <button type="button" className="btn btn-primary">USA</button>
          <button type="button" className="btn btn-secondary">UK</button>
          <button type="button" className="btn btn-primary">Germany</button>
          <button type="button" className="btn btn-secondary">France</button>
          <button type="button" className="btn btn-primary">Russia</button>
          <button type="button" className="btn btn-secondary">Italy</button>
          <button type="button" className="btn btn-primary">Spain</button>
          <button type="button" className="btn btn-dark">China</button>
          <button type="button" className="btn btn-primary">Japan</button>
        </Card.Body>
    </Card>

    </Container>
  )
}

export default Select