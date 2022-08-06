import React, {useState} from 'react';
import '../../styles/Navbar.css';
import {slide as Menu} from 'react-burger-menu';
// import {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
//mport { capitalizeFirstLetter } from '../../utils/helpers';
//import {Link} from 'react-scroll';

const Navbar = () =>{
  const [nav, setNav] =useState(false);
  const handleClick = ()=> setNav(!nav);

  return (
    <div>

     
        <h2>
          <p>
            <h1 > Mayra Ibarra </h1>
          </p>
        </h2>
        {/* Main Menu */}
        <div>
          <ul className="flex-row">
            <li>

              <a href="#about">
                About Me
              </a>
            </li>
            <li>
              <a href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume">
                Resume
              </a>
            </li>
          </ul>
          {/* Hamburger Menu */}
          class Example extends React.Component{
            showSettings (event){
              event.preventDefault()
            }
          }

          {/* Mobile Menu */}
          {/* <ul className={!nav ? 'hidden' : 'absolute'}>
            <li className=''>About</li>
            <Link onClick={handleClick} to='about'>
              About
            </Link>
            <li className=''>Portfolio</li>
            <li ClassName=''>Resume</li>
            <li className=''>Contact</li>
          </ul> */}

        </div>
      
    </div>
  );
}
export default Navbar;
