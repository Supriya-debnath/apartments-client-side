import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';



const AboutUs = () => {
    return (
        <div id="about-us" className="about-us-sec">
      <div className="about-section container ">
        <div className="text-center pb-3">
          <h1 className="product-header ">About Us</h1>
          <h4 className='product-h'>Caring for the better</h4>
          <p className='paragraph'>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a global destination for online learning,
            <br /> we connect people through knowledge.
          </p>
        </div>
      </div>
      <div className="about-details container"></div>

      {/* growing section */}

      <div className="grooming-section pt-3 pb-5">
        <div className="container ps-6 pe-6">
          <div className="text-center">
            <h1 className="fs-1 pt-3">We just keep growing</h1>
            <p className="fs-5 pt-3">
              Our global community and our apartment service catalog get bigger
              every day. Check out our
              <br /> latest numbers as of June 2022.
            </p>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>44k</h1>
              <p>Client</p>
            </div>
            <div className="col text-center details">
              <h1>650+</h1>
              <p>Members</p>
            </div>
            <div className="col text-center details">
              <h1>183+</h1>
              <p>Services</p>
            </div>
            <div className="col text-center details">
              <h1>1K+</h1>
              <p>Proved Help</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>2M+</h1>
              <p>Viewers</p>
            </div>
            <div className="col text-center details">
              <h1>5K+</h1>
              <p>Videos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-container">
        <p>
          We help organizations of all types and sizes prepare for the path
          ahead — wherever it leads. Our curated collection of business and
          technical courses help companies, governments, and nonprofits go
          further by placing learning at the center of their strategies.
        </p>

        <Link to="/dashBoard" className="btn" id="about-btn">
          Learn More
        </Link>
      </div>

      {/* More information */}
      <div className="cart">
        <Card
          className="cart-information"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">Work with us</Card.Title>
            <Card.Text>
              At EduPress, we’re all learners and instructors. We live out our
              values every day to create a culture that is diverse, inclusive,
              and committed to helping employees thrive.
            </Card.Text>
            <Button className="text-btn">Join team</Button>
          </Card.Body>
        </Card>
        <Card
          className="cart-information2"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">See our research</Card.Title>
            <Card.Text>
              We’re committed to changing the future of learning for the better.
              Dig into our original research to learn about the forces that are
              shaping the modern workplace.
            </Card.Text>
            <Button className="text-btn">Learn More</Button>
          </Card.Body>
        </Card>
        <Card
          className="cart-information3"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">Read our blog</Card.Title>
            <Card.Text>
              Want to know what we’ve been up to lately? Check out the Udemy
              blog to get the scoop on the latest news, ideas and projects, and
              more.
            </Card.Text>
            <Button className="text-btn">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    );
};

export default AboutUs;