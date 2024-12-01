import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/NavLogo.jpg';

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
    <div className="flex items-center">
      <img src={logoImage} alt="Logo" className="w-16" />
      <h1 className="text-2xl font-bold ml-[-1.2rem]">LogoName</h1>
    </div>
    <div className="flex gap-6">
      <Link to="/" className="hover:font-bold">Home</Link>
      <Link to="/projects" className="hover:font-bold">Projects</Link>
      <Link to="/skills" className="hover:font-bold">Skills</Link>
      <Link to="/contact" className="hover:font-bold">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
