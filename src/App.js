import React, { Component } from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Header from './header';
import Feature from './feature';
import Start from './start';
import Wallet from './wallet';
import {FormGroup, FormControl, ControlLabel, InputGroup, Button, Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="banner">
       <Header />
       <Grid>
       <Row className="show-grid">
       <Col sm={4} smOffset={4}>
       <code><center> <h1 className="text-center banner-heading">Buy and sell Bitcoins</h1>
       <p className="text-center banner-subheading">Join the financial revolution in Australia</p>
       </center></code>
       </Col>
       </Row>
       </Grid>
       <Grid>
       <Row className="show-grid">
    <Col sm={4} smOffset={4}>
     
    <code><FormGroup controlId="formValidationSuccess3" validationState="success">
    
    <FormControl type="text" placeholder="Enter your email address" />
    <FormControl.Feedback>
    <Button bsStyle="primary">Get start</Button>
    </FormControl.Feedback>
  </FormGroup>
 </code>
    </Col>
  </Row>
  </Grid>
      <p className="text-center" style={{color:'#fff'}}>New to bitcoin?</p>
        
      <Particles 
             canvasClassName="canvs"
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
            />
         <Feature />
         
         <Start />

          <Wallet />
      </div>
    );
  }
}

export default App;
