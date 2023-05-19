import React from 'react';

const Gallery = () => {
    return (
        <div className='mb-0'>
            <div className="text-center mt-36">
                <h1 className="text-3xl font-bold">Gallery</h1>
                <p className="py-6 mb-10">Provident cupiditate voluptatem et in. Quaerat <br /> fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <img className='w-full h-60' src="https://images.pexels.com/photos/1102360/pexels-photo-1102360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/13047777/pexels-photo-13047777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/13047780/pexels-photo-13047780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/9307818/pexels-photo-9307818.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/10831693/pexels-photo-10831693.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='w-full h-60' src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
};

export default Gallery;