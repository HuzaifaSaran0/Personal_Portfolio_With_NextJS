"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Award, TrendingUp } from "lucide-react"

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "Freelance",
        location: "Remote",
        period: "Jan 2024 - Present",
        description:
            "Built scalable web applications for clients using React, Next.js, and Django. Integrated APIs, user authentication, and payment systems.",
        achievements: [
            "Delivered 15+ client projects with 100% satisfaction rate",
            "Reduced application load times by 45% through optimization",
            "Implemented secure payment systems for e-commerce platforms",
            "Built responsive applications serving 10K+ users",
        ],
        technologies: ["React", "Next.js", "Django", "PostgreSQL", "AWS", "Stripe"],
        type: "Full-time",
        current: true,
    },
    {
        role: "Backend Developer Intern",
        company: "TechNova Inc.",
        location: "San Francisco, CA",
        period: "Jul 2023 - Dec 2023",
        description:
            "Worked on RESTful APIs using Django REST Framework. Implemented database schemas and secured endpoints with token-based authentication.",
        achievements: [
            "Developed 20+ RESTful API endpoints",
            "Improved API response time by 30%",
            "Implemented JWT authentication system",
            "Collaborated with 5-member development team",
        ],
        technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
        type: "Internship",
        current: false,
    },
    {
        role: "Programming Tutor",
        company: "Upwork",
        location: "Remote",
        period: "Mar 2023 - Jun 2023",
        description:
            "Taught Python and Django to students across the globe. Delivered customized learning paths and real-time problem solving.",
        achievements: [
            "Mentored 50+ students worldwide",
            "Maintained 4.9/5 star rating",
            "Created custom curriculum for Django development",
            "Helped students land their first developer jobs",
        ],
        technologies: ["Python", "Django", "Teaching", "Mentoring"],
        type: "Freelance",
        current: false,
    },
]

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        Professional Journey
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        My professional journey and the impact I've made across different roles and organizations
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative flex items-start mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
                                {exp.current && (
                                    <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500/20 rounded-full animate-ping"></div>
                                )}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                            >
                                <div className="group bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <ExternalLink className="w-4 h-4 text-blue-600" />
                                                    <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${exp.type === "Full-time"
                                                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                                            : exp.type === "Internship"
                                                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                                                : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                                        }`}
                                                >
                                                    {exp.type}
                                                </span>
                                                {exp.current && (
                                                    <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-medium animate-pulse">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                                    {/* Achievements */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                            <h4 className="font-semibold text-slate-900 dark:text-white">Key Achievements</h4>
                                        </div>
                                        <div className="grid gap-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Work Together?</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities and exciting projects. Let's create something amazing
                            together!
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
