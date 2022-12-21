import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
// import Slider from './components/slider/slider';
// import Contact from './components/Section/Contact/Contact';
// import Services from './components/Section/Services/services';
// import Product from './components/Section/Product/Product';
import About from './pages/About/About';
import HomePage from './pages/HomePage';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        {/* <Slider/>
        <Product/>
        <Services/>
        <Contact/> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;