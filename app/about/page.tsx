'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Users, Lightbulb, Network } from 'lucide-react'

import mission from '@/public/images/111.jpg'
import tarannumImg from '@/public/images/tarunam.jpg'

export default function About() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white text-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-elephant-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About TASCON
        </motion.h1>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          {...fadeInUp}
        >
          <p className="text-xl text-elephant-600 leading-relaxed">
            TASCON Group is at the forefront of redefining the B2B events landscape. 
            We are committed to delivering world-class experiences that drive innovation, 
            foster connections, and catalyze business growth on a global scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeInUp}>
            <Image
              src={mission}
              alt="TASCON Group Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-semibold text-elephant-700 mb-6">Our Mission</h2>
            <p className="text-elephant-600 mb-4 text-lg leading-relaxed">
              Our mission is to redefine the B2B events landscape through:
            </p>
            <ul className="space-y-4">
              {[ 
                "Rigorous market research to identify emerging trends",
                "Active involvement of industry thought leaders",
                "Meticulous selection of specialized vendors",
                "Delivery of exceptional service to our clients"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ChevronDown className="text-sky-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl font-semibold text-elephant-700 mb-6 text-center">Who We Are</h2>
          <p className="text-elephant-600 mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We are the world&apos;s fastest-growing B2B event company, orchestrating success through expertly curated conferences and unforgettable special events, providing a strategic gateway to global business growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { icon: Users, title: "Expert Team", description: "A diverse group of industry professionals" },
              { icon: Lightbulb, title: "Innovative Approach", description: "Cutting-edge event concepts and execution" },
              { icon: Network, title: "Global Network", description: "Connections spanning across industries and borders" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="mx-auto mb-4 text-sky-500" size={40} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-elephant-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl font-semibold text-elephant-700 mb-6 text-center">Our Collaborations</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-elephant-600 mb-6 text-lg leading-relaxed">
              Our trainers, speakers, and panelists are recognized as influential thought leaders in their respective fields. These experts are among the most renowned in their industries. We also prioritize hosting our events at top-tier venues to ensure that our clients have an exceptional and memorable experience.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-elephant-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">Expert Speakers</h3>
                <p className="text-sm text-elephant-600">Bringing insights from industry leaders</p>
              </div>
              <div className="bg-elephant-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">Top-Tier Venues</h3>
                <p className="text-sm text-elephant-600">Hosting events at world-class locations</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <h2 className="text-3xl font-semibold text-elephant-700 mb-6 text-center">How TASCON is Influencing Businesses</h2>
          <div className="space-y-4">
            {[ 
              { title: "Driving Innovation", content: "Our events provide cutting-edge insights to keep businesses relevant and effective in today's landscape." },
              { title: "Building Relationships", content: "We bring together diverse experts, creating valuable networking opportunities." },
              { title: "Enabling Investments", content: "Our high-impact events connect founders and entrepreneurs with top tech investors." },
              { title: "Prime Venues", content: "We host events at top business destinations worldwide, ensuring an exceptional experience." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="border border-elephant-200 rounded-lg overflow-hidden"
                initial={false}
                animate={{ height: activeSection === item.title ? 'auto' : '60px' }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-elephant-50 transition-colors duration-300"
                  onClick={() => toggleSection(item.title)}
                >
                  <span className="font-semibold">{item.title}</span>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 ${activeSection === item.title ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeSection === item.title && (
                  <div className="p-4 bg-elephant-50">
                    <p className="text-elephant-600">{item.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tarannum Shariff Profile Card */}
        <div className="m-3 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Image */}
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Image
                src={tarannumImg}
                alt="Tarannum Shariff"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-md"
              />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-elephant-800 to-sky-600 text-transparent bg-clip-text tracking-tight leading-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Tarannum Shariff
            </motion.h1>
            <motion.p
              className="text-xl text-elephant-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Designation: Managing Director
            </motion.p>
            <motion.div
              className="mt-6 border-t border-elephant-200 pt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-elephant-500 text-sm">Leading TASCON Media towards excellence in B2B events</p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-elephant-700 mb-6">Ready to Experience TASCON?</h2>
          <p className="text-elephant-600 mb-8 max-w-2xl mx-auto">
            Join us at our next event and see firsthand how TASCON is shaping the future of B2B interactions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
        
      </div>
    </div>
  )
}
