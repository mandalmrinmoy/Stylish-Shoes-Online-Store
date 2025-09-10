import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
const TopNavbar = () => {
  return (
    <>
    <div className='w-full shadow'>
    <nav className='max-w-screen px-4  border-gray-200 bg-white
                    lg:flex lg:justify-between lg:h-[45px] 
                    md:flex md:justify-between md:items-start md:h-[97px] md:pt-3
                    sm:flex sm:justify-between sm:items-center sm:h-[40px]
                    flex justify-between items-center h-[40px]
                    '>
        <div className='flex gap-2'>
            <FaFacebookF className='lg:text-[22px] md:text-lg text-lg cursor-pointer'/>
            <IoLogoInstagram className='lg:text-[22px] md:text-lg text-lg cursor-pointer'/>
            <FaYoutube className='lg:text-[22px] md:text-lg text-lg cursor-pointer'/>
            <IoLogoPinterest className='lg:text-[22px] md:text-lg text-lg cursor-pointer'/>
        </div>
        <div className='hidden sm:hidden md:w-[200px] md:text-center md:inline-block lg:w-screen lg:inline-block'>
            <p className='font-sans lg:text-[18px] md:text-[18px] '><span className='font-bold'>Special Offer</span>: Free Shipping on all the orders above $100</p>
        </div>
        <div >
            <ul className='flex gap-3 lg:text-[17px] md:text-[16px] sm:text-[16px] text-[16px]'>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    </nav>
    </div>
    </>
  )
}

export default TopNavbar