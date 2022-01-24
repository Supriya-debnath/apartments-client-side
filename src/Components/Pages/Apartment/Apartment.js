import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Apartment = ({apartment}) => {
    console.log(apartment);

    const {_id, description, price, img} = apartment;
    const {setCart} = useContext(UserContext);


    return (
        <Col>
        <Card>
          <Card.Img variant="top" className="img" src={img} />
          <Card.Body className="details">
            <Card.Text>
              {description}
            </Card.Text>
                  <h5>Price: ${price}</h5>
                  <Button  as={Link} to={`/booking/${_id}`} onClick={()=>setCart(apartment)}  >Booking Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Apartment;