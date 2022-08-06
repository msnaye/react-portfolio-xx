import React, {useState} from 'react';
import '../../styles/Navbar.css';
// import {slide as Menu} from 'react-burger-menu';

import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
//mport { capitalizeFirstLetter } from '../../utils/helpers';


const Navbar = () =>{
  const [nav, setNav] =useState(false);
  const handleClick = ()=> setNav(!nav);

  return (
    <div className='mainContainer'>

     
        <h2>
          <p>
            <h1 > Mayra Ibarra </h1>
          </p>
        </h2>
        {/* Main Menu */}
        
          <ul className="menuContainer">
            <li className=''>About Me</li>
            <li className=''>Portfolio</li>
            <li className=''>Contact</li>
            <li className=''>Resume</li>
          </ul>

          {/*website links*/}
          <div className='links'>
            <li>
              <a className='' href='/'>Github <FaGithub /></a>
            </li>

            <li>
              <a className='' href='/'>Facebook <FaFacebook /></a>
            </li>

            <li>
              <a className='' href='/'>FaLinkedin <FaLinkedin /></a>
            </li>

          {/* Hamburger Menu */}
          <div onClick={handleClick} className='hamburgerMenu'>
            {!nav ? <FaBars /> : <FaTimes />}
          

          {/* Mobile Menu */}

          <ul className={!nav ? 'hidden' : 'absolute'}>
            <li className=''>About</li>
            <li className=''>Portfolio</li>
            <li ClassName=''>Resume</li>
            <li className=''>Contact</li>
          </ul> 

        </div>
      
    </div>
    </div>
  );
}
export default Navbar;
