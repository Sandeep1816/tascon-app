import Link from 'next/link'
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-elephant-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TASCON Group</h3>
            <p className="mb-4">Connecting Ideas, Creating Impact</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/tascongroup" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/tascongroup" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/tascongroup" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/tascongroup" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-sky-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-sky-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-sky-400">Our Services</Link></li>
              <li><Link href="/industries" className="hover:text-sky-400">Industries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/events" className="hover:text-sky-400">Upcoming Events</Link></li>
              <li><Link href="/partners" className="hover:text-sky-400">Partners</Link></li>
              <li><Link href="/blogs" className="hover:text-sky-400">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">123 Business Street</p>
            <p className="mb-2">City, State 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@tascongroup.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} TASCON Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
