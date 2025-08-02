import React from 'react'
import { FaBars } from 'react-icons/fa';
import './navbar.css'
import { CgDarkMode } from "react-icons/cg";
import profileImg from '../../assets/unnamed.jpg'
import { FiBell } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import youtubeLogo from "../../assets/hd-youtube-logo-png-transparent-background-20.png"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import '@fontsource/roboto/500.css';


const Navbar = ({ slideBar, setSlideBar, theme, setTheme }) => {
  return (
      <div className="navbar-container light dark">
        <div className="menuBar-and-logo light dark ">
          <FaBars
            className="menuBar"
            onClick={() => {
              let changeSlideBar = true
              changeSlideBar = slideBar ? false : true;
              setSlideBar(changeSlideBar);
            }}
          />
          <Link to="/" className="link-style">
            <div className="logo-container light dark">
              <img src={youtubeLogo} alt="YouTube Logo" className="youtube-logo" />
              <h1 className="logo-name ">YouTube</h1>
            </div>
          </Link>
        </div>

        <div className="searchBar-and-mice light dark">
          <div className="searchBar-container light dark">
            <input type="text" placeholder="Search" className="search-input light dark" />
            <div className="search-icon-container light dark card"><CiSearch className="search-icon card" /></div>
          </div>
          <CgDarkMode className="voice-icon light dark card card4" onClick={() => { theme ? setTheme(false) : setTheme(true) }} />
        </div>

        <div className="createBtn-and-profile ligth dark">
          <div className="createBtn light dark card card4"><BsPlusLg className="plus-icon " /><span className="create-name">Create</span></div>
          <FiBell className="notification-icon" />
          <img src={profileImg} alt="profile" className="navbar-profile-image" />
        </div>

      </div>
  )
}

export default Navbar