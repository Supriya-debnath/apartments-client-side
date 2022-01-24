import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Booking.css';
import BookingForm from '../BookingForm/BookingForm';


const Booking = () => {
    const { id } = useParams();

    const [booking, setBooking] = useState({});
    useEffect(() => {
        const uri = `https://afternoon-wave-85746.herokuapp.com/apartments/${id}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [id]);

    return (
        <>
           
            <div className="place-order py-5">
                <h2 className="text-center my-4 place-order-header">
                    Your Booking Information
                </h2>
                <Container>
                    <Row>
                        <Col
                            md={6}
                            xs={12}
                            className="text-center left-div my-3"
                        >
                            <img
                                src={booking?.img}
                                alt=""
                                className="img-size pt-3"
                            />
                           
                            <p className="products-card-para">
                                {booking?.description}
                            </p>
                            <p className="products-card-para">
                                price: $ {booking?.price}
                            </p>

                        </Col>
                        <Col md={6} xs={12} className="my-3">
                            <BookingForm booking={booking}></BookingForm>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </>
    );
};

export default Booking;