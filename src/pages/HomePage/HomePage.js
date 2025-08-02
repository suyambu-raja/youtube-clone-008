import React from 'react'
import SlideBar from '../../components/Slide bar/SlideBar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../components/slideComponents/Home'
import Gaming from '../../components/slideComponents/Gaming'
import Automobiles from '../../components/slideComponents/Automobiles'
import Sports from '../../components/slideComponents/Sports'
import Entertainment from '../../components/slideComponents/Entertainment'
import Technology from '../../components/slideComponents/Technology'
import Music from '../../components/slideComponents/Music'
import Blogs from '../../components/slideComponents/Blogs'
import News from '../../components/slideComponents/News'



const HomePage = ({ slideBar, posts, categories, setCategories,  }) => {
  return (
    <main className="main-container-for-slidebar-and-content light dark">
      <div className="slideBar-container" style={{ width: slideBar ? "200px" : "70px" }}>
        <SlideBar
          slideBar={slideBar}
          categories={categories}
          setCategories={setCategories} />
      </div>

      <div className="slide-content-container light dark">
        <Routes>
          <Route path="/" element={<Home
            posts={posts}
            slideBar={slideBar}
            
          />} />
          <Route path="/gaming" element={<Gaming
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="/automobiles" element={<Automobiles
            posts={posts}
            slideBar={slideBar}
          />} />
           <Route path="/sports" element={<Sports
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="/entertainment" element={<Entertainment
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="/technology" element={<Technology
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="music" element={<Music
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="/blogs" element={<Blogs
            posts={posts}
            slideBar={slideBar}
          />} />
          <Route path="/news" element={<News
            posts={posts}
            slideBar={slideBar}
          />} />
        </Routes>
      </div>
    </main >
  )
}

export default HomePage