import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FloorPlans.css';

const FloorPlans = () => {
    return (
        <>
        <Container>
        <Row>
        <div class="floor">
        <Col>
        
        <div className="col-lg-12 half floor1">
        <img src="https://www.bdhousing.com/api/list/listings/100X100/233734/82928f437fe068593210f87173183463.jpg" alt="" />
       
        </div>
       </Col>
       <Col>
       <div className="col-lg-12 half">
        <h2 className='floor_title'>Property Information</h2>
            <p className='floor_text'> A floor plan is a planning tool that interior designers, pro builders, and real estate agents use when they are looking to design or sell a new home or property. Floor plans help you envision a space and how it will look when construction or renovations are complete. When developing your own home plan or office area (or contracting someone to do it for you), it is essential to know what you are looking for in a working or living space.
            <br />
            <br />
            <div className='info'>
            Project Name : Abolire
            <br />
            <br />
            Total Area : 560 Square Feets
            <br />
            <br />
            Net Worth : $20,555,000
            <br />
            <br />
            Category : Modern House
            <br />
            <br />
            Launch Time : 10 December, 2019
            </div>
            </p>
            <Button className="link_button btn" target="_blank" as={Link} to="/about" >GET DETAILS</Button>

        </div>
  
        </Col>
        </div>
        </Row>
    
        </Container>
        </>

    );
};

export default FloorPlans;