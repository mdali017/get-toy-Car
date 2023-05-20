import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ExtraSection from '../ExtraSection/ExtraSection';
import AllToyCarCard from '../AllToyCar/AllToyCarCard';

const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <ExtraSection></ExtraSection>
           
        </div>
    );
};

export default Home;