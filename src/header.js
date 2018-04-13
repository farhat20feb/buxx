import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Grid, Row, Col} from 'react-bootstrap';
import logo from './logo.png';
import './App.css';

class Header extends Component{
  render(){
      return(
        <div>
          <Grid>
       <Row className="show-grid">
        <Navbar>
        <Col sm={5}>
        <Navbar.Header>
    <Navbar.Brand>
    <Col sm={3}><img src={logo} width={60} style={{marginTop:'-11px'}}/></Col>  <Col sm={2} smOffset={1} ><a href="#home" className="logo-title">BUXX</a></Col>
    </Navbar.Brand>
   
  </Navbar.Header>
  </Col>
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
</Row>
</Grid>
        </div>
      );
  }

}

export default Header;