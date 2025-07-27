"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pb-7">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
                    {/* Greeting */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                            Huzaifa Saran
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span>{" "}
                        who builds scalable, beautiful, and intelligent web experiences that make a difference.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            🚀 View My Work
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex justify-center gap-6">
                        {[
                            { icon: Github, href: "https://github.com", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-slate-200 dark:border-slate-700"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator - Corrected Version */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full pointer-events-none"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </motion.div>


        </section>
    )
}
