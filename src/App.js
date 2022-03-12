import React from 'react';
import './bootstrap.min.css';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      
      <Switch>
        
        <Route path="/">
            <News />
        </Route>

        <Route path="/about">
            <About />
        </Route>

      </Switch>

    </Router>
    </>
  );
}



export default App;
