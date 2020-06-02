import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    const navItems = props.navItems.map((value) => {
        return <Link to={value[1]}>{value[0]}</Link>
    });
    return (
        <footer class="footer-distributed">
		<div class="footer-left">
            <h3>{props.navTitle}</h3>
		    <p class="footer-nav">
                {navItems}
		    </p>
        </div>
		<div class="footer-center">
		    <div>
		        <i class="fa fa-map-marker"></i>
                <p>{props.author}</p>
		    </div>
		    <div>
		        <i class="fa fa-phone"></i>
		        <p>{props.email}</p>
		    </div>
		</div>
		<div class="footer-right">
		    <p class="footer-ucu">
	            {props.place}
		    </p>
		</div>
	</footer>
    );
}

export default Footer