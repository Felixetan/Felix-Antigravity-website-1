import React from 'react';
import './Services.css';

const servicesData = [
    {
        title: "Strategy First",
        description: "We analyze your audience and competitors to build a roadmap for success before designing a single pixel.",
        icon: "🎯"
    },
    {
        title: "Premium Design",
        description: "Stunning, on-brand aesthetics that build trust and authority instantly.",
        icon: "💎"
    },
    {
        title: "Conversion Optimization",
        description: "Data-driven layouts and copy optimizations to maximize your ROI.",
        icon: "🚀"
    }
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <h2>Why Choose Us?</h2>
                <div className="services-grid">
                    {servicesData.map((service, idx) => (
                        <div className="service-card" key={idx}>
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
