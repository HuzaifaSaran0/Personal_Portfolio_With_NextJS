"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaNodeJs,
    FaDocker,
    FaAws,
} from "react-icons/fa"
import {
    SiDjango,
    SiTailwindcss,
    SiJavascript,
    SiFirebase,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiTypescript,
    SiNextdotjs,
    SiExpress,
} from "react-icons/si"
import { Code, Database, Cloud, Wrench } from "lucide-react"

const skillCategories = {
    Frontend: {
        icon: <Code className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React", icon: <FaReact size={32} className="text-blue-500" />, level: 90 },
            { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black dark:text-white" />, level: 85 },
            { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" />, level: 88 },
            { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-600" />, level: 80 },
            { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-600" />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-600" />, level: 90 },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" />, level: 92 },
        ],
    },
    Backend: {
        icon: <Database className="w-5 h-5" />,
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Python", icon: <FaPython size={32} className="text-yellow-500" />, level: 92 },
            { name: "Django", icon: <SiDjango size={32} className="text-green-800" />, level: 88 },
            { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-600" />, level: 82 },
            { name: "Express", icon: <SiExpress size={32} className="text-gray-600" />, level: 80 },
            { name: "Java", icon: <FaJava size={32} className="text-red-600" />, level: 75 },
        ],
    },
    Database: {
        icon: <Database className="w-5 h-5" />,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-700" />, level: 85 },
            { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" />, level: 80 },
            { name: "Redis", icon: <SiRedis size={32} className="text-red-600" />, level: 75 },
            { name: "Firebase", icon: <SiFirebase size={32} className="text-yellow-500" />, level: 78 },
        ],
    },
    "Tools & Cloud": {
        icon: <Cloud className="w-5 h-5" />,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "Git", icon: <FaGitAlt size={32} className="text-orange-500" />, level: 90 },
            { name: "GitHub", icon: <FaGithub size={32} className="text-gray-800 dark:text-white" />, level: 88 },
            { name: "Docker", icon: <FaDocker size={32} className="text-blue-500" />, level: 75 },
            { name: "AWS", icon: <FaAws size={32} className="text-orange-400" />, level: 70 },
        ],
    },
}

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("Frontend")
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                        <Wrench className="w-4 h-4" />
                        Technical Expertise
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels across different domains
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {Object.entries(skillCategories).map(([category, data]) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? `bg-gradient-to-r ${data.color} text-white shadow-lg transform scale-105`
                                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg"
                                }`}
                        >
                            {data.icon}
                            <span>{category}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={selectedCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {skillCategories[selectedCategory].skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-105"
                        >
                            {/* Skill Icon and Name */}
                            <div className="flex flex-col items-center text-center mb-4">
                                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </h3>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Proficiency</span>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className={`h-full bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-full relative`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            {hoveredSkill === skill.name && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium"
                                >
                                    Expert
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                            <div className="text-slate-600 dark:text-slate-300">Technologies Mastered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                            <div className="text-slate-600 dark:text-slate-300">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
                            <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
