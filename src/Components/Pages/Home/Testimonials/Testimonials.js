import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../../Images/about-logo.png';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <>
        <Container id="testimonial">
        <div className="container">
            <div className="common_head">
                <h2>TESTIMONIALS</h2>
                <img src={img} alt=""/>
          </div>
          <div class="test_row">
              <div class="col-lg-6 test_col">
                  <div class="test_img">
                      <img src="https://c8.alamy.com/comp/PJ1705/photo-of-handsome-rich-businessman-in-suit-showing-golden-bitcoin-PJ1705.jpg" alt="" 
                       width="70"
                       height="60"
                      className="d-inline-block align-top d"
                      />
                  </div>
                  <div className="test_text">
                      <h3>Sutart Jonny</h3>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half"></i>
                      <p>"Jamie is great!" "Aaron knew exactly what the issue was based on my description. Super quick and painless. Took more time locking the dogs up than the repair.Visited a friend who lives there. Very nice, clean, great pool!</p>
                  </div>
              </div>
              <div className="col-lg-6 test_col">
                <div class="test_img">
                    <img src="https://static3.bigstockphoto.com/3/6/3/large1500/363453568.jpg" alt="" 
                     width="70"
                     height="60"
                    className="d-inline-block align-top d"
                    />
                </div>
                <div class="test_text">
                    <h3>Roks Watson</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                    <p>Don't pay attention to the negative reviews from years ago. Since then they have a new management team and staff. Sydney is first class when it comes to selling you on the property, amenities and customer service. </p>
                </div>
            </div>
              <div class="clr"></div>
          </div>
          </div>
          </Container>
        </> 
        
    );
};

export default Testimonials;


{/* <div id='testimonial'>
            <Container>
                <div className="common_head">
                    <h2>TESTIMONIAL</h2>
                </div>
                <Row>
                    <Col lg={6} md={6} xs={12} className="my-3">
                    <div class="test_col">
                  <div class="test_img">
                      <img src="https://c8.alamy.com/comp/PJ1705/photo-of-handsome-rich-businessman-in-suit-showing-golden-bitcoin-PJ1705.jpg" alt="" 
                       width="70"
                       height="60"
                      className="d-inline-block align-top d"
                      />
                  </div>
                  <div class="test_text">
                      <h3>Sutart Jonny</h3>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half"></i>
                      <p>"Jamie is great!" "Aaron knew exactly what the issue was based on my description. Super quick and painless. Took more time locking the dogs up than the repair.Visited a friend who lives there. Very nice, clean, great pool!</p>
                  </div>
              </div>
                    </Col>

                    <Col lg={6} md={6} xs={12} className="my-3">
                    <div class="test_col">
                <div class="test_img">
                    <img src="https://static3.bigstockphoto.com/3/6/3/large1500/363453568.jpg" alt="" 
                     width="70"
                     height="60"
                    className="d-inline-block align-top d"
                    />
                </div>
                <div class="test_text">
                    <h3>Jemas Watson</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                    <p>Don't pay attention to the negative reviews from years ago. Since then they have a new management team and staff. Sydney is first class when it comes to selling you on the property, amenities and customer service. </p>
                </div>
            </div>
                    </Col>
                </Row>
            </Container>

        </div>
 */}

