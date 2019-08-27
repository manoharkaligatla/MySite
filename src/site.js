import React from 'react';
import './styles/backdrop.css';

function Site() {
    return (
        < div className="header" >
            <img src={require('./images/backdrop.jpg')} alt="Header Backdrop" />
            <div className="transparent" > </div>
            <div className="header-content">
                <h1 className="logo">M</h1>
                <h1> Manohar Kaligatla </h1>
                <ul>
                    <li> <a href="#"> <i className="fa fa-facebook" > </i></a></li>
                    <li > < a href="#" > < i className="fa fa-google" > </i></a > </li>
                    <li > < a href="#" > < i className="fa fa-linkedin" > </i></a > </li>
                    <li > < a href="#" > < i className="fa fa-skype" > </i></a > </li>
                </ul>
            </div>
        </div>
    );
}

export default Site;