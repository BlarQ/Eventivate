import React from 'react';
// import bgImg from '/eventivate-bg.jpg'; // Import the image
import Button from './Button';

const Hero = () => {
    return (
        <div id='home' className="h-[80dvh] sm:h-screen bg-cover bg-center shadow" style={{ backgroundImage: "url('/eventivate.jpg')" }}>
            <div className='flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center h-full w-full backdrop-blur-[.2px] backdrop-brightness-[.7]'>
                <h1 className='text-6xl text-center text-white font-bold text-wrap '>Transform Your Event</h1>
                <Button href={'/'} text={'Book Reservation'} className={'py-3'} />
            </div>
        </div>
    );
};

export default Hero;