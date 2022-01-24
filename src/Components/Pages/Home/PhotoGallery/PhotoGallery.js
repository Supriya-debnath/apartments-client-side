import React from 'react';
import img from '../../../../Images/about-logo.png';
import { Container } from 'react-bootstrap';
import './PhotoGellary.css';

const PhotoGallery = () => {
    return (
        <section id="portfolio"> 
        <div className="container">
        <div className="common_head">
        <h2>Photo Gallery</h2>
        <img src={img} alt=""/>
  </div>
  <div className="port_row">
      <div className=" col-lg-3 port_col">
          <div className="port_img port_mar">
          <img src="https://gothichomes.in/wp-content/uploads/2021/03/Gothic-Pangea-Blog-800x700.jpg" alt=""/>
              <div className="overly">
                  <i className="fas fa-link"></i>
              </div>
          </div>
          <div className="port_img">
          <img src="https://static.turbosquid.com/Preview/2016/06/04__09_13_54/preview01.jpg47f29137-4491-41b4-a670-881ddf6de92aOriginal.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
          </div>
         
      </div>
      <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://images.adsttc.com/media/images/500d/beb8/28ba/0d66/2500/1195/large_jpg/stringio.jpg?1430672807" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?s=170667a" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       
    </div>
    <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://previews.123rf.com/images/scanrail/scanrail1701/scanrail170100188/70941772-creative-abstract-house-building-and-city-construction-concept-evening-outdoor-urban-view-of-modern-.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://i.pinimg.com/originals/26/17/1b/26171b3e3d334e3a37ed0216fd1aa50b.jpg" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       
    </div>
    <div className="col-lg-3 port_col">
        <div className="port_img port_mar">
            <img src="https://www.bdhousing.com/api/list/listings/100X100/233734/82928f437fe068593210f87173183463.jpg" alt=""/>
            <div className="overly">
                <i className="fas fa-link"></i>
            </div>
        </div>
        <div className="port_img">
          <img src="https://worthstart.com/wp-content/uploads/2020/01/House-Name-Ideas.jpg" alt=""/>
          <div className="overly">
            <i className="fas fa-link"></i>
        </div>
        </div>
       </div>
       <div className="clr"></div>
  </div>  
</div>
</section>
        
    );
};

export default PhotoGallery;






