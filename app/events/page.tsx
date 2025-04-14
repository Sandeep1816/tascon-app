"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Search } from "lucide-react"
// import img2 from "@/public/images/Artificial-Intelligence-and-Machine-Learning.png"
// import img3 from "@/public/images/Low_HKTDC202211112.jpg"

// import img5 from "@/public/images/global-logistics-network-hinrich-foundation.jpg"
// import img6 from "@/public/images/shutterstock_494274349.avif"
import img7 from "@/public/images/Artboard 2.jpg"
import img3 from "@/public/images/Cyber Security Consortium 2025.jpg"
import img4 from "@/public/images/cyber security 2.jpg"
// import img5 from "@/public/images/cybersecurity-threats.jpeg"
import img5 from "@/public/images/Global Fintech Summit & Awards 20252.jpg"
import img6 from "@/public/images/digitech 2.jpg"
import img8 from "@/public/images/Future DigiTech Summit & Tech Visionary Awards 2025.jpg"
import img9 from "@/public/images/Global Fintech Summit.jpg"

const upcomingEvents = [
  {
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "May 28 - 29, 2025",
    location: "Pullman, KL, Malaysia",
    description: "Explore the latest in digital transformation, AI, and emerging technologies.",
    attendees: "500+",
    image: img7,
    link: "https://www.futuredigitechsummit.com/",
  },
  {
    name: "Global Fintech Summit & Awards 2025",
    date: "July 28 - 29, 2025",
    location: "Johannesburg, South Africa",
    description: "Shaping the future of finance with cutting-edge fintech solutions and strategies.",
    attendees: "500+",
    image: img5,
    link: "https://www.globalfintechsummit.net/",
  },
  {
    name: "Cyber Security Consortium 2025",
    date: "September 2025",
    location: "Malaysia",
    description: "Addressing the latest challenges and solutions in global cybersecurity.",
    attendees: "500+",
    image: img3,
  },
  {
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "October 2025",
    location: "Singapore",
    description: "Transforming businesses through innovative technologies and digital strategies.",
    attendees: "500+",
    image: img6,
    link: "https://www.futuredigitechsummit.com/",
  },
  {
    name: "Global Fintech Summit & Awards 2025",
    date: "October 2025",
    location: "Morocco",
    description: "Exploring the intersection of finance and technology for a digital future.",
    attendees: "500+",
    image: img9,
    link: "https://www.globalfintechsummit.net/",
  },
  {
    name: "Future DigiTech Summit & Tech Visionary Awards 2025",
    date: "November 2025",
    location: "Turkey",
    description: "Showcasing digital innovation and recognizing tech visionaries across industries.",
    attendees: "500+",
    image: img8,
    link: "https://www.futuredigitechsummit.com/",
  },
  {
    name: "Cyber Security Consortium 2025",
    date: "November 2025",
    location: "Saudi Arabia",
    description: "Bringing together cybersecurity experts to address emerging threats and solutions.",
    attendees: "500+",
    image: img4,
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
          className="text-5xl font-bold text-gray-800 mb-8 text-center"
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
            className="w-full p-4 pl-12 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Search events"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
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
              {event.link ? (
                <Link href={event.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </Link>
              ) : (
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                {event.link ? (
                  <Link href={event.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h2>
                  </Link>
                ) : (
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h2>
                )}
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No events found matching your search.</p>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re constantly adding new events. Sign up for our newsletter to stay updated!
          </p>
          <Link
            href="/contact"
            className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 inline-block"
          >
            Subscribe to Updates
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

