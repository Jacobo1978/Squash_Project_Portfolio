import AboutImage from '../../assets/about.jpg'
import './about.css'
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/cv.pdf'
import Card from '../../components/Card'
import data from './data'



const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__fichas">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__ficha">
                                <span className='about__ficha-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building customized projects.
                </p>
                <p>
                Junior: SQL, NodeJS, ReactJS, JavaScript, jQuery, HTML, CSS, Python, AWS Amazon Web Services.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About