'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Twitter, Linkedin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-elephant-800">TASCON</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-elephant-600 hover:text-sky-600">Home</Link>
            <Link href="/about" className="text-elephant-600 hover:text-sky-600">About Us</Link>
            <Link href="/services" className="text-elephant-600 hover:text-sky-600">Our Services</Link>
            <Link href="/industries" className="text-elephant-600 hover:text-sky-600">Industries</Link>
            <Link href="/events" className="text-elephant-600 hover:text-sky-600">Upcoming Events</Link>
            <Link href="/partners" className="text-elephant-600 hover:text-sky-600">Partners</Link>
            <Link href="/blogs" className="text-elephant-600 hover:text-sky-600">Blogs</Link>
            <Link href="/contact" className="text-elephant-600 hover:text-sky-600">Contact Us</Link>
          </nav>
          {/* <div className="hidden md:flex space-x-2">
            <a href="https://twitter.com/tascongroup" target="_blank" rel="noopener noreferrer" className="text-elephant-600 hover:text-sky-400">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/company/tascongroup" target="_blank" rel="noopener noreferrer" className="text-elephant-600 hover:text-sky-600">
              <Linkedin size={24} />
            </a>
          </div> */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="text-elephant-600 hover:text-sky-600">Home</Link></li>
              <li><Link href="/about" className="text-elephant-600 hover:text-sky-600">About Us</Link></li>
              <li><Link href="/services" className="text-elephant-600 hover:text-sky-600">Our Services</Link></li>
              <li><Link href="/industries" className="text-elephant-600 hover:text-sky-600">Industries</Link></li>
              <li><Link href="/events" className="text-elephant-600 hover:text-sky-600">Upcoming Events</Link></li>
              <li><Link href="/partners" className="text-elephant-600 hover:text-sky-600">Partners</Link></li>
              <li><Link href="/blogs" className="text-elephant-600 hover:text-sky-600">Blogs</Link></li>
              <li><Link href="/contact" className="text-elephant-600 hover:text-sky-600">Contact Us</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

