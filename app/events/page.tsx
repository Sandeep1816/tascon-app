"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Search } from "lucide-react"

const upcomingEvents = [
  {
    name: "Future DigiTech Summit 2025",
    date: "January 15-17, 2025",
    location: "Silicon Valley, CA",
    description: "Explore the latest in digital transformation, AI, and emerging technologies.",
    attendees: 1500,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Patients' Experience Summit 2025",
    date: "March 22-24, 2025",
    location: "Boston, MA",
    description: "Revolutionizing healthcare through patient-centered innovations and technologies.",
    attendees: 1200,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Banking & Fintech Summit 2025",
    date: "May 10-12, 2025",
    location: "New York City, NY",
    description: "Shaping the future of finance with cutting-edge fintech solutions and strategies.",
    attendees: 1800,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sustainable Energy Conference 2025",
    date: "July 5-7, 2025",
    location: "Copenhagen, Denmark",
    description: "Driving the global transition to renewable energy and sustainable practices.",
    attendees: 2000,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "AI & Machine Learning Expo 2025",
    date: "September 18-20, 2025",
    location: "Tokyo, Japan",
    description: "Showcasing groundbreaking AI and ML applications across industries.",
    attendees: 2500,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Global Supply Chain Forum 2025",
    date: "November 8-10, 2025",
    location: "Singapore",
    description: "Optimizing supply chains through innovation, resilience, and sustainability.",
    attendees: 1600,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = upcomingEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold text-elephant-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h1>

        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search events by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 pr-4 rounded-full border border-elephant-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-elephant-400" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={`${event.name} logo`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-elephant-800 mb-2">{event.name}</h2>
                <p className="text-elephant-600 mb-4">{event.description}</p>
                <div className="flex items-center text-elephant-500 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-elephant-500 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-elephant-500 mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} expected attendees</span>
                </div>
                <Link
                  href={`/events/${encodeURIComponent(event.name)}`}
                  className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition duration-300 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-elephant-600 mt-8">No events found matching your search.</p>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-elephant-800 mb-4">Can't find what you're looking for?</h2>
          <p className="text-elephant-600 mb-8">
            We're constantly adding new events. Sign up for our newsletter to stay updated!
          </p>
          <Link
            href="/contact"
            className="bg-elephant-800 text-white px-8 py-3 rounded-full hover:bg-elephant-900 transition-colors duration-300 inline-block"
          >
            Subscribe to Updates
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

