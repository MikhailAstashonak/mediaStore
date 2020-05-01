// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './unusual-section.css';

// Actual Component
const UnusualSection = ( {item, idx, topic, parameter} ) => {
    return (
        <section className='unusual-section'>
            <h2> 
                {parameter === 'bestseller' ? 
                    `Bestseller in ${topic}` :
                    `The most liked ${topic.slice(0, -1)}`}
            </h2>
            <div className='us-card'>
                <img src={item.pictureUrl} alt={item.title} />
                <Link to={`/${topic}/${idx}`} className='us-link'> {item.title} </Link> 
            </div>
        </section>
    )
}

export default UnusualSection;