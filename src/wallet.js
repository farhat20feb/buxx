import React, { Component } from 'react';
import {Grid, Row, Col, Button, Media} from 'react-bootstrap';
import store from './store.png';
import send from './sendfund.png';
import buy from './buy.png';
import recieve from './recieve.png';
import './App.css';

class Wallet extends Component{

    render(){
        return(
        <div className="wallet">
        <br/><br/><br/><br/>
        <center><p className="startbutton"><h4 className="gradianr-title">New TO Wallet?</h4></p></center>
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
        </div>
        );
    }
}
export default Wallet;