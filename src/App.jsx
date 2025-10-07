import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { Info } from "./components/Info"
import { Action } from "./components/Action"
import Video from "./components/Video"
import Projects from "./components/Projects"
import Competencies from "./components/Competencies"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <main>
      <Header />
      <Hero />      
      <Info />
      <About />
      <Competencies /> 
      <Action />
      <Video />
      <Experience />      
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
