import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export function Header(props) {
    const navItems = props.navItems.map((value) => {
        return <li class="nav-item"><Link to={'/' + value[1]}>{value[0]}</Link></li>
    });
    return (
        <header class="header">
            <a href="/" class="title">{props.title}</a>
            <ul class="side-nav">
                {navItems}
            </ul>
        </header>
    );
}