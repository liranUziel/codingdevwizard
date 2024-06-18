import './Navbar.scss'
import {toggleMenu} from './Navbar.js'
function Navbar() {
  return (
    <>
    <nav>
      <div className="nav-wrapper">
        <div className='navbar__logo'>
          <a href="/">
            Liran Uziel
          </a>
          <div className="menu-icon" id="menu-icon">
            <svg width="40" height="40" viewBox="0 0 24 24"  onClick={toggleMenu}>
              <line className="bar bar1" x1="3" y1="6" x2="21" y2="6"></line>
              <line className="bar bar2" x1="3" y1="12" x2="21" y2="12"></line>
              <line className="bar bar3" x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
        <div className="navbar__menu">
          <ul id="menu__list">
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Projects">Projects</a>
            </li>
            <li>
              <a href="/#Blog">Blog</a>
            </li>
            <li>
              <a href="/#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
