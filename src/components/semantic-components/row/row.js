// Dependencies
import React from 'react';

// Styles
import './row.css'

// Actual Component
const Row = ( {left, center, right} ) => {
    return (
        <main className='row-main'>
            { left }
            { center }
            { right }
        </main>
    )
}

export default Row;