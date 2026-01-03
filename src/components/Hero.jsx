import React, { useState, useEffect } from 'react';
import './Hero.css';

const ANIMATION_WORDS = [
    { text: "Loyal Customers", color: "#00A8E8" }, // Accent Blue
    { text: "Predictable Revenue", color: "#48CAE4" }, // Lighter Cyan
    { text: "High-Ticket Sales", color: "#ADE8F4" }  // Very light blue
    // Can add more shades of blue/cyan
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % ANIMATION_WORDS.length);
                setIsAnimating(false);
            }, 500); // Wait for exit animation
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const currentWord = ANIMATION_WORDS[index];

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">
                    Transform Your Traffic Into <br />
                    <span
                        className={`animated-word ${isAnimating ? 'fade-out' : 'fade-in'}`}
                        style={{ color: currentWord.color }}
                    >
                        {currentWord.text}
                    </span>
                </h1>
                <p className="hero-subhead">
                    We build high-converting sales funnels designed to scale your business
                    and automate your client acquisition.
                </p>
                <div className="hero-cta-group">
                    <button className="btn btn-primary">Start Your Funnel</button>
                    <button className="btn btn-secondary">View Case Studies</button>
                </div>
            </div>
            <div className="hero-background-glow"></div>
        </section>
    );
};

export default Hero;
