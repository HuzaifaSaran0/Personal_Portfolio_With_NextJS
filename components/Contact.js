"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [errors, setErrors] = useState({})

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "huzaifa.saran@example.com",
            href: "mailto:huzaifa.saran@example.com",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            value: "+92 300 1234567",
            href: "tel:+923001234567",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Karachi, Pakistan",
            href: "https://maps.google.com/?q=Karachi,Pakistan",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: <Clock className="w-5 h-5" />,
            label: "Response Time",
            value: "Within 24 hours",
            href: null,
            color: "from-orange-500 to-red-500",
        },
    ]

    const socialLinks = [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            href: "https://github.com/yourusername",
            color: "hover:text-gray-900 dark:hover:text-white",
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            color: "hover:text-blue-600",
        },
        {
            icon: <FaTwitter className="w-5 h-5" />,
            label: "Twitter",
            href: "https://twitter.com/yourusername",
            color: "hover:text-blue-400",
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: "WhatsApp",
            href: "https://wa.me/923001234567",
            color: "hover:text-green-500",
        },
    ]

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            setSubmitStatus("error")
            setTimeout(() => setSubmitStatus(null), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                        <MessageSquare className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you. Let's create something
                        amazing together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                Ready to start your next project? Reach out through any of these channels, and I'll get back to you as
                                soon as possible.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith("http") ? "_blank" : "_self"}
                                            rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                                            className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600"
                                        >
                                            <div
                                                className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 dark:text-white">{info.label}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">{info.value}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                                            <div className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg`}>{info.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 dark:text-white">{info.label}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">{info.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg transition-all duration-300 ${social.color} hover:shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg mb-6"
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </motion.div>
                        )}

                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg mb-6"
                            >
                                <AlertCircle className="w-5 h-5" />
                                <span>Something went wrong. Please try again or contact me directly.</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${errors.name
                                                ? "border-red-300 dark:border-red-600"
                                                : "border-slate-300 dark:border-slate-600 focus:border-blue-500"
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${errors.email
                                                ? "border-red-300 dark:border-red-600"
                                                : "border-slate-300 dark:border-slate-600 focus:border-blue-500"
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${errors.subject
                                            ? "border-red-300 dark:border-red-600"
                                            : "border-slate-300 dark:border-slate-600 focus:border-blue-500"
                                        }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white resize-none ${errors.message
                                            ? "border-red-300 dark:border-red-600"
                                            : "border-slate-300 dark:border-slate-600 focus:border-blue-500"
                                        }`}
                                    placeholder="Tell me about your project or inquiry..."
                                />
                                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
