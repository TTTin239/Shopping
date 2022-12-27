import React from 'react';
import { services } from './data';
import './services.css'

function Services() {
    return (
        <div className='Wrapper1'>
            <div className='section-center1 section-center'>
                <article className='header1'>
                    <h3 className='text-4xl font-bold'>
                        Gucci fashion <br/> built only for you
                    </h3>
                    <p className='text-lg'>
                        Gucci itself is a fashion company, constantly evolving 
                        to keep up with fashion trends to bring users the best products.
                    </p>
                </article>
                <div className='services-center1'>
                    {services.map((service) => {
                        const {id, icon, title, text} = service;
                        return (
                            <article className='service1' key={id}>
                                <span className='icon'>{icon}</span>
                                <h4 className='text-2xl font-bold'>{title}</h4>
                                <p className='text-base text-justify'>{text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;