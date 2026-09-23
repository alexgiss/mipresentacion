import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
