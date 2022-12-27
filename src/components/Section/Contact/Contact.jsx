import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="Wrapper">
            <div className='section-center'>
                <h3 className='text-3xl font-bold'>Leave gmail to do survey and get 20% off</h3>
                <div className='content'>
                    <p className='text-lg text-black'>
                        Are you satisfied with your purchase? You can give us feedback to help us
                        develop better. Thanks!
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