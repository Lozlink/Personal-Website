import { Component } from "react";
import { NavLink } from 'react-router-dom'
import './styles/header.scss'

function NavigationBar() {
  return (
    <div className="nav-bar">
     <ul className="nav-list">
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio'>
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/projects'>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/tech-stack'>
          Tech Stack
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/experience'>
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/education'>
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/resume'>
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink
        className='nav-links'
        to='/portfolio/contact'>
          Contact Me
        </NavLink>
      </li>
     </ul>
    </div>
  )
}

export default NavigationBar
