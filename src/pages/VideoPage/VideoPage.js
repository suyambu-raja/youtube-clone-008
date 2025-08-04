import React from 'react'
import './videoPage.css'
import { useParams } from 'react-router-dom'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import VideoComments from '../../components/VideoComments/VideoComments'
import RecommentedVideo from '../../components/recommentedVideo/RecommentedVideo'
import profile1 from '../../assets/OIP.jpeg'
import { formatNumber} from '../../components/ViewsCalculation/ViewsCalcultion'
import moment from 'moment'


const VideoPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => String(post.id) === String(id));

  return (
    <main className="video-page-main-container light dark">
      {post ? (
        <div className="video-and-comment-container light dark">
          <div className="videoPlayer-container">
            <iframe
              muted
              playsInline
              className="video-box"
              src={`https://www.youtube.com/embed/${post.id}?autoPlay=1`}
              title={post.snippet.title}
            />

            <div className="video-title-content">{post.snippet.title}</div>
            <div className="views-hrs-content card3">{formatNumber(post.statistics.viewCount)} views . {(moment(post.snippet.publishedAt)).fromNow()}</div>
            <div className="profile-and-buttons-container">
              <div className="channel-details">
                <img src={profile1} alt="profile" className="profile-image" />
                <div className="channel-and-subscribers-container light dark">
                  <div className="channel-name-for-video light dark">{post.snippet.channelTitle}</div>
                  <div className="total-subscribers card3">20M subscribers</div>
                </div>
                <button className="subscribe-btn card2">Subscribe</button>
              </div>
              <div className="like-share-download-btn-container light dark">
                <div className="like-and-unlike-btn light dark card">
                  <BiLike className="like-icon" /><span className="like-count">1.2K</span>
                  <hr></hr>
                  <BiDislike className="dislike-icon" />
                </div>
                <div className="share-btn light dark card"><RiShareForwardLine className="share-icon" /> Share</div>
                <div className="download-btn light dark card"><LiaDownloadSolid className="download-icon" /> Download</div>
              </div>
            </div>
          </div>
          <VideoComments
            post={post}
          />
        </div>
      ) : (
        <p>Video not found</p>
      )}
      <RecommentedVideo
        posts={posts}
        postId={post.id}
      />
    </main>
  );
}

export default VideoPage
