import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class Feature extends Component{
    render(){
        return(
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
       <Row className="show-grid" id="featuregrid">
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
        );
    }
}
export default Feature;