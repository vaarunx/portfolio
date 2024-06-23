import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
import Publications from './components/Publications/Publications'
import Education from './components/Education/Education'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import WorkExperience from './components/WorkExperience/WorkExperience'


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <WorkExperience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
