import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text)
        alert("Message sent successfully!")
        form.current.reset()
      }, (error) => {
        console.log(error.text)
        alert("Failed to send message. Please try again.")
      }
    )
  }
  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-white px-4 py-20 transition-colors">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            Have questions, ideas, or want to collaborate?  
            We'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm dark:shadow-none transition-colors">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
