// Dependencies
import React from 'react';

// Stateless Components
import BookDescription from './book-description';
import GameDescription from './game-description';
import MovieDescription from './movie-description'

// Actual Stateful component
const DescriptionStateful = ({topic, data, id}) => {

    console.log(topic)
    if (topic === 'books') {
        return <BookDescription data={data} id={id}/>
    } else 
    if ( topic === 'games') {
        return <GameDescription data={data} id={id}/>
    } else
    if ( topic === 'movies') {
        return <MovieDescription data={data} id={id}/>
    }

    
}
export default DescriptionStateful;