import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundImage: "url('/porpolio.png')", backgroundSize: "35%", backgroundPosition: "left 100px top 100px"  }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[130px] font-bold leading-tight flex justify-centre items-center">
          <div>
            <p >I'm</p>
            <p >Hamza</p>
            <p >Rehmani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
