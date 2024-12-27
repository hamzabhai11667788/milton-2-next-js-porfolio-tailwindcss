import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container pt-8">
        <div className="flex justify-between items-center">
            <div className="text-xl font-medium">Hamza Rehmani</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#About">About</a></li>
                <li className='menuLink'><a href="#Projects">Projects</a></li>
                <li className='menuLink'><a href="#skills"></a>Skills</li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            <IoMenuSharp className='md:hidden' size={30}  />
        </div>
        

    </div>
  )
}

export default Navbar