import React from 'react';

const Banner = () => {
    return (
        <div  className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/6139414/pexels-photo-6139414.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div  className="hero-content text-center text-neutral-content">
                <div data-aos="fade-up-right" className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Welcome To Toy Car</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;