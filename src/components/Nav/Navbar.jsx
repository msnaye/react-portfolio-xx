import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Navbar() {

  return (
    <div className='fixed w-full'>

      <header>
        <h2>
          <p>
            <h1 > Mayra Ibarra </h1>
          </p>
        </h2>
        {/* Menu */}
        <nav>
          <ul className="flex-row">
            <li className="mx-2">

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
          <div className='hiddend'><FaBars />
          </div>
          {/* Mobile Menu */}
          <ul className='hidden'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>Contact</li>
            <li></li>
          </ul>

        </nav>
      </header>
    </div>
  );
}
export default Navbar;
