import React from 'react';
import './style.css';

import { BgImg } from './../BgImg';
import { RegBtnContainer } from './../RegBtn';

export function Topic(props) {
    const title = props.title;
    const text = props.text;
    return (
        <div>
            <h1>{title}</h1>
            <BgImg imgUrl={props.imgUrl} />
            <br />
            <RegBtnContainer href="/map" type="important" value="Map of computing" />
            <p>{text}</p>
        </div>
    );
}