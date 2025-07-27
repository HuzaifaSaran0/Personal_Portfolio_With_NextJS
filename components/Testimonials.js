"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react"

const testimonials = [
    {
        name: "Ayesha Khan",
        title: "Software Engineer at TechVerse",
        image: "/placeholder.svg?height=80&width=80",
        quote:
            "Huzaifa is a talented developer who delivers on time with clean code. His attention to detail and positive attitude make him a joy to work with. The project exceeded our expectations!",
        rating: 5,
        project: "E-commerce Platform",
        relationship: "Team Lead",
    },
    {
        name: "Ali Raza",
        title: "Freelance Client",
        image: "/placeholder.svg?height=80&width=80",
        quote:
            "Extremely satisfied with Huzaifa's work! He built my custom backend API and integrated it smoothly with my React app. Communication was excellent throughout the project.",
        rating: 5,
        project: "Custom API Development",
        relationship: "Client",
    },
    {
        name: "Fatima Noor",
        title: "CS Student Peer",
        image: "/placeholder.svg?height=80&width=80",
        quote:
            "Huzaifa helped me understand Django Rest Framework like no one else. He's a great team player and mentor. His explanations are clear and easy to follow.",
        rating: 5,
        project: "Learning & Mentorship",
        relationship: "Mentee",
    },
    {
        name: "Ahmed Hassan",
        title: "Startup Founder",
        image: "/placeholder.svg?height=80&width=80",
        quote:
            "Working with Huzaifa was a game-changer for our startup. He delivered a scalable solution that helped us launch successfully. Highly recommend his services!",
        rating: 5,
        project: "MVP Development",
        relationship: "Client",
    },
    {
        name: "Sarah Ahmed",
        title: "Product Manager at InnovateTech",
        image: "/placeholder.svg?height=80&width=80",
        quote:
            "Huzaifa's technical expertise and problem-solving skills are outstanding. He consistently delivers high-quality work and is always willing to go the extra mile.",
        rating: 5,
        project: "Web Application",
        relationship: "Colleague",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToTestimonial = (index) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
            />
        ))
    }

    return (
        <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                        <Users className="w-4 h-4" />
                        Client Feedback
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        What People Say
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Testimonials from clients, colleagues, and mentees who have worked with me
                    </p>
                </motion.div>

                {/* Main Testimonial Carousel */}
                <div className="relative mb-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="p-8 md:p-12"
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 text-center leading-relaxed mb-8 font-medium">
                                "{testimonials[currentIndex].quote}"
                            </blockquote>

                            {/* Rating */}
                            <div className="flex justify-center mb-6">
                                <div className="flex gap-1">{renderStars(testimonials[currentIndex].rating)}</div>
                            </div>

                            {/* Author Info */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <div className="relative">
                                    <Image
                                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                                        alt={testimonials[currentIndex].name}
                                        width={80}
                                        height={80}
                                        className="rounded-full border-4 border-white dark:border-slate-700 shadow-lg"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                                </div>

                                <div className="text-center md:text-left">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-300 mb-1">{testimonials[currentIndex].title}</p>
                                    <div className="flex flex-col md:flex-row gap-2 text-sm text-slate-500 dark:text-slate-400">
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                                            {testimonials[currentIndex].project}
                                        </span>
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                                            {testimonials[currentIndex].relationship}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-110"
                    >
                        <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-110"
                    >
                        <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>
                </div>

                {/* Testimonial Dots */}
                <div className="flex justify-center gap-2 mb-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                                }`}
                        />
                    ))}
                </div>

                {/* Testimonial Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">{testimonial.title}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-3">{renderStars(testimonial.rating)}</div>

                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                "{testimonial.quote.slice(0, 120)}..."
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Happy Clients", value: "50+", icon: "😊" },
                            { label: "Projects Completed", value: "75+", icon: "🚀" },
                            { label: "5-Star Reviews", value: "45+", icon: "⭐" },
                            { label: "Repeat Clients", value: "80%", icon: "🔄" },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
