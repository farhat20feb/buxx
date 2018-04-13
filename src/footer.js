import React,{Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, ControlLabel, InputGroup, Grid, Row, Jumbotron, Button, Col} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import Particles from 'react-particles-js';

class Footer extends Component{
    render(){
        return(
       <div className="footer-grid">
         <Grid>
       <Row className="show-grid">
       <Col sm={7} smOffset={2}>
       <code> <Jumbotron style={{borderRadius:'1em',position:'relative',bottom:'116px'}}>
        <h4 className="mapheading">Subscribe</h4>
        <p style={{color:'#9BA0A2',fontSize:'1.2em'}}>and stay updated on Australia Bitcoin news and discounts</p>
        <p><FormGroup controlId="formValidationSuccess3" validationState="success">
    
    <FormControl style={{border:'1px solid #e6dcdc',boxShadow:'1px 1px'}} type="text" placeholder="Enter your email address" />
    <FormControl.Feedback>
    <Button bsStyle="primary">Get start</Button>
    </FormControl.Feedback>
  </FormGroup></p>
       
        </Jumbotron>
        </code>
       </Col>
       
       </Row>
       </Grid>
      <Grid>
       <Row className="show-grid">
       
       <Navbar>
       <Col sm={6} smOffset={3} style={{marginTop:'-9em'}}>
       <code>
    <Nav className="navbar-bottom">
    <NavItem eventKey={1} href="#">
     About &nbsp;&nbsp; |
    </NavItem> 
    <NavItem eventKey={2} href="#">
    Terms of Service &nbsp;&nbsp; |
    </NavItem>
    <NavItem eventKey={2} href="#">
   Privacy
    </NavItem>
  </Nav>
  </code>
  </Col>
</Navbar>

</Row>
</Grid>

 <Grid>
       <Row className="show-grid">
        <code><Particles 
             canvasClassName="canvs-footer"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%'
              }}
            /></code>
       </Row>
       <Row className="show-grid">
       <Col sm={7} smOffset={4} style={{marginTop:'-9em'}}><Col sm={1} style={{marginTop:'1.1em'}}><code><img src={logo} width={59}/></code></Col> <Col sm={2}><code><h3 className="logo-title-bottom">BUXX</h3></code></Col>
       </Col>
       </Row>
       <Row className="show-grid">
       <code> <Col sm={6} smOffset={3} style={{marginTop:'-4em'}}><p style={{color:'#fff'}}>@2017 GLobal Internet Ventures.All rights reserved.</p></Col></code>
       </Row>
       </Grid>
        
       
           </div>
        );
    }
}

export default Footer;