import React from 'react';
//import './bootstrap.min.css';
import Navibar from './components/Navibar';
import Home from './components/Home';
import News from './components/News';
import Select from './components/Select';
import About from './components/About';

import './bootstrap.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <main>
     <Navibar />
     <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/select' element={<Select />} />
        <Route exact path='/about' element={<About />} />

     </Routes>

   </main>

  );
}


export default App;
