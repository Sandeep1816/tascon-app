'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className=" bg-gray-900  py-4 shadow-lg ">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/images/2x.png" // Replace with your logo path
            alt="TASCON Logo" 
            width={100} 
            height={100} 
            // className="h-10 w-10"
          />
          {/* <Link href="/" className="text-2xl font-bold text-white">
            TASCON
          </Link> */}
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-teal-200">Home</Link>
          <Link href="/about" className="text-white hover:text-teal-200">About Us</Link>
          <Link href="/services" className="text-white hover:text-teal-200">Our Services</Link>
          <Link href="/industries" className="text-white hover:text-teal-200">Industries</Link>
          <Link href="/events" className="text-white hover:text-teal-200">Upcoming Events</Link>
          {/* <Link href="/partners" className="text-white hover:text-teal-200">Partners</Link> */}
          {/* <Link href="/blogs" className="text-white hover:text-teal-200">Blogs</Link> */}
          <Link href="/contact" className="text-white hover:text-teal-200">Contact Us</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mt-5 md:hidden bg-gray-900 text-white p-5 rounded-md">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="hover:text-teal-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-200">About Us</Link></li>
            <li><Link href="/services" className="hover:text-teal-200">Our Services</Link></li>
            <li><Link href="/industries" className="hover:text-teal-200">Industries</Link></li>
            <li><Link href="/events" className="hover:text-teal-200">Upcoming Events</Link></li>
            <li><Link href="/partners" className="hover:text-teal-200">Partners</Link></li>
            <li><Link href="/blogs" className="hover:text-teal-200">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-teal-200">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
