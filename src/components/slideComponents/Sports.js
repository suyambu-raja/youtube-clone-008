import React from 'react'
import './home.css'
import Post from '../post/Post'

const Sports = ({ posts, slideBar }) => {
  return (
     <main className="main-video-container">
      {posts.length ?
        (posts.map((post) => (
      <Post
        key={post.id}
        post={post}
        slideBar={slideBar}
      />))) : <p>no posts</p>}
    </main>
  )
}

export default Sports