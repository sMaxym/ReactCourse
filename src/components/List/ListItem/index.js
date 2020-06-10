import React from 'react';
import './style.css';

import { RegBtnContainer } from './../../RegBtn';

export function ListItem(props) {
    const title = props.title;
    const desc = props.desc;
    return (
        <li class="list-block">
            <div class="title">{title}</div>
            <div class="description">{desc}</div>
            <RegBtnContainer class="more-btn" href={props.curUrl + '/' + title.replace(/\s/g, '')} type="important" value="more" />
        </li>
    );
}