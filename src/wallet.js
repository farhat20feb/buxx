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
          <center><Button bsStyle="default" bsSize="large" className="startbutton">NEW TO WALLETS?</Button></center>
       <Grid>
       <Row className="show-grid">
    <Col sm={4} smOffset={2}>
    <code> <Media><Media.Left align="middle"><img width={64} height={64} src={buy} class="pull-left"/></Media.Left>
    <Media.Body> <Media.Heading>BUY</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Buy Bitcoin quickly and easily using a debit card or bank account.</p>
     </Media.Body>
      </Media>
     </code>
     </Col>
     <Col sm={4} smOffset={2}>
     <code><Media><Media.Left align="middle"><img width={64} height={64} src={send} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading>SEND</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Send money,shop and play games online with just a few clicks .</p>
     </Media.Body>
     </Media>
     </code>
     </Col>
     </Row>
     <br/><br/><br/>
     <Row className="show-grid">
     <Col sm={4} smOffset={2}>
     <code><Media><Media.Left align="middle"><img width={64} height={64} src={store} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading>STORE</Media.Heading>
     <p style={{textAlign:'left',color:'#BBBEC0',fontSize:'14px'}}>Store your bitcoins with the confidence that your money is accesile to you.</p>
     </Media.Body>
      </Media>
     </code>
     </Col>
     <Col sm={4} smOffset={2}>
     <code><Media><Media.Left align="middle"><img width={64} height={64} src={recieve} class="pull-left"/></Media.Left>
     <Media.Body> <Media.Heading>RECEIVE</Media.Heading>
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