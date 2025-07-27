"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart } from "react-icons/fa"
import { Mail, Phone, MapPin, ArrowUp, Code, Coffee } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    const services = [
        { name: "Web Development", href: "#projects" },
        { name: "Backend APIs", href: "#projects" },
        { name: "Database Design", href: "#skills" },
        { name: "Code Review", href: "#contact" },
        { name: "Mentoring", href: "#contact" },
    ]

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/yourusername",
            icon: <FaGithub className="w-5 h-5" />,
            color: "hover:text-gray-400",
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            icon: <FaLinkedin className="w-5 h-5" />,
            color: "hover:text-blue-400",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/yourusername",
            icon: <FaTwitter className="w-5 h-5" />,
            color: "hover:text-sky-400",
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/923001234567",
            icon: <FaWhatsapp className="w-5 h-5" />,
            color: "hover:text-green-400",
        },
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }}
                ></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    Huzaifa Saran
                                </h3>
                                <p className="text-slate-300 text-sm mb-4">Full-Stack Developer | AI Enthusiast | Problem Solver</p>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    Passionate about creating scalable, beautiful, and intelligent web experiences that make a difference.
                                    Always learning, always building.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    <a href="mailto:huzaifa.saran@example.com" className="hover:text-blue-400 transition-colors">
                                        huzaifa.saran@example.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Phone className="w-4 h-4 text-green-400" />
                                    <a href="tel:+923001234567" className="hover:text-green-400 transition-colors">
                                        +92 300 1234567
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <MapPin className="w-4 h-4 text-purple-400" />
                                    <span>Karachi, Pakistan</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href={service.href}
                                            className="text-slate-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Links & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 pt-8 border-t border-slate-800"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Social Links */}
                            <div className="flex items-center gap-6">
                                <span className="text-slate-400 text-sm">Follow me:</span>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-3 bg-slate-800 rounded-lg transition-all duration-300 ${social.color} hover:bg-slate-700`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <ArrowUp className="w-4 h-4" />
                                <span className="text-sm font-medium">Back to Top</span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 bg-slate-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <span>© {currentYear} Huzaifa Saran. Made with</span>
                                <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                                <span>and</span>
                                <Coffee className="w-4 h-4 text-amber-500" />
                                <span>in Pakistan</span>
                            </div>

                            <div className="flex items-center gap-4 text-slate-400 text-sm">
                                <div className="flex items-center gap-1">
                                    <Code className="w-4 h-4" />
                                    <span>Built with Next.js & Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button (Fixed) */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 md:hidden"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </footer>
    )
}
