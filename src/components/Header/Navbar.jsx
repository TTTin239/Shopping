import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Links } from './data';
import Cart from './CartButton';
import Logo1 from './Logo1.png';
import './Navbar.css'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const LinksContainerRef = useRef(null);
    const LinksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const LinksHeight = LinksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            LinksContainerRef.current.style.height = `${LinksHeight}px`;
        }
        else {
            LinksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={Logo1} className="logo" alt="Logo" />
                    </Link>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        {showLinks ? <FaTimes/> : <FaBars/>}
                    </button>
                </div>
                <div className="links-container" ref={LinksContainerRef}>
                    <ul className='links' ref={LinksRef}>
                        {Links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} className='text-xl'>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                        <div className='cart2'>
                            <Cart/>
                        </div>
                    </ul>
                </div>
                <div className='cart1'>
                    <Cart />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;