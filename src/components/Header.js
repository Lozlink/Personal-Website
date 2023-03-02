import { Component } from "react";
import { NavLink } from 'react-router-dom'
import './styles/header.scss'
import { Link, animateScroll as scroll } from "react-scroll";

function NavigationBar() {
  return (
    <div className="nav-bar">
     <ul className="nav-list">
      <li>
        <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='/'>
          Home Page
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='projects'>
          Projects
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='tech-stack'>
          Tech Stack
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='experience'>
          Experience
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='education'>
          Education
      </Link>
      </li>
      <li>
        <a href={require('../files/Mark Mekhayl CV.pdf')} download>Resume</a>
      </li>
      <li>
      <Link
        activeClass="active"
        className='nav-links'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to='contact'>
          Contact
      </Link>
      </li>
     </ul>
    </div>
  )
}

export default NavigationBar
