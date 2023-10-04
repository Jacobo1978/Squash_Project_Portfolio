import './header.css'
import Profile_Pic from '../../assets/Profile_Pic.JPG'
import data from './data'


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Profile_Pic} alt="Header Portait" />
        </div>
        <h2>Jacob Ruiz</h2>
        <p>
        Self-disciplined, proactive, problem solver, accountable, statistics oriented. Scrum Master, Project Manager, Product Manager, ReactJS, NodeJS, JavaScript, Python, AWS Amazon Web Services.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact me</a>
          <a href="#portfolio" className='btn primary'>Portfolio</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header