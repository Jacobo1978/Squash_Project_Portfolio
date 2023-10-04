import Portfolio from './sections/portfolio/Portfolio';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Navbar from './sections/navbar/Navbar';
import Contact from './sections/contact/Contact';
import Skills from './sections/skills/Skills';
import Education from './sections/education/Education';
import Testimonials from './sections/testimonials/Testimonials';
import Footer from './sections/footer/Footer';

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
    </main>
  )
}

export default App
