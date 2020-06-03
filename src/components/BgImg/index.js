import React from 'react';
import './style.css';

export function BgImg(props) {
    const bgStyle = {
        color: 'blue',
        backgroundImage: 'url(' + props.imgUrl + ')',
    };
    return (
        <div class="bg-img" style={bgStyle}></div>
    );
}