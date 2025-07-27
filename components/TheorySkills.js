"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Trophy, Target, Code2, Award, TrendingUp, Star } from "lucide-react"

const theorySkills = [
    {
        title: "LeetCode",
        level: "Intermediate",
        link: "https://leetcode.com/yourusername",
        description: "Algorithmic problem solving and data structures",
        stats: {
            solved: "450+",
            rating: "1650",
            badge: "Knight",
        },
        color: "from-orange-500 to-yellow-500",
        icon: "🏆",
        achievements: ["Top 15% globally", "Contest participant", "Daily streak: 120 days"],
    },
    {
        title: "GeeksforGeeks",
        level: "Advanced",
        link: "https://www.geeksforgeeks.org/user/yourusername/",
        description: "Comprehensive programming concepts and interview prep",
        stats: {
            solved: "600+",
            rating: "2100",
            badge: "Expert",
        },
        color: "from-green-500 to-emerald-500",
        icon: "🎯",
        achievements: ["Top contributor", "Article writer", "Interview experiences shared"],
    },
    {
        title: "Codeforces",
        level: "Beginner",
        link: "https://codeforces.com/profile/yourusername",
        description: "Competitive programming and algorithmic contests",
        stats: {
            solved: "150+",
            rating: "1200",
            badge: "Pupil",
        },
        color: "from-blue-500 to-cyan-500",
        icon: "⚡",
        achievements: ["Regular contest participant", "Div 2 solver", "Growing rating"],
    },
    {
        title: "HackerRank",
        level: "Intermediate",
        link: "https://www.hackerrank.com/yourusername",
        description: "Domain-specific challenges and skill certifications",
        stats: {
            solved: "300+",
            rating: "1800",
            badge: "Gold",
        },
        color: "from-purple-500 to-pink-500",
        icon: "🌟",
        achievements: ["5-star Python", "Algorithm certified", "SQL expert"],
    },
]

const certifications = [
    {
        name: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        status: "Active",
    },
    {
        name: "Python for Data Science",
        issuer: "IBM",
        date: "2023",
        status: "Completed",
    },
    {
        name: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2023",
        status: "Completed",
    },
]

export default function TheorySkills() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const getLevelColor = (level) => {
        switch (level) {
            case "Advanced":
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
            case "Intermediate":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            case "Beginner":
                return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
        }
    }

    return (
        <section className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                        <Code2 className="w-4 h-4" />
                        Problem Solving & Theory
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Competitive Programming
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        My journey in algorithmic problem solving and competitive programming across various platforms
                    </p>
                </motion.div>

                {/* Coding Platforms */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                >
                    {theorySkills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredCard(skill.title)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-transparent overflow-hidden relative"
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                            ></div>

                            {/* Header */}
                            <div className="relative z-10 flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
                                            {skill.title}
                                        </h3>
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}
                                        >
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href={skill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                                >
                                    <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{skill.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-slate-900 dark:text-white">{skill.stats.solved}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Problems</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-slate-900 dark:text-white">{skill.stats.rating}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-slate-900 dark:text-white">{skill.stats.badge}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Badge</div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-1">
                                    <Trophy className="w-4 h-4 text-yellow-500" />
                                    Achievements
                                </h4>
                                {skill.achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Hover Effect */}
                            {hoveredCard === skill.title && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
                                >
                                    View Profile
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                            <Award className="w-4 h-4" />
                            Certifications
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Professional Certifications</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            Validated skills and knowledge through industry-recognized certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${cert.status === "Active"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                            }`}
                                    >
                                        {cert.status}
                                    </span>
                                </div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{cert.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">{cert.issuer}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Problems Solved", value: "1500+", icon: <Target className="w-6 h-6" /> },
                            { label: "Platforms Active", value: "4+", icon: <Code2 className="w-6 h-6" /> },
                            { label: "Certifications", value: "3+", icon: <Award className="w-6 h-6" /> },
                            { label: "Contest Participations", value: "50+", icon: <TrendingUp className="w-6 h-6" /> },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3">
                                    {stat.icon}
                                </div>
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
