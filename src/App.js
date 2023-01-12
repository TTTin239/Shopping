import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ListProduct from './pages/Products/ListProduct';
import HomePage from './pages/HomePage';
import Reviews from './pages/Reviews/index';
import SingleProduct from './pages/Products/SingleProduct';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
        <ScrollToTop />
        <Footer/>
      </Router>
    </main>
  );
}

export default App;