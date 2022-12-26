import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="Wrapper">
            <div className='section-center'>
                <h3 className='text-3xl font-bold'>Join our newsletter and get 20% off</h3>
                <div className='content'>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipiscing elit.
                       Placeat sint unde quaerat ratione solute veniam provident adipisci 
                       cumque eveniet tempore?
                    </p>
                    <form className='contact-form'>
                        <input
                            type='email'
                            className='form-input'
                            placeholder='Enter email'
                        />
                        <button type='submit' className='submit-btn'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;