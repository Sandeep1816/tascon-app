"use client"

import { useState } from "react"
// import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ChevronRight } from "lucide-react"

const industries = [
  { name: "Manufacturing", icon: "🏭", description: "Optimizing production processes and supply chain management." },
  { name: "Banking & Finance", icon: "🏦", description: "Innovating financial services and fintech solutions." },
  { name: "Technology", icon: "💻", description: "Driving digital transformation and tech innovation." },
  { name: "Healthcare", icon: "🏥", description: "Advancing medical technologies and patient care." },
  { name: "Pharmaceuticals", icon: "💊", description: "Developing breakthrough drugs and therapies." },
  { name: "Oil & Gas", icon: "⛽", description: "Enhancing energy exploration and production efficiency." },
  { name: "E-commerce", icon: "🛒", description: "Revolutionizing online retail and customer experience." },
  { name: "Retail", icon: "🏪", description: "Transforming in-store experiences and omnichannel strategies." },
  { name: "Renewable Energy", icon: "🌿", description: "Advancing sustainable energy solutions." },
  { name: "Automotive", icon: "🚗", description: "Innovating in electric and autonomous vehicles." },
  { name: "Telecommunications", icon: "📡", description: "Expanding connectivity and communication technologies." },
  { name: "Aerospace & Defense", icon: "🚀", description: "Pushing boundaries in aviation and defense technologies." },
  { name: "Education", icon: "🎓", description: "Transforming learning through EdTech solutions." },
  { name: "Agriculture", icon: "🌾", description: "Implementing smart farming and sustainable practices." },
  { name: "Hospitality & Tourism", icon: "🏨", description: "Enhancing guest experiences and travel technologies." },
  { name: "Media & Entertainment", icon: "🎬", description: "Innovating in content creation and distribution." },
  { name: "Cybersecurity", icon: "🔒", description: "Protecting digital assets and ensuring data privacy." },
  { name: "Artificial Intelligence", icon: "🤖", description: "Advancing machine learning and AI applications." },
]

export default function Industries() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  const filteredIndustries = industries.filter((industry) =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold text-elephant-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Industries We Serve
        </motion.h1>

        <motion.p
          className="text-xl text-elephant-600 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TASCON offers holistic solutions, valuable learning experiences, and a wide range of networking opportunities
          to leading global industries. Explore our expertise across various sectors:
        </motion.p>

        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search industries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 pr-4 rounded-full border border-elephant-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-elephant-400" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((industry, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${selectedIndustry === industry.name ? "ring-2 ring-sky-500" : ""}`}
              onClick={() => setSelectedIndustry(industry.name)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4" role="img" aria-label={industry.name}>
                  {industry.icon}
                </span>
                <h2 className="text-xl font-semibold text-elephant-800">{industry.name}</h2>
              </div>
              <p className="text-elephant-600 mb-4">{industry.description}</p>
              <button className="text-sky-600 hover:text-sky-700 flex items-center">
                Learn more <ChevronRight className="ml-1" size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {selectedIndustry && (
          <motion.div
            className="mt-12 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-elephant-800 mb-4">{selectedIndustry} Solutions</h3>
            <p className="text-elephant-600 mb-6">
              TASCON provides cutting-edge solutions and networking opportunities tailored specifically for the{" "}
              {selectedIndustry.toLowerCase()} sector. Our events and services are designed to address the unique
              challenges and opportunities in this industry.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                <ul className="list-disc pl-5 text-elephant-600">
                  <li>Emerging trends and technologies</li>
                  <li>Regulatory compliance and best practices</li>
                  <li>Innovation and digital transformation</li>
                  <li>Sustainability and environmental impact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Our Offerings:</h4>
                <ul className="list-disc pl-5 text-elephant-600">
                  <li>Industry-specific conferences and summits</li>
                  <li>Specialized workshops and training programs</li>
                  <li>Networking events with industry leaders</li>
                  <li>Customized consulting services</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors duration-300"
              >
                Get Industry-Specific Solutions
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

