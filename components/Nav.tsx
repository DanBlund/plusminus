"use client"
import Link from "next/link"
import Image from "next/image" // Automatic optimize images for us ???

 // Måste ha client side rendering när vi använder hooks

const Nav = () => {



    
  return (
    <nav className="flex justify-between w-full mb-4 p-4  bg_col_prim fixed">
      <Link href="/" className="flex">
        <Image 
          src="/pmlogoa.png" 
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>

      <p className="text_col_sec">PlusMinus App</p>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        MOB NAVIGATION
      </div>
    </nav>
  )
}

export default Nav




