import { useState, useEffect } from 'react';

export const navLinks = [
    {
        title: 'shop now',
        href: '/'
    },
    {
        title: 'my accout',
        href: '/login'
    },
    {
        title: 'contact us',
        href: '/contact'
    },
    {
        title: 'FAQS',
        href: '/faq'
    },
    {
        title: 'about us',
        href: '/about'
    },
];

// Function
export const getheight = () => {
    const [ height, setHeight ] = useState(0);
    const handleScroll = () => {
        setHeight(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return height
}