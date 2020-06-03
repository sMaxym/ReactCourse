import React from 'react';
import './style.css';

import { ListItem } from './ListItem';

export function List(props) {
    const listData = props.items;
    const listItems = listData.map((value) => {
        return <ListItem title={value.name} desc={value.year} curUrl={props.curUrl}></ListItem>;
    });
    return (
        <ul class="block-list">{listItems}</ul>
    );
}