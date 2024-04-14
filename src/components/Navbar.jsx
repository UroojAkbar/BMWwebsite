import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <header className='sticky-0 flex items-center justify-between px-4 py-2 shadow bg-black'>
    <h2 className='text-2xl font-bold font-sans text-white bg-[#1B3E80] p-3 ml-5 '>BMW</h2>
    <ul className='flex space-x-8 mr-10'>
  
        <li>
          <Link to="/" className=' text-white hover:text-[#1B3E80]'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className='text-white hover:text-[#1B3E80]'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/designs' className='text-white hover:text-[#1B3E80]'>
            Designs
          </Link>
        </li>
        <li>
          <Link to='/pricing' className='text-white hover:text-[#1B3E80] border hover:border-white p-2'>
            Pricing
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;