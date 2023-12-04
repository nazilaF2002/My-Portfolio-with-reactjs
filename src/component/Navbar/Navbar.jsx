// here is my imports 
// I used this component inside of App component
import './Navbar.css'
import brandImage from './../images/images (8).jpg'
import { useState } from 'react';
import { NavbarLinksData } from './NavData';
import { Link } from 'react-scroll';

export default function Navbar() {
  // according this states my navbar will apear either be hiddent in toggler Icon or no 
  const [active, setActive] = useState("nav__menue");
  const [togglerIcon, setTogglerIcon] = useState('nav__toggler');
  const [activeLink, setActiveLink] = useState(null);
  const navToggle = () => {
    active === 'nav__menue' ? setActive('nav__menue nav__active') : setActive('nav__menue');
    // toggler Icon
    togglerIcon === "nav__toggler" ? setTogglerIcon('nav__toggler toggle') : setTogglerIcon('nav__toggler');
  }
  return (
    // here I used map function to print my nav items dynamicaly
    <nav className="nav">
      
      <Link to="/" className="brand"><img src={brandImage} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /></Link>
      <ul className={active}>
        {
          NavbarLinksData.map((item)=>(
            <li className="nav__item mb-5 mb-lg-0" key={item.id}>
            <Link to={item.id} spy={true} smooth={true} offset={-50} duration={100} className={`nav__link ${item.id === activeLink ? 'active' : ''}`}>
            <span className="item__name">{item.name}</span> {item.icon}
            </Link>
           </li>
         ))
        }
      </ul>
      {/* here is my toggler Icon div */}
      <div onClick={navToggle} className={togglerIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}