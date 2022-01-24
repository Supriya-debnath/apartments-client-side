import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Apartment from '../Apartment/Apartment';
import './Apartments.css';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch("https://afternoon-wave-85746.herokuapp.com/apartments")
        .then(res => res.json())
        .then(data => setApartments(data))
    }, [])

    return (
        <div>
            <h2 style={{color: 'salmon', marginTop: '40px'}}>Choice Your Dream Apartment</h2>
             <p style={{color: 'gray', margin: '20px'}}> Vehicle technology has become more sophisticated <br /> than ever over the past decade. </p>
       
        <div className="apartment-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                apartments.slice(0, 6).map(apartment => <Apartment apartment={apartment}></Apartment>)
                 
            }
            </Row>
            </Container>
        </div>
        </div>
    );
};

export default Apartments;