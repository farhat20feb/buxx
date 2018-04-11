import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './App.css';

class Header extends Component{
  render(){
      return(
        <div >
        <Navbar>
        <Navbar.Header>
    <Navbar.Brand>
      <a href="#home" className="logo-title">BUXX</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Sell Bitcoins
    </NavItem>
    <NavItem eventKey={2} href="#">
    Buy Bitcoins
    </NavItem>
    <NavItem eventKey={2} href="#">
    Help
    </NavItem>
    <NavItem eventKey={2} href="#">
    Sign in
    </NavItem>
    <NavItem eventKey={2} href="#">
    Sign Up
    </NavItem>
  </Nav>
</Navbar>
        </div>
      );
  }

}

export default Header;