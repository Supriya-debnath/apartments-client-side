import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Apartments from '../../Apartments/Apartments';
import Banner from '../Banner/Banner';
import FloorPlans from '../FloorPlans/FloorPlans';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PropertyAmenities from '../PropertyAmenities/PropertyAmenities';
import SecondBanner from '../SecondBanner/SecondBanner';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
      <div>
           <Banner></Banner>
           <Apartments></Apartments>
           <FloorPlans></FloorPlans>
           <PropertyAmenities></PropertyAmenities>
           <PhotoGallery></PhotoGallery>
           <SecondBanner></SecondBanner>
           <Testimonials></Testimonials>
           <Team></Team>
           <AboutUs></AboutUs>
      </div>
    );
};

export default Home;