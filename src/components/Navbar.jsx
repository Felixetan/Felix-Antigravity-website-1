import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">Funnel<span className="logo-accent">Pro</span></div>
                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#work">Our Work</a>
                    <a href="#contact" className="nav-cta">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
