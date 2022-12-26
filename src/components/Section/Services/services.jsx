import React from 'react';
import { services } from './data';
import './services.css'

function Services() {
    return (
        <div className='Wrapper1'>
            <div className='section-center1 section-center'>
                <article className='header1'>
                    <h3 className='text-4xl font-bold'>
                        custom furrniture <br/> built only for you
                    </h3>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum debitis consectetur reprehenderit non aliquam voluptates
                        dolore aut vero consequuntur.
                    </p>
                </article>
                <div className='services-center1'>
                    {services.map((service) => {
                        const {id, icon, title, text} = service;
                        return (
                            <article className='service1' key={id}>
                                <span className='icon'>{icon}</span>
                                <h4 className='text-2xl font-bold'>{title}</h4>
                                <p className='text-base'>{text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;