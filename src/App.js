import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CakeShop from './components/CakeShop';
import Cakes from './components/Cakes';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<CakeShop/>} />       
          <Route path="/cakeshop" element={<CakeShop />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            
        </Routes>
      </div>
    </Router>
  );
};

export default App;
