import Profile_Pic from '../../assets/Profile_Pic.JPG'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Profile_Pic} alt="Header Portait" />
        </div>
        <h3>Jacob Ruiz</h3>
        <p>
        Self-disciplined, proactive, problem solver, accountable, statistics oriented. Scrum Master, Project Manager, Product Manager.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact me</a>
          <a href="#portfolio" className='btn light'>Portfolio</a>
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