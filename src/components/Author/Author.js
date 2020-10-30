import React from 'react';
import './Author.css';

function Author(props){
    return(
        <div className="author">
            <h2>{props.authorName}</h2>
        </div>
    )
}

export default Author;