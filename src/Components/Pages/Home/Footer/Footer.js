import React from 'react';
import img1 from '../../../../Images/foot.jfif'
import img2 from '../../../../Images/foot2.jpg'
import img3 from '../../../../Images/foot3.jfif'
import img4 from '../../../../Images/foot4.jfif'
import img5 from '../../../../Images/foot 5.jpg'
import img6 from '../../../../Images/foot6.jpg'
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer' className="footer-style py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="my-3">
                    <div className="footer_left">
                     <img  src="https://w7.pngwing.com/pngs/916/762/png-transparent-c-t-property-management-real-estate-commercial-property-house-building-apartment-logo.png"
                      width="40"
                      height="40"
                     className="d-inline-block align-top"
                     />
                     <p>Find Houston Apartments. Unlimited Access. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. 
 
                        <span> Types: Best Results, Explore Now, New Sources, Best in Search.</span></p>
                 </div>
                </Col>

                    <Col md={3} xs={12} className="my-3">
                    <div className="footer_left2">
                  <h2>Contact us</h2>
                  <a href="callto:+334 1234 5987"> <i class="fas fa-phone-alt"></i>+334 12934 59877
                     <br />+334 98876 23654</a>
                  <a href="mailto:beatlsinfo@gmail.com"> <i class="fas fa-envelope"></i>floorinfo@gmail.com
                    <br /> information@mail.com</a>
                  <a href="#"> <i class="fas fa-globe-asia"></i>www.apartmentinfo.com
                    <br /> www.information.com</a>
              </div>
                    </Col>

                    <Col md={3} xs={12} className="my-3">
                    <div>
                  <h2>Quick Links</h2>
                  <div>
                                <Link to="/" className="quick-link">
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="quick-link">
                                    About Us
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="quick-link">
                                    Portfolio
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="quick-link">
                                Contact Us
                                </Link>
                            </div>
              </div>
                    </Col>

                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2>Design Photos</h2>
                            <div className='img-part'>
                       <div>
                       <div className='part'>
                       <li><img src={img1} alt="" width="60"
                      height="50"/></li>
                       </div>
                       <div className='part'><li><img src={img2} alt="" width="60"
                      height="50"/></li></div>
                       <div className='part'><li><img src={img3} alt="" width="60"
                      height="50"/></li></div>
                      </div>

                       <div>
                       <div className='part'>  <li><img src={img4} alt="" width="60"
                      height="50"/></li></div>
                       <div className='part'><li><img src={img5} alt="" width="60"
                      height="50"/></li></div>
                       <div className='part'> <li><img src={img6} alt="" width="60"
                      height="50"/></li></div>
                    
                       </div>
                   </div>
                        </div>
                    </Col>
   
                </Row>
                <div>
            <p>Copyright &copy; 2021. All rights reserved by <a href="#"> Apartments</a></p>
        </div> 
            </Container>
        </div>
    );
};

export default Footer;


// <>
//         <footer id="footer">
//         <div class="footer_top">
//              <div class="container">
//                  <div class="footer_left">
//                      <img  src="https://w7.pngwing.com/pngs/916/762/png-transparent-c-t-property-management-real-estate-commercial-property-house-building-apartment-logo.png"
//                       width="40"
//                       height="40"
//                      className="d-inline-block align-top"
//                      />
//                      <p>Find Houston Apartments. Unlimited Access. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. 
 
//                         <span> Types: Best Results, Explore Now, New Sources, Best in Search.</span></p>
//                  </div>
 
//               <div class="footer_left2">
//                   <h3>Contact us</h3>
//                   <a href="callto:+334 1234 5987"> <i class="fas fa-phone-alt"></i>+334 12934 59877
//                      <br />+334 98876 23654</a>
//                   <a href="mailto:beatlsinfo@gmail.com"> <i class="fas fa-envelope"></i>floorinfo@gmail.com
//                     <br /> information@mail.com</a>
//                   <a href="#"> <i class="fas fa-globe-asia"></i>www.apartmentinfo.com
//                     <br /> www.information.com</a>
//               </div>
//               <div class="footer_left3">
//                   <h4>Important Links</h4>
//                   <ul>
//                       <li><a href="#">Home</a></li>	  
//                       <li><a href="#">About us</a></li>
//                       <li><a href="#">portfolio </a></li>
//                       <li><a href="#">Contact Us</a></li>
//                       <li><a href="#">Blog</a></li>
//                   </ul>
//                   <ul>
//                       <li><a href="#"> Pricing</a></li>
//                      <li><a href="#"> Blog</a></li>
//                       <li><a href="#">Feedback</a></li>
//                   </ul>
//               </div>
 
//               <div class="footer_last">
//                   <h4>Flickr Photos</h4>
//                   <ul>
//                       <li><img src={img1} alt=""/></li>
//                       <li><img src={img2} alt=""/></li>
//                       <li><img src={img3} alt=""/></li>
//                       <li><img src={img4} alt=""/></li>
//                       <li><img src={img5} alt=""/></li>
//                       <li><img src={img6} alt=""/></li>
//                   </ul>
                   
//               </div>
 
//                  <div class="clr"> </div>
//              </div>
//         </div>
//         <div class="footer_bottom">
//             <p>Copyright &copy; 2021. All rights reserved by <a href="#"> Apartments</a></p>
//         </div>     
//      </footer> 
            
//         </>




