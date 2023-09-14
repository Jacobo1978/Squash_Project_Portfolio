import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Education from './sections/education/Education';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      <Education/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
