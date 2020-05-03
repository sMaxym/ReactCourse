import React from 'react';

function RegBtn(props) {
    const btnType = props.type;
    let color = "#27ae60";
    if (btnType === "important") {
        color = "red";
    }
    return (
    <a style={{backgroundColor: color}} class="reg-btn" href={props.href}>{props.value}</a>
    );
}

export default RegBtn