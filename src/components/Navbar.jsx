import React, { useState } from 'react'
import logo from "../assets/images/main-logo.png"
import { GoPerson } from "react-icons/go";
import { BiCartAlt } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isShow, setIsSlow] = useState(false)
  return (
    <>
      <div className='w-full '>
        <div className='realtive max-w-screen h-[70px] font-sans mt-2 mx-auto px-4  w-full
                    lg:flex lg:justify-between 
                    md:flex md:justify-between
                    sm:flex sm:justify-between
                    flex justify-between
                    '>
          {/* logo-containet */}
          <div><Link to="/"><img src={logo} alt="Logo" className='w-[130px] cursor-pointer' /></Link></div>
          {/* pages container */}
          <div className=' right-0 bg-white w-[50%]
                           lg:flex lg:items-center lg:justify-between lg:w-[55%]
                           md:flex md:items-center md:justify-between
                           sm:flex sm:items-center sm:justify-between
                           flex items-center justify-between
                           '>
            {/* pages left container */}
            <div className='lg:block md:hidden sm:hidden hidden'>
              <ul className='lg:flex lg:gap-8 lg:items-center '>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/">Home</NavLink></li>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/">Men</NavLink></li>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/">Women</NavLink></li>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/">Page</NavLink></li>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/" >Shop</NavLink></li>
                <li className='font-bold text-[17px] text-gray-800 cursor-pointer'><NavLink to="/">Sale</NavLink></li>
              </ul>
            </div>
            {/* pages right container--icon */}
            <div className='flex gap-4'>
              <Link to="/login"><GoPerson className='text-2xl cursor-pointer ' /></Link>
              <BiCartAlt className='text-2xl cursor-pointer ' />
              <CgSearch className='text-2xl cursor-pointer ' />
            </div>
            {/* menubar  */}
            <div className='lg:hidden md:block sm:block'>
              <BiMenuAltRight className='text-[25px] cursor-pointer text-center ' onClick={() => setIsSlow(!isShow)} />
            </div>
          </div>
        </div>
        {
          isShow && (
            <div className='w-screen h-screen'>
            <div className='flex justify-end lg:hidden'>
              <div className='w-[100%] h-screen bg-amber-100 p-4 absolute md:w-[50%] md:mt-[-175px] sm:w-[60%] sm:mt-[-120px] mt-[-120px]'>
                <div className=' right-0 flex justify-between '>
                  <div><img src={logo} alt="Logo" className='w-[110px] cursor-pointer' /></div>
                  <RxCross1 className='text-2xl cursor-pointer' onClick={() => setIsSlow(!isShow)} />
                </div>
                <div className='mt-5'>
                  <ul className='flex flex-col gap-2'>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/">Home</NavLink></li>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/">Men</NavLink></li>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/">Women</NavLink></li>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/">Page</NavLink></li>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/" >Shop</NavLink></li>
                    <li className='font-bold text-[34px] text-gray-700 cursor-pointer'><NavLink to="/">Sale</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          )
        }
      </div>
    </>
  )
}


export default Navbar