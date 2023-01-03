import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ListProduct from './pages/Products/ListProduct';
import HomePage from './pages/HomePage';
import Reviews from './pages/Reviews/index';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;