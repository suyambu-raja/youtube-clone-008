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
      />))) : <p>No posts</p>}
    </main>
  )
}

export default Home
