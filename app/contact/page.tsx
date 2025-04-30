'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

// Extend the schema for checkboxes
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number.").optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the Terms & Conditions and Privacy Policy.",
  }),
  marketingConsent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive marketing updates.",
  }),
})

type FormData = z.infer<typeof formSchema>

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      termsAccepted: true,
      marketingConsent: true,
    }
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitMessage("Thank you for reaching out. We'll get back to you soon!")
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage("There was a problem sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">Contact Us</h2>

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="mt-2 block w-full py-3 px-4 rounded-lg border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-black sm:text-base font-semibold"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="mt-2 block w-full py-3 px-4 rounded-lg border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-black sm:text-base font-semibold"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="mt-2 block w-full py-3 px-4 rounded-lg border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-black sm:text-base font-semibold"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="mt-2 block w-full py-3 px-4 rounded-lg border-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-black sm:text-base font-semibold"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Terms & Conditions Checkbox */}
      <div className="flex items-start space-x-3">
        <input
          {...register('termsAccepted')}
          type="checkbox"
          id="termsAccepted"
          className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="termsAccepted" className="text-sm text-gray-700">
          I confirm that I have read, understand and accept the <a href="https://www.maxpo.ae/privacy" target="_blank" className="text-blue-600 underline">Terms & Conditions</a> and <a href="https://www.maxpo.ae/privacy" target="_blank" className="text-blue-600 underline">Privacy Policy</a> of Tascon Media.
        </label>
      </div>
      {errors.termsAccepted && <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>}

      {/* Marketing Consent Checkbox */}
      <div className="flex items-start space-x-3">
        <input
          {...register('marketingConsent')}
          type="checkbox"
          id="marketingConsent"
          className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="marketingConsent" className="text-sm text-gray-700">
          I agree to allow Tascon Media to contact me about their events and other marketing updates. Also, Tascon Media may share my details with carefully vetted third parties and other participants to improve the overall event experience.
        </label>
      </div>
      {errors.marketingConsent && <p className="mt-1 text-sm text-red-600">{errors.marketingConsent.message}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex justify-center rounded-lg border border-transparent bg-indigo-600 py-3 px-4 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {/* Submitting Animation */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center space-x-2 text-sm text-indigo-600"
          >
            <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending your message...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Message */}
      {submitMessage && (
        <p className={`mt-4 text-center text-sm ${submitMessage.includes("problem") ? "text-red-600" : "text-green-600"}`}>
          {submitMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
