import React from "react";
import Slider1 from '../components/slider/slider';
import Contact from '../components/Section/Contact/Contact';
import Services from '../components/Section/Services/services';
import Product from '../components/Section/Product/Product';

function HomePage() {
    return (
        <main>
            <Slider1/>
            <Product/>
            <Services/>
            <Contact/>
        </main>
    );
}

export default HomePage;