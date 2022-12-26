import React from "react";
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

export const Links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/products',
        text: 'products',
    },
    {
        id: 4,
        url: '/reviews',
        text: 'reviews',
    }
    // {
    //     id: 5,
    //     url: '/profile',
    //     text: 'profile',
    // }
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com/tttin23.9',
        icon: <FaFacebook/>,
    },
    {
        id: 2,
        url: 'https://www.linkedin.com/in/t%C3%ADn-tr%E1%BA%A7n-687257244/',
        icon: <FaLinkedin/>,
    },
    {
        id: 3,
        url: 'https://twitter.com/TTTin2309',
        icon: <FaTwitter/>,
    },
];