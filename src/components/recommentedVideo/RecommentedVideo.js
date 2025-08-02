import React from 'react'
import './recommentedVideo.css'
import { Link } from 'react-router-dom'
import {formatNumber, convertYouTubeDuration} from '../ViewsCalculation/ViewsCalcultion'


const RecommentedVideo = ({ posts, postId }) => {
    const recommentedPosts = posts.filter( (post) => post.id !== postId)

    return (
        <main className="recommented-videos-main-container light dark" >
            {recommentedPosts.length ?
                (recommentedPosts.map((post) => (
                    <Link to={`/post/${post.id}`} className="post-link-style"  key={post.id}>
                        <div className="recom-video-container light dark">
                            <div className="recom-img-container">
                                <img src={post.snippet.thumbnails.standard.url} alt="video thumbnail" className="recom-video-img" />
                            </div>
                            <div className="recom-video-title-and-views-container">
                                <h3 className="recom-video-title">{post.snippet.title}</h3>
                                <p className="recom-channel-name  card3">{post.snippet.channelTitle}</p>
                                <div className="recom-views-hrs card3">{formatNumber(post.statistics.viewCount)} views. {convertYouTubeDuration(post.contentDetails.duration)} ago</div>
                            </div>
                        </div>
                    </Link>
                ))) : <p>no posts</p>}
        </main>
    )
}

export default RecommentedVideo
