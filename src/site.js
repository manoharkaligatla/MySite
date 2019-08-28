import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './styles/backdrop.css';

class Site extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
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
                    </div>
                </div>


                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Manohar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }
}
export default Site;