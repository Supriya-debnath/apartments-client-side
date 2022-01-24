import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../../Images/about-logo.png';
import './Team.css';

const Team = () => {
    return (
       <Container>
           <div className="row">
            <div className="col-lg-12">
              <div className="common-head text-center">
                <h2>OUR TEAM</h2>
                <img src={img} alt=""/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="main-team transition">
                <div className="team-img">
                  <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm6.jpg" className="img-fluid w-100" alt=""/>
                  <div className="overly transition">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h4>Liam RAHMAN</h4>
                  <h6>Cheif Trainer</h6>
                  <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="main-team transition">
                <div className="team-img">
                  <img src="https://olizadevelopers.com/wp-content/uploads/2019/12/img-team-member-career-03.jpg" className="img-fluid w-100" alt=""/>
                  <div className="overly transition">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h4>William Jeson</h4>
                  <h6>Cheif Trainer</h6>
                  <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="main-team transition">
                <div className="team-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv91ieijN-U5-6WQju-p2M0TNYbqFaEYkqng&usqp=CAU" className="img-fluid w-100" alt=""/>
                  <div className="overly transition">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h4>Olivia Juya</h4>
                  <h6>Cheif Trainer</h6>
                  <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="main-team transition">
                <div className="team-img">
                  <img src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg" className="img-fluid w-100" alt=""/>
                  <div className="overly transition">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h4>Amelia Bosu</h4>
                  <h6>Cheif Trainer</h6>
                  <p className="transition">Lorem ipsum dolor sit amet consectetur adipisicing elit 1500s,1600s.</p>
                </div>
              </div>
            </div>
         
          </div>
       </Container>
    );
};

export default Team;