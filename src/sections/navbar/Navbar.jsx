import './navbar.css'
import data from './data'
//import {IoIosColorPalette} from 'react-icons/io'
import Profile_Pic from '../../assets/Profile_Pic.JPG'

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Profile_Pic} alt="Profile_Pic" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'> JR </button>
      </div>
    </nav>
  )
}

export default Navbar
