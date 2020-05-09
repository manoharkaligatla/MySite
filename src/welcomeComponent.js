import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import HomeComponent from './homeComponent';

import './styles/backdrop.css';
import './styles/welcomeComponent.css';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                {/* <embed name="GoodEnough" src="./test.mp3" loop="false" hidden="true" autostart="true"></embed> */}
                <div className="header" >
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
                        <div className="clearfix"></div>
                        <Link to="/home" className="btn btn-warning enter-btn">
                            Enter Site
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default WelcomePage;