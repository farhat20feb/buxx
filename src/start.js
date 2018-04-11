import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import profile from './profile.png';
import wallet from './wallet.png';
import recipt from './recipt.png';
import './App.css';

class Start extends Component{

    render(){
        return(
        <div className="getstart">
        <br/><br/><br/><br/>
          <center><Button bsStyle="default" bsSize="large" className="startbutton">GETTING STARTED</Button></center>
       <Grid>
       <Row className="show-grid">
    <Col sm={3} smOffset={1}>
    <code><p className="startimg"><img src={profile} align="middle"/></p>
         <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600'}}>1. SIGN UP</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Create a digital currency wallet where you can securely store digital currency.</p>
     </code>
     </Col>
     <Col sm={3} smOffset={1}>
     <code><p className="startimg"><img src={wallet} align="middle"/></p>
     <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600'}}>2. CONNECT</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Connect your bank account,debit card, or credit card so that you can exchangedigita currency into and out of your locat currency .</p>
     </code>
     </Col>
     <Col sm={3} smOffset={1}>
     <code><p className="startimg"><img src={recipt} align="middle"/></p>
     <h4 style={{textAlign:'center',color:'#8B9093',fontWeight:'600'}}>3. START TRADING</h4>
     <p style={{textAlign:'center',color:'#BBBEC0',fontSize:'17px'}}>Buy or sell bitcoin to begin using the future.</p>
     </code>
     </Col>
     </Row>
         </Grid>  
        </div>
        );
    }
}
export default Start;