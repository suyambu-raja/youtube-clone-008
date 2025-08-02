import React from 'react'
import {Link}  from 'react-router-dom'
import {formatNumber, convertYouTubeDuration} from './../ViewsCalculation/ViewsCalcultion'

const post = ({post, slideBar, }) => {
  const {snippet , statistics,  contentDetails} = post
  
  return (
    <div>
        <Link to={`/post/${post.id}`} className="post-link-style">
          <div className={slideBar ? "video-container light dark" : "big-video-container light dark"} 
          key={post.id}
          >
            <div className={slideBar ? "img-container" : "big-img-container"}> 
              <img src={snippet.thumbnails.standard.url} alt="video thumbnail" className={slideBar ? "video-img" : "big-video-img"} />
            </div>
            <div className="video-title-and-views-container">
              <h3 className="video-title">{snippet.title}</h3>
              <p className="channel-name card3">{snippet.channelTitle}</p>
              <div className="views-hrs card3">{formatNumber(statistics.viewCount)} views . {convertYouTubeDuration(contentDetails.duration)} ago</div>
            </div>
          </div> </Link>
    </div>
  )
}

export default post