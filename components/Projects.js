"use client"
import { motion } from "framer-motion"
import { useState } from "react"

import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
            image: "/placeholder.svg?height=300&width=500",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
            features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"],
            github: "https://github.com",
            live: "https://example.com",
            category: "Full-Stack",
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
            image: "/placeholder.svg?height=300&width=500",
            technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
            features: ["Real-time Collaboration", "Project Tracking", "Team Management", "Analytics"],
            github: "https://github.com",
            live: "https://example.com",
            category: "Web App",
        },
        {
            title: "AI Content Generator",
            description:
                "An AI-powered content generation tool that helps users create high-quality content using advanced machine learning algorithms and natural language processing.",
            image: "/placeholder.svg?height=300&width=500",
            technologies: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
            features: ["AI Content Generation", "Multiple Templates", "Export Options", "Usage Analytics"],
            github: "https://github.com",
            live: "https://example.com",
            category: "AI/ML",
        },
        {
            title: "Weather Dashboard",
            description:
                "A comprehensive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities worldwide.",
            image: "/placeholder.svg?height=300&width=500",
            technologies: ["React", "TypeScript", "Chart.js", "Weather API", "Tailwind"],
            features: ["Location-based Forecasts", "Interactive Maps", "Weather Analytics", "Mobile Responsive"],
            github: "https://github.com",
            live: "https://example.com",
            category: "Frontend",
        },
    ]

    const categories = ["All", "Full-Stack", "Web App", "AI/ML", "Frontend"]
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                        A showcase of my recent work and the technologies I&apos;m passionate about
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Quick Actions */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                                    >
                                        <Eye className="w-4 h-4 text-slate-700" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                                    >
                                        <Github className="w-4 h-4 text-slate-700" />
                                    </a>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                                                <span className="text-green-500">✓</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 px-4 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
