import React from 'react';
import img from '../../../../Images/about-logo.png';
import { Container } from 'react-bootstrap';
import './PropertyAmenities.css';

const PropertyAmenities = () => {
    return (
        <Container>
            <div>
            <div class="row">
            <div class="col-lg-12">
              <div class="common-head text-center">
                <h2>Property Amenities</h2>
                <img src={img} alt=""/>
              </div>
            </div>
          </div>
            <div className='row icons'>
                <div className='col-lg-3'>
                <div>
                 <i class="fas fa-hotel fa-2x"></i>
                 <p>Year Of Build <br/> 2015 </p>
                 </div>
                <div className='pro-img'>
                 <i class="fas fa-procedures fa-2x"></i>
                 <p>Bedrooms <br /> 8 </p>
                 </div>
                 </div>


                <div className='col-lg-3'>
                <div>
                 <i class="fas fa-shower fa-2x"></i>
                 <p>Bathrooms <br /> 5 </p>
                 </div>
                <div className='pro-img'>
                <i class="fas fa-hanukiah fa-2x"></i>
                 <p>Kitchen <br /> 1 </p>
                 </div>
                 </div>

                 
                <div className='col-lg-3'>
                <div>
                 <i class="fas fa-swimming-pool fa-2x"></i>
                 <p>Swimming <br /> 2</p>
                 </div>
                <div className='pro-img'>
                <i class="fab fa-internet-explorer fa-2x"></i>
                 <p>Internet <br /> 8 </p>
                 </div>
                 </div>
                <div className='col-lg-3'>
                <div>
                 <i class="fab fa-studiovinari fa-2x"></i>
                 <p>studiovinari <br /> best</p>
                 </div>
                
                <div className='pro-img'>
                <i class="fas fa-swimming-pool fa-2x"></i>
                 <p>Pool <br /> 2 </p>
                 </div>
                 </div>

            </div>
            </div>
        </Container>
        
    );
};

export default PropertyAmenities;





//           

//                 {/* <Col>
//                 <div>
//                 <i class="fas fa-book fa-2x"></i>
//                  <p>Square Feet <br /> 5326 </p>
//                 </div>
//                 </Col> */}

//                
//             </div>
//   
//             <Col>
//                 <div>
//                 <i class="fab fa-studiovinari"></i>
//                 </div>
//             </Col>
//             <Col>
//                 <div>
//                 <i class="fas fa-swimming-pool"></i>
//                 </div>
//             </Col>
//         </Row>
//             </Container>
//         </div>