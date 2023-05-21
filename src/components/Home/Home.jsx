import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ExtraSection from '../ExtraSection/ExtraSection';
import AllToyCarCard from '../AllToyCar/AllToyCarCard';
import { Link } from 'react-router-dom';
import AllToyCar from '../AllToyCar/AllToyCar';

const Home = ({toyCar}) => {

    console.log(11, toyCar)

    // const { _id, toyCarName, quantity, sellerName, price, subCategory, photourl } = toyCar;
    // console.log( 12, _id)

    const handleViewDetails = id =>{
        //    console.log(id);
        //    navigate("/");
    }

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ExtraSection></ExtraSection>
            {/* <AllToyCarCard></AllToyCarCard> */}
            <AllToyCar></AllToyCar>
            
            <Link to='/all-toy'><button className="btn btn-success mb-24">See More</button></Link>
        </div>
    );
};

export default Home;