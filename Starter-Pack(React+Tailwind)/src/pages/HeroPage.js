import React from 'react';
import userImage from '../assets/user.jpg';
import dotsIcon from '../assets/zigzags.png';

const HeroPage = () => (
  <section className="flex justify-center items-center py-16 gap-10">
    <div className="text-left">
      <h2 className="text-3xl">Hi, I’m <span className="text-blue-500 font-bold">Your Name</span></h2>
      <h1 className="text-5xl font-bold">Web Developer & Designer</h1>
      <p className="mt-4 text-gray-600">Building modern, responsive websites with passion and precision.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-800">
        Contact Me
      </button>
    </div>
    <div className="relative">
      <img src={userImage} alt="Hero" className="w-80" />
      <img src={dotsIcon} alt="Decoration" className="absolute bottom-0 right-0 animate-bounce" />
    </div>
  </section>
);

export default HeroPage;
