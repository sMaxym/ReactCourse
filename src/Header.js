import React from 'react';

function Header(props) {
    const navItems = props.navItems.map((value) => {
        return <li class="nav-item"><a href="/">{value}</a></li>
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

export default Header