'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { SectionTitle } from './ui/section-title'

// Form field type
type FormField = {
  value: string
  error: string
  touched: boolean
}

export function Contact() {
  // Initialize EmailJS
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('YOUR_PUBLIC_KEY')
  }, [])

  // Form state
  const [name, setName] = useState<FormField>({ value: '', error: '', touched: false })
  const [email, setEmail] = useState<FormField>({ value: '', error: '', touched: false })
  const [message, setMessage] = useState<FormField>({ value: '', error: '', touched: false })

  // Form status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // Form ref for EmailJS
  const formRef = useRef<HTMLFormElement>(null)

  // Validate form fields
  const validateField = (field: FormField, fieldName: string): string => {
    if (!field.value.trim()) {
      return `${fieldName} is required`
    }

    if (fieldName === 'Email' && !/^\S+@\S+\.\S+$/.test(field.value)) {
      return 'Please enter a valid email address'
    }

    return ''
  }

  // Handle field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<FormField>>,
    fieldName: string
  ) => {
    const { value } = e.target
    setter(prev => ({
      ...prev,
      value,
      touched: true,
      error: value.trim() ? '' : validateField({ ...prev, value }, fieldName)
    }))
  }

  // Handle field blur
  const handleBlur = (
    setter: React.Dispatch<React.SetStateAction<FormField>>,
    fieldName: string
  ) => {
    setter(prev => ({
      ...prev,
      touched: true,
      error: validateField(prev, fieldName)
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const nameError = validateField(name, 'Name')
    const emailError = validateField(email, 'Email')
    const messageError = validateField(message, 'Message')

    // Update field states with errors
    setName(prev => ({ ...prev, error: nameError, touched: true }))
    setEmail(prev => ({ ...prev, error: emailError, touched: true }))
    setMessage(prev => ({ ...prev, error: messageError, touched: true }))

    // If any errors, don't submit
    if (nameError || emailError || messageError) {
      return
    }

    // Submit form
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_hamawebdev', // Replace with your actual EmailJS service ID
        'template_contact_form', // Replace with your actual EmailJS template ID
        formRef.current!,
        'YOUR_USER_ID' // Replace with your actual EmailJS user ID
      )

      // Success
      setSubmitStatus('success')
      setStatusMessage('Your message has been sent successfully!')

      // Reset form
      setName({ value: '', error: '', touched: false })
      setEmail({ value: '', error: '', touched: false })
      setMessage({ value: '', error: '', touched: false })

    } catch (error) {
      // Error
      setSubmitStatus('error')
      setStatusMessage('Failed to send message. Please try again later.')
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? Send me a message!"
        titleGradient="cyan-blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Contact info and decoration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-75"></div>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 font-subheading text-white">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <a href="mailto:hamawebdev@gmail.com" className="text-white hover:text-blue-400 transition-colors font-body">
                      hamawebdev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Social</p>
                    <div className="flex space-x-3 mt-1">
                      <a href="https://github.com/hamawebdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        GitHub
                      </a>
                      <span className="text-gray-600">•</span>
                      <a href="https://www.linkedin.com/in/hamadouche-ayoub-380735336" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-xl font-semibold mb-4 font-subheading text-white">Response Time</h4>
            <p className="text-gray-300 font-body">
              I typically respond to all inquiries within 24-48 hours. For urgent matters, please mention it in your message.
            </p>
          </div>
        </motion.div>

        {/* Right side - Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700"
          >
            {/* Form status message */}
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success' ? 'bg-green-900/30 text-green-300 border border-green-800' :
                  'bg-red-900/30 text-red-300 border border-red-800'
                }`}
              >
                <div className="flex items-center">
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  )}
                  <p>{statusMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Name field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-subheading">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={name.value}
                onChange={(e) => handleChange(e, setName, 'Name')}
                onBlur={() => handleBlur(setName, 'Name')}
                className={`w-full px-4 py-3 bg-gray-700/50 border ${
                  name.touched && name.error ? 'border-red-500' : 'border-gray-600'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-body transition-colors`}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {name.touched && name.error && (
                <p className="mt-2 text-sm text-red-400">{name.error}</p>
              )}
            </div>

            {/* Email field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-subheading">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email.value}
                onChange={(e) => handleChange(e, setEmail, 'Email')}
                onBlur={() => handleBlur(setEmail, 'Email')}
                className={`w-full px-4 py-3 bg-gray-700/50 border ${
                  email.touched && email.error ? 'border-red-500' : 'border-gray-600'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-body transition-colors`}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {email.touched && email.error && (
                <p className="mt-2 text-sm text-red-400">{email.error}</p>
              )}
            </div>

            {/* Message field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-subheading">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message.value}
                onChange={(e) => handleChange(e, setMessage, 'Message')}
                onBlur={() => handleBlur(setMessage, 'Message')}
                className={`w-full px-4 py-3 bg-gray-700/50 border ${
                  message.touched && message.error ? 'border-red-500' : 'border-gray-600'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-body transition-colors min-h-[150px] resize-y`}
                placeholder="Your message here..."
                disabled={isSubmitting}
              />
              {message.touched && message.error && (
                <p className="mt-2 text-sm text-red-400">{message.error}</p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-heading text-white text-shadow-sm tracking-wide flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
              } transition-all duration-300 shadow-lg`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact