// Dependencies
import React from 'react';

// Styles
import './main-page.css';

// Actual Component
const MainPage = ( {render} ) => {
    return (
        <section className='main-page'>
            { render }
        </section>
    )

}

export default MainPage