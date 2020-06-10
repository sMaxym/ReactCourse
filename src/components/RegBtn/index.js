import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return state;
};  

export const RegBtnContainer = connect(mapStateToProps)(RegBtn);