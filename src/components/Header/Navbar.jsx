import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Links, social } from './data';
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
        else{
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
                        <FaBars/>
                    </button>
                </div>
                <div className="links-container" ref={LinksContainerRef}>
                    <ul className='links' ref={LinksRef}>
                        {Links.map((link) => {
                            const {id, url, text} = link;
                            return (
                                <li key={id} className='text-xl'>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* <ul className="social-icons">
                    {social.map((socicalIcon) => {
                        const {id, url, icon} = socicalIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul> */}
            </div>
        </nav>
    );
}

export default Navbar;