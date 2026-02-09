"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import TheorySkills from "../components/TheorySkills"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <TheorySkills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
