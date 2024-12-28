// TestimonialSection.jsx
import React from 'react';
import OneTestimonial from './OneTestimonial';
import testimonials from '../../data/test/testimonial.js';
import './testimonial.scss';

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-heading">TESTIMONIAL</h2>
            <div className="carousel">
                <div className="carousel-track">
                    {testimonials.concat(testimonials).map((testimonial, index) => (
                        <OneTestimonial 
                            key={index} 
                            text={testimonial.text} 
                            author={testimonial.author} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
