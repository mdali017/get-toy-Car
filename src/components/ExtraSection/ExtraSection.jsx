import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row">
                    <img  src="https://images.pexels.com/photos/4934420/pexels-photo-4934420.jpeg?auto=compress&cs=tinysrgb&w=600" className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Happy Movement With Your Children!</h1>
                        <p className="py-6">Provident cupiditate voluptatem . Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div>
                    <img src="https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-36 h-28 mx-auto mt-5 mb-5 rounded-lg' alt="" />
                    <h2 className='font-bold text-2xl mb-5'>Toy Truck</h2>
                    <p className='text-[#4F4F4F] mb-20 '>A toy truck is a miniature vehicle designed for play and imagination. It often resembles a real truck, complete with wheels, a chassis, and a bed for carrying objects. Children enjoy pushing, pulling, and racing toy trucks, creating adventures in their own imaginary worlds.</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/15520639/pexels-photo-15520639/free-photo-of-close-up-of-a-toy-rocket.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-36 h-28 mx-auto mt-5 mb-5 rounded-lg' alt="" />
                    <h2 className='font-bold text-2xl mb-5'>Toy Rocket</h2>
                    <p className='text-[#4F4F4F] mb-20'>A toy truck is a miniature vehicle designed for play and imagination. It often resembles a real truck, complete with wheels, a chassis, and a bed for carrying objects. Children enjoy pushing, pulling, and racing toy trucks, creating adventures in their own imaginary worlds.</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3427742/pexels-photo-3427742.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-36 h-28 mx-auto mt-5 mb-5 rounded-lg' alt="" />
                    <h2 className='font-bold text-2xl mb-5'>Toy Bus</h2>
                    <p className='text-[#4F4F4F] mb-20'>A toy bus is a delightful miniature version of a real bus, capturing the essence of public transportation. With wheels, windows, and doors, it invites children to embark on imaginative journeys and create their own bustling city adventures.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;