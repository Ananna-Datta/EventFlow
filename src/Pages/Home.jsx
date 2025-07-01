import React from 'react';
import Banner from '../Components/Banner';
import Countdown from '../HomePage/Countdown';
import WhyChooseUs from '../HomePage/WhyChooseUs ';
import OurSpeakers from '../HomePage/OurSpeakers ';
import OurSponsors from '../HomePage/OurSponsors';
import PhotoGallery from '../HomePage/PhotoGallery';
import Testimonial from '../HomePage/Testimonial ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Countdown></Countdown>
            
            <WhyChooseUs></WhyChooseUs>
            <PhotoGallery></PhotoGallery>
            <OurSponsors></OurSponsors>
            <OurSpeakers></OurSpeakers>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;