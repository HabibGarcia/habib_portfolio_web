import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-background transition-colors duration-500">
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgb(var(--text-color)/0.15)_2px,transparent_1px),linear-gradient(to_bottom,rgb(var(--text-color)/0.15)_2px,transparent_1px)] bg-[size:40px_40px] transition-colors duration-500"></div>
      <div className="relative z-10">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}