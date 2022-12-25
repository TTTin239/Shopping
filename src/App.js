import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ListProduct from './pages/ListProduct';
import HomePage from './pages/HomePage';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ListProduct />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;