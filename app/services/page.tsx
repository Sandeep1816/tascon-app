"use client"

import { useState } from "react"
// import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Users, Calendar, Briefcase, Target, Star } from "lucide-react"

const services = [
  {
    title: "Conferences & Summits",
    description:
      "Our conferences emphasize the latest trends in various industries, technologies, and innovations. We bring together globally recognized speakers who are experts in their fields, offering years of experience and knowledge.",
    icon: Calendar,
    benefits: [
      "Access to cutting-edge industry insights",
      "Networking opportunities with industry leaders",
      "Exposure to innovative solutions and technologies",
      "Tailored agenda to address specific industry challenges",
    ],
    testimonial: {
      text: "TASCON's conference exceeded our expectations. The quality of speakers and networking opportunities were unparalleled.",
      author: "John Doe, CEO of TechCorp",
    },
  },
  {
    title: "Workshops & Training",
    description:
      "We provide top-tier, dynamic international trainers across a wide range of industries. Our sector-specific training programs feature up-to-date, practical, and interactive courses tailored to the unique needs of industry professionals.",
    icon: Users,
    benefits: [
      "Hands-on learning experiences",
      "Customized curriculum for your industry",
      "Expert-led sessions with real-world applications",
      "Continuous professional development opportunities",
    ],
    testimonial: {
      text: "The workshop provided by TASCON was instrumental in upskilling our team. The practical knowledge gained has already shown results in our operations.",
      author: "Jane Smith, HR Director at GlobalFinance",
    },
  },
  {
    title: "Customized & Managed Events",
    description:
      "TASCON's customized events are proven to drive business growth and reduce costs through the simplicity of our format and the high standards of execution. We handle every aspect of event planning, organization, and execution on your behalf.",
    icon: Briefcase,
    benefits: [
      "Tailored events to meet your specific business goals",
      "End-to-end event management",
      "Cost-effective solutions with maximum impact",
      "Seamless execution and professional support",
    ],
    testimonial: {
      text: "TASCON's managed event service took the stress out of our product launch. Their attention to detail and execution was flawless.",
      author: "Alex Johnson, Marketing Director at InnovateNow",
    },
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white min-h-screen text-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold text-elephant-800 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-xl text-elephant-600 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At TASCON, we offer a comprehensive suite of services designed to elevate your business, foster innovation,
          and create impactful connections in your industry.
        </motion.p>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <service.icon className="w-8 h-8 text-sky-500 mr-4" />
                  <h2 className="text-2xl font-semibold text-elephant-800">{service.title}</h2>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-elephant-600 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-elephant-600 mb-6">{service.description}</p>
                    <h3 className="text-lg font-semibold text-elephant-700 mb-4">Key Benefits:</h3>
                    <ul className="list-none space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 mr-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-elephant-50 p-4 rounded-md">
                      <p className="text-elephant-700 italic mb-2">&quot;{service.testimonial.text}&quot;</p>
                      <p className="text-elephant-600 font-semibold">- {service.testimonial.author}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.section
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-sky-500 mr-4" />
            <h2 className="text-2xl font-semibold text-elephant-800">Audience Generation</h2>
          </div>
          <p className="text-elephant-600 mb-6">
            A dedicated team is exclusively assigned to attract a delegate audience for each customized event. This team
            is thoroughly trained on the client&apos;s products, solutions, and business details, ensuring they are
            well-equipped to recruit the right delegate profiles for your event, conference, or summit.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-elephant-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Our Approach:</h3>
              <ul className="list-disc pl-5 text-elephant-600">
                <li>In-depth understanding of your target audience</li>
                <li>Multi-channel outreach strategies</li>
                <li>Personalized communication and follow-ups</li>
                <li>Continuous refinement of audience profiles</li>
              </ul>
            </div>
            <div className="bg-elephant-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Benefits:</h3>
              <ul className="list-disc pl-5 text-elephant-600">
                <li>High-quality, relevant attendees</li>
                <li>Increased engagement and participation</li>
                <li>Better ROI for your events</li>
                <li>Expanded network of industry connections</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-elephant-700 mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-elephant-600 mb-8 max-w-2xl mx-auto">
            Let TASCON help you create impactful events and connections that drive your industry forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </div>
  )
}

