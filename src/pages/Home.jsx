import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-background">
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#ffffff1a_2px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_2px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="relative z-10">
        <Banner />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}