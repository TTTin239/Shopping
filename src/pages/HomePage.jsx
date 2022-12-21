import React from "react";
import Slider from '../components/slider/slider';
import Contact from '../components/Section/Contact/Contact';
import Services from '../components/Section/Services/services';
import Product from '../components/Section/Product/Product';

function HomePage() {
    return (
        <main>
            <Slider/>
            <Product/>
            <Services/>
            <Contact/>
        </main>
    );
}

export default HomePage;