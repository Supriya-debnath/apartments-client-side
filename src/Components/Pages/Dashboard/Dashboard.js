import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageApartment from './Admin/ManageApartment/ManageApartment';
import ManageBooking from './Admin/ManageBooking/ManageBooking';
import MyBooking from './User/MyBooking/MyBooking';
import Payment from './User/Payment/Payment';
import Review from './User/Review/Review';

const Dashboard = () => {
    const {path, url} = useRouteMatch();
    const {admin, logOut} = useAuth();

    return (
        <div>
            <Container fluid>
                <Tab.Container>
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={4} lg={3}>
                        <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>

                        <Nav className="flex-column">
                           {
            
                                <>
                                <Link to={`${url}`}>Dashboard</Link>
                                <Link to={`${url}/add-product`}>Add Product</Link>
                                <Link to={`${url}/manage-apartments`}>Manage Apartments</Link>
                                <Link to={`${url}/manage-booking`}>Manage Booking</Link>
                                <Link to={`${url}/make-admin`}>Make Admin</Link>
                                <Link to='/login' onClick={logOut}>Logout</Link>
                               
                                <Link to={`${url}`}>Dashboard</Link>
                                <Link to={`${url}/my-booking`}>My Booking</Link>
                                <Link to={`${url}/payment`}>Payment</Link>
                                <Link to={`${url}/review`}>Review</Link>
                                <Link to='/login' onClick={logOut}>Logout</Link>
                                </>
                        
                           }
                            </Nav>
                            </div>
                            
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div>
                                <Switch>
                                    <Route exact path={path}>
                                        <div>
                                            <Container>
                                                <h2>Welcome to Dashboard</h2>
                                            </Container>
                                        </div>
                                    </Route>

                                    {/* Admin Route */}
                                    <Route path={`${path}/add-product`}>
                                        <AddProduct></AddProduct>
                                    </Route>
                                    <Route path={`${path}/manage-booking`}>
                                        <ManageBooking></ManageBooking>
                                    </Route>
                                    <Route path={`${path}/manage-apartments`}>
                                        <ManageApartment></ManageApartment>
                                    </Route>
                                    <Route path={`${path}/make-admin`}>
                                       <MakeAdmin></MakeAdmin>
                                    </Route>

                                    {/* User Route */}
                                    <Route path={`${path}/my-booking`}>
                                        <MyBooking></MyBooking>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <Review></Review>
                                    </Route>

                                </Switch>
                            </div>

                        </Col>
                    </Row>

                </Tab.Container>

            </Container>
            
        </div>
    );
};

export default Dashboard;