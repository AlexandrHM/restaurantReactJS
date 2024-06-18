import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Inicio</a></li>
        <li className="p__opensans"><a href="#about">Nosotros</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Reseñas</a></li>
        <li className="p__opensans"><a href="#contact">Contacto</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans" >Iniciar / Registro </a>
        <div />
        <a href="/" className="p__opensans">Platillos</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#home">Inicio</a></li>
            <li className="p__opensans"><a href="#about">Nosotros</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Reseñas</a></li>
            <li className="p__opensans"><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
