// Dependencies
import React from 'react';

// Styles 
import './description.css';

// Containers
import BuyButton from '../../containers/buy-btn-container';

// Actual Stateless
const BookDescription = ( {data, id} ) => {
    return (
        <section className='description'>
            <h2> {data.title} </h2>
            <div className='book-info'>
                <img src={data.pictureUrl} alt={data.title}/>
                <div className='book-text-info'>
                    <div className='description-params' >
                        <div>
                            <p className='author'> <span className='topic'> Author: </span> {data.author}</p>
                            <p className='price'> <span className='topic'> Price: </span> ${data.price}</p>
                            <p className='liked'> <span className='topic'> Likes: </span>{data.liked} </p>
                        </div>
                        { data.bestseller === true ? <p className='bestseller'>Bestseller</p> : null }
                    </div>
                    <p className='item-description'>
                        {data.description}
                    </p>
                    <BuyButton item={data}  idx={id} topic={'books'}/>
                </div>
            </div>
        </section>
    )
}

export default BookDescription;