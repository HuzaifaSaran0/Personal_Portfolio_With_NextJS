"use client"
import Head from "next/head"
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
    <>
      <Head>
        <title>Huzaifa Saran | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Huzaifa Saran, Full-Stack Developer specializing in scalable web applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  )
}
