import React from 'react'
import './home.css'
import Post from '../post/Post'

const Home = ({ posts, slideBar, setAutoPlay }) => {

  return (
    <main className="main-video-container">
      {posts.length ?
        (posts.map((post) => (
      <Post
        key={post.id}
        post={post}
        slideBar={slideBar}
        setAutoPlay={setAutoPlay}
      />))) : <h3 className="error light dark" style={{margin:"-50px -100px"}}>Youtube Api quota over for today</h3>}
    </main>
  )
}

export default Home
