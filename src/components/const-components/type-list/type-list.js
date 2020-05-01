// Dependencies
import React from 'react';

// Components 
import TypeListItem from '../type-list-item';

// Utils
import {urlGetter} from '../../../utils/url-getter';

// Styles
import './type-list.css';

// Actual Component
const TypeList = ( {dataTypeSelect} ) => {
    const topic = urlGetter();

    // Array of button titles and their states
    const btnArray = [
        {title: 'BOOKS', active: false},
        {title: 'GAMES', active: false},
        {title: 'MOVIES', active: false},
    ];

    // Managing btnArray, look for 'active' btn
    const item = btnArray.find(item => item.title.toLowerCase() === topic);
    let newArray = [];

    if (item) {
        const idx = btnArray.findIndex(item => item.title.toLowerCase() === topic);
        item.active = true;
        newArray = [
            ...btnArray.slice(0, idx),
            item,
            ...btnArray.slice(idx + 1),
        ]
    } else {
        newArray = btnArray;
    }

    // Returned 
    const elements = newArray.map( (item, idx) => {
        return <TypeListItem key={idx} item={item} dataTypeSelect={() => {dataTypeSelect(item.title.toLowerCase())}}/>
    })

    return (
        <ul className='type-list'>
            {elements}
        </ul>
    )
}

export default TypeList;