// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Actual Component
const TypeListItem = ( {item, dataTypeSelect} ) => {
    
    const className = 'type-list-link ';
    const selectedClassName = className + 'tll-selected';

    if (item.active) {
        return (
            <li className={selectedClassName} > 
                {item.title}
            </li>
        )
    }

    return (
        <li > 
            <Link to={`/${item.title.toLowerCase()}`} 
                    className={className}
                    onClick={dataTypeSelect}>{item.title}</Link> 
        </li>
    )
}

export default TypeListItem;