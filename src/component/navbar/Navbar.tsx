import React from 'react'

// style
import './Navbar.css'
import Settings_webp from '../../images/webp/settings.webp'; 
import Home_svg from '../../images/svg/home.svg'

// router
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <section className='section_title_navbar'>
        <h1>Notes.tsx</h1>
        <div className='line line_shape'></div>
      </section>

      <section className='section_buttons_and_setting'>
        <section className="section_home">
          <NavLink to="/" className='button_home_bar'>Home</NavLink>
          <img src={Home_svg} alt="Home"/>
        </section>
        <div className="circle_for_ico_settings circle_for_ico_settings_shape">
          <img src={Settings_webp} alt="settings" className='img_settings_ico' />
        </div>
      </section>
    </nav>
  )
}

export default Navbar
