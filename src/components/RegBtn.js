import React from 'react';
import {Link} from 'react-router-dom';

function RegBtn(props) {
    const btnType = props.type;
    let color = "#001f3f";
    if (btnType === "important") {
        color = "#85144b";
    }
    return (
    <Link style={{backgroundColor: color}} class="reg-btn" to={props.href}>{props.value}</Link>
    );
}

export default RegBtn