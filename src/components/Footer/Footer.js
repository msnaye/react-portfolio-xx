import React from 'react';
import '../../styles/Footer.css';
import{ 
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

// Links to websites
const Footer = ()=>{
    return(
    
<div>
    <ul>
        <li className=''>
            <a className=''>
                Github <FaGithub/>
            </a>
        </li>

        <li className=''>
            <a className=''>
                Github <FaLinkedin/>
            </a>
        </li>
    </ul>
</div>
    )
};
export default Footer;