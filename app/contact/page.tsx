"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form submitted:", formData)
      // Reset form after submission
      setFormData({
        name: "",
        designation: "",
        company: "",
        email: "",
        country: "",
        phone: "",
        message: "",
      })
      alert("Thank you for your message. We will get back to you soon!")
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 text-black">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-elephant-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-elephant-700 mb-4">Get in Touch</h2>
            <p className="text-elephant-600 mb-6">
              We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-sky-500 mr-2" />
                <span className="text-elephant-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-sky-500 mr-2" />
                <span className="text-elephant-600">info@tascongroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-sky-500 mr-2" />
                <span className="text-elephant-600">123 Business Street, City, Country</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-elephant-700">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
                required
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-elephant-700">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-elephant-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-elephant-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
                required
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-elephant-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-elephant-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-elephant-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-elephant-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-3"
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

