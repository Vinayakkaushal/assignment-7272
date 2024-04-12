import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import "./nav.css"
import { MdKeyboardArrowDown } from "react-icons/md"

function Navbar() {
  return (
    <nav className=' gap-64 py-3 border-none lg:border px-2 fixed top -0 left-0 right-0 bg-[#f5f5f5ff] shadow-lg z-20'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col lg:flex-row items-center gap-[17px] my-[-37px]'>
          <div>
            <NavLink to={"/"}>
              <img src={logo} alt="savan logo" width={140} className='' />
            </NavLink>
          </div>
          <div className='flex text-[24px] lg:text-[15px] gap-5 text-gray-700 cursor-pointer font-semibold '>
            <li className='list-none'>Music</li>
            <li className='list-none'>Podcasts</li>
            <li className='list-none'>GO PRO</li>
          </div>
        </div>


        <div>
            <input type="text" name="Search" placeholder='Search for songs' id="" className='py-2 w-80 outline-none text-center text-black border-solid border-2 rounded-full ' />
          </div>

        <div className='flex flex-row mt-[37px] items-center gap-12'>
          <div className='flex justify-center gap-2'>
            <div className='flex flex-col text-sm my-[-17px]'>
              <span className='text-gray-700 text-[15px] font-semibold'>Music Languages</span>
              <span className='text-gray-700 text-[15px] font-semibold'>Hindi</span>
            </div>
            <MdKeyboardArrowDown className='text-l text-gray-700 mt-2' />
          </div>
          <div className='flex gap-4 text-sm font-semibold mr-4 mt-[-40px]'>
            <NavLink to="/login" ><button className="hover:underline">Login</button></NavLink>
            <NavLink to="/signup" ><button className="hover:underline">Sign Up</button></NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
