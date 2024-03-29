import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import IELogo from '../img/IELogo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'  onClick={closeMobileMenu}>
          <img className='logo' src={IELogo} alt="IELogo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/shop-all'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Shop 
              {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/locations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Locations
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/user-account'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/shopping-cart'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>

        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;