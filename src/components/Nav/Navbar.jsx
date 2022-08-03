import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Navbar() {
  
  return (
    <div className='fixed w-full'>

      <header>
        <h2>
          <a>
            <h1 > Mayra Ibarra </h1>
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">

              <a href="#about">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
