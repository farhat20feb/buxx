import React, { Component } from 'react';
import Particles from 'react-particles-js';
import wallet from './wallet.png';
import profile from './profile.png';
import recipt from './recipt.png';
import './App.css';
import Icon from './icon.png'; 
import Mapimg from './map.png';
import store from './store.png';
import send from './sendfund.png';
import buy from './buy.png';
import recieve from './recieve.png';
import logo from './logo.png';
import {FormGroup, FormControl,Navbar, Nav, NavItem, NavDropdown, MenuItem, ControlLabel, InputGroup, Button, Grid, Row, Col, Glyphicon,Media, Jumbotron} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {  
    return ( 
       <div className="banner"> 
       <Grid>
       <Row className="show-grid">
       <Col sm={6} smOffset={3}>
       <code>
       <center> <h1 className="text-center banner-heading">Buy and sell Bitcoins</h1>
       <p className="text-center banner-subheading">Join the financial revolution in Australia</p>
       </center>
       </code>
       </Col>
       </Row>
       </Grid>

       <Grid>
       <Row className="show-grid">
       <Col sm={4} smOffset={4}>
       <code> 
       <FormGroup controlId="formValidationSuccess3" validationState="success">
       <FormControl type="text" placeholder="Enter your email address" />
       <FormControl.Feedback>
       <Button bsStyle="primary">Get started</Button>
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
     <div className="feature">
     <Grid>
     <Row className="show-grid">
     <Col xs={6} xsOffset={3}>
     <h3 className="featuretitle">Lorem lpsum dolor</h3>
     <p style={{textAlign:'-webkit-center',color:'#AEB2B4',fontSize:'1.2em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     </Col>
     </Row>
     </Grid>
     <Grid>
     <br/><br/><br/>
     <Row className="show-grid featuregrid">
     <Col sm={4}>
     <code><p className="three-feature">$37B+</p> 
     <h4 style={{color:'#959A9C'}}>TRANSFERED IN LAST 24H</h4></code>
     </Col>
     <Col sm={4}>
     <code><p className="three-feature">$1.16M+</p> 
     <h4 style={{color:'#959A9C'}}>TRANSFERED IN LAST HOUR</h4></code>
     </Col>
     <Col sm={4}>
     <code> <p className="three-feature">$1M+</p> 
     <h4 style={{color:'#959A9C'}}>CUSTOMERS SERVED</h4></code>
     </Col>
     </Row>
     </Grid>
     </div>  
     <div className="getstart">
     <br/><br/><br/><br/>
     <center><p className="startbutton"><h4 className="gradianr-title">GETTING STARTED</h4></p></center>
     <Grid>
     <Row className="show-grid">
     <Col sm={3} smOffset={1}>
     <code>
     <p className="startimg"><img src={profile} width={64} align="middle"/></p>
     <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600',marginTop:'3em'}}>1. SIGN UP</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Create a digital currency wallet where you can securely store digital currency.</p>
     </code>
     </Col>
     <Col sm={3} smOffset={1}>
     <code><p className="startimg"><img src={wallet} width={64} align="middle"/></p>
     <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600',marginTop:'3em'}}>2. CONNECT</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Connect your bank account,debit card, or credit card so that you can exchangedigita currency into and out of your locat currency .</p>
     </code>
     </Col>
     <Col sm={3} smOffset={1}>
     <code><p className="startimg"><img src={recipt} width={64} align="middle"/></p>
     <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600',marginTop:'3em'}}>3. START TRADING</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Buy or sell bitcoin to begin using the future.</p>
     </code>
     </Col>
     </Row>
     </Grid>  
     </div>
     <div className="wallet">
     <br/><br/><br/><br/>
     <center><p className="startbutton"><h4 className="gradianr-title">New to Wallet?</h4></p></center>
     <Grid>
     <Row className="show-grid">
     <Col sm={3} smOffset={1}>
     <code> <Media><Media.Left align="middle"><img width={50} height={50} src={buy} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading style={{color:'#8B9093'}}>BUY</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Buy Bitcoin quickly and easily using a debit card or bank account.</p>
     </Media.Body>
     </Media>
     </code>
     </Col>
     <Col sm={3} smOffset={3}>
     <code><Media><Media.Left align="middle"><img width={50} height={50} src={send} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading style={{color:'#8B9093'}}>SEND</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Send money,shop and play games online with just a few clicks .</p>
     </Media.Body>
     </Media>
     </code>
     </Col>
     </Row>
     <br/><br/><br/>
     <Row className="show-grid">
     <Col sm={3} smOffset={1}>
     <code><Media><Media.Left align="middle"><img width={50} height={50} src={store} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading style={{color:'#8B9093'}}>STORE</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Store your bitcoins with the confidence that your money is accesile to you.</p>
     </Media.Body>
     </Media>
     </code>
     </Col>
     <Col sm={3} smOffset={3}>
     <code><Media><Media.Left align="middle"><img width={50} height={50} src={recieve} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading style={{color:'#8B9093'}}>RECEIVE</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Recieve funds in seconds and request bitcoins from email address.</p>
     </Media.Body>
     </Media>
     </code>
     </Col>
     </Row>
     </Grid> 
     <br/><br/><br/>
     <Grid>
     <Row className="show-grid">
     <Col sm={5} smOffset={3}>
     <Jumbotron>
     <code>
     <h4 className="mapheading">Already have a wallet?</h4>
     <p style={{color:'#9BA0A2',fontSize:'1.2em'}}>Get Started with Bitcoin now</p>
     <p><Button className="buycoin">Buy Coins</Button></p>
     </code>
     </Jumbotron>
     </Col>
     </Row>
     </Grid> 
     </div>

     <div className="mapgrid">
     <Grid>
     <Row className="show-grid mt-5" style={{bottom:'18em',position:'relative' }}>
     <Col sm={4} smPush={2}>
     <Jumbotron className="mappush">
     <code>
     <p><img src={Icon}/></p>
     <p style={{color:'#9BA0A2',fontSize:'1.2em'}}>You can buy bitcoins from over 1200 locations Australia wide.</p>
     <p><Button className="buycoin">Find out more</Button></p>
     </code>
     </Jumbotron>
     </Col>
     <Col sm={8}>
     <code>
     <p><img src={Mapimg} style={{width:'100%'}} height={550}/></p>
     </code>
     </Col>
     </Row>
     </Grid>
     </div>
     <div className="footer-grid">
     <Grid>
     <Row className="show-grid">
     <Col sm={6} smOffset={3}>
     <code> 
     <Jumbotron style={{borderRadius:'1em',position:'relative',bottom:'125px'}}>
     <h4 className="mapheading">Subscribe</h4>
     <p style={{color:'#9BA0A2',fontSize:'1.2em'}}>and stay updated on Australia Bitcoin news and discounts</p>
     <p>
        <FormGroup controlId="formValidationSuccess3" validationState="success">
            
          <FormControl style={{border:'1px solid #e6dcdc',boxShadow:'1px 1px 1px #cccccc'}} type="text" placeholder="Enter your email address" />
            <FormControl.Feedback>
            <Button bsStyle="primary">Get start</Button>
          </FormControl.Feedback>
        </FormGroup>
    </p>
    </Jumbotron>
    </code>
    </Col>
    </Row>
    </Grid>
    <Grid>
    <Row className="show-grid">
    </Row>
    </Grid>

    <Grid style={{position:'absolute',height:'110px'}}>
    <Row className="show-grid">
    <code>
    <Particles 
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
     />
     </code>
     </Row>
     </Grid>
     <Grid>
     <Row className="show-grid">
     <Col sm={7} smOffset={5}><Col sm={1}><code><img src={logo} width={59} style={{marginTop:'18px'}}/></code></Col> <Col sm={2}><code><h3 className="logo-title-bottom">BUXX</h3></code></Col>
     </Col>
     </Row>
     <Row className="show-grid">
     <code> 
     <Col sm={6} smOffset={4}><p style={{color:'#fff',marginLeft:'25px'}}>@2017 GLobal Internet Ventures.All rights reserved.</p></Col></code>
     </Row>
     </Grid>
     </div>
     </div>
    );
  }
}

export default App;
