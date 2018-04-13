import React,{ Component } from 'react';
import {Col, Grid, Row, Button, Jumbotron} from 'react-bootstrap';
import Icon from './icon.png'; 
import Mapimg from './map.png';
import './App.css';

class Map extends Component{
    render(){
        return(
      <div className="mapgrid">
            <Grid>
       <Row className="show-grid">
       <Col sm={5} smOffset={3}>
       <Jumbotron>
        <code><h4 className="mapheading">Already have a wallet?</h4>
        <p style={{color:'#9BA0A2',fontSize:'1.2em'}}>Get Started with Bitcoin now</p>
        <p><Button className="buycoin">Buy Coins</Button></p>
        </code>
        </Jumbotron>
       </Col>
       
       </Row>
       </Grid>
      
       <Grid>
       <Row className="show-grid mt-5">
       <Col sm={4} smPush={2}>
       <Jumbotron className="mappush">
        <code><p><img src={Icon}/></p>
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
        );
    }
}
export default Map;