import React from 'react'
import { Link } from 'react-router-dom'
import './sliderBar.css'
import gamingIcon from '../../assets/game_icon.png'
import automobilesIcon from '../../assets/automobiles.png'
import sportsIcon from '../../assets/sports.png'
import entertainmentIcon from '../../assets/entertainment.png'
import technologyIcon from '../../assets/tech.png'
import musicIcon from '../../assets/music.png'
import blogsIcon from '../../assets/blogs.png'
import newsIcon from '../../assets/news.png'
import homeIcon from '../../assets/home.png'
import parithabangalIcon from '../../assets/channels4_profile (1).jpg'
import superSimpleDevIcon from '../../assets/channels4_profile (4).jpg'
import kisthenicsIcon from '../../assets/channels4_profile.jpg'
import sonyMusicSouthIcon from '../../assets/channels4_profile (3).jpg'
import a2dChannelIcon from '../../assets/channels4_profile (2).jpg'

const SlideBar = ({ slideBar, categories, setCategories }) => {
  return (
    <div className="slideBar-container light dark" style={{ width: slideBar ? "200px" : "70px" }}>
      <ul className="large-slide light dark" style={{ width: slideBar ? "200px" : "70px" }}  >
        <li className="link-container light dark" onClick={() => setCategories(0)}>
          <Link to='/' className="slideBar-links ">
            <img src={homeIcon} className={`sliderBar-img ${categories === 0 ? "change-style" : ""}`} alt="Home" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Home</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(20)}>
          <Link to='/gaming' className="slideBar-links ">
            <img src={gamingIcon} className={`sliderBar-img   ${categories === 20 ? "change-style" : ""}`} alt="Gaming" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Gaming</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(2)}>
          <Link to='/automobiles' className="slideBar-links ">
            <img src={automobilesIcon} className={`sliderBar-img   ${categories === 2 ? "change-style" : ""}`} alt="Automobiles" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Automobiles</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(17)}>
          <Link to='/sports' className="slideBar-links ">
            <img src={sportsIcon} className={`sliderBar-img   ${categories === 17 ? "change-style" : ""}`} alt="Sports" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Sports</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(24)}>
          <Link to='/entertainment' className="slideBar-links ">
            <img src={entertainmentIcon} className={`sliderBar-img   ${categories === 24 ? "change-style" : ""}`} alt="Entertainment" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Entertainment</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(28)}>
          <Link to='/technology' className="slideBar-links ">
            <img src={technologyIcon} className={`sliderBar-img   ${categories === 28 ? "change-style" : ""}`} alt="Technology" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Technology</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(10)}>
          <Link to='/music' className="slideBar-links ">
            <img src={musicIcon} className={`sliderBar-img   ${categories === 10 ? "change-style" : ""}`} alt="Music" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Music</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(22)}>
          <Link to='/blogs' className="slideBar-links ">
            <img src={blogsIcon} className={`sliderBar-img   ${categories === 22 ? "change-style" : ""}`} alt="Blogs" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>Blogs</span>
          </Link>
        </li>
        <li className="link-container light dark" onClick={() => setCategories(25)}>
          <Link to='/news' className="slideBar-links ">
            <img src={newsIcon} className={`sliderBar-img   ${categories === 25 ? "change-style" : ""}`} alt="News" />
            <span className="slideBar-text light dark" style={{ display: slideBar ? "block" : "none" }}>News</span>
          </Link>
        </li>

        <li className={slideBar ? "separator-bar" : "small-separator-bar"}></li>

        <li className="subscribed" style={{ display: slideBar ? "block" : "none" }}>SUBSCRIBED</li>
        <li className="channel-profile-name-container">
          <img src={superSimpleDevIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }}>SuperSimpleDev</div>
        </li>
        <li className="channel-profile-name-container">
          <img src={kisthenicsIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }} >kisthenics</div>
        </li>
        <li className="channel-profile-name-container">
          <img src={parithabangalIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }}>Parithabangal</div>
        </li>
        <li className="channel-profile-name-container">
          <img src={sonyMusicSouthIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }}>Sony Music South</div>
        </li>
        <li className="channel-profile-name-container">
          <img src={a2dChannelIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }}>A2D Channel</div>
        </li>
       {/*  <li className="channel-profile-name-container">
          <img src={ashWorkoutIcon} alt="profile" className="profile-img" />
          <div className="channel-name-edit light dark" style={{ display: slideBar ? "block" : "none" }}>Ash workout</div>
        </li> */}
      </ul>
    </div>

  )
}

export default SlideBar