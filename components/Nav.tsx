"use client"
import Link from "next/link"
import Image from "next/image" // Automatic optimize images for us ???
import React, { useState } from 'react';


 // Måste ha client side rendering när vi använder hooks

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  //Handles the opening and closing of our nav
  const handleClick = () => {
    setMenuOpen(!menuOpen);
};
    
  return (
    <nav className="flex justify-between w-full mb-4 p-4 bg_col_prim fixed">
      <Link href="/" className="flex">
        <Image 
          src="/pmlogoa.png" 
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>

      <p className="text_col_sec text-xl font-bold">PlusMinus App</p>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <button onClick={handleClick} className="flex flex-col justify-center items-center">
          <span className={`bg_col_sec block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
          </span>
          <span className={`bg_col_sec block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} >
          </span>
          <span className={`bg_col_sec block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`} >
          </span> 
        </button>
      </div>
    </nav>
    
  )
}

export default Nav




