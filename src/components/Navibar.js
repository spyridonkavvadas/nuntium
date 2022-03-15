import React from 'react';
import { Container } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default function Navibar() {

    return (
        <Container>
           <h1>MinimalNews</h1>
           <h3>A simple news aggregator</h3>

           <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">

              <div className="container-fluid">

              <a className="navbar-brand" href="#minimal-news">MinimalNews</a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navbarColor03">
                
              <ul className="navbar-nav me-auto">

                  
                  <li className="nav-item">
                  <a className="nav-link active" href="/">Home
                  <span className="visually-hidden">(current)</span>
                  </a>
                  </li>
                  
                  <li className="nav-item">
                  <a className="nav-link" href="/news">News</a>
                  </li>
                  
                  <li className="nav-item">
                  <a className="nav-link" href="/select">Select</a>
                  </li>
                  
                  <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                  </li>
                  
                </ul>

              </div>

              </div>

            </nav>


        </Container>

        
      
    )
}


