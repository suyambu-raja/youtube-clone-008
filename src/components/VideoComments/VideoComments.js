import React from 'react'
import './videoComments.css'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import profile1 from '../../assets/channels4_profile (14).jpg'
import profile2 from '../../assets/channels4_profile (6).jpg'
import profile3 from '../../assets/channels4_profile (7).jpg'
import profile4 from '../../assets/channels4_profile (8).jpg'
import profile5 from '../../assets/channels4_profile (9).jpg'
import profile6 from '../../assets/channels4_profile (10).jpg'
import profile7 from '../../assets/channels4_profile (11).jpg'
import profile8 from '../../assets/channels4_profile (12).jpg'
import profile9 from '../../assets/channels4_profile (13).jpg'
import profile10 from '../../assets/channels4_profile (5).jpg'





const VideoComments = ({post}) => {

  return (
         <main className="comment-main-container light dark">
           <span className="total-comments">{post.statistics.commentCount} Comments</span>
            <div className="comment-container">
              <img src={profile1} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@Empty hand</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark ">
                  <p>Visuals, Sound, Emotions — everything is top-notch!</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile2} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@makkro pro</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>This song gives me goosebumps every time 🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile3} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@coc gamer</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Repeat button is officially broken 😍</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.9K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
            <div className="comment-container">
              <img src={profile4} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@back words</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>The beat drop hit harder than my exams!</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile5} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@new row guys</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Imagine hearing this live in concert. I’d probably forget how to breathe 😭🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile6} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@gowri game</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>I opened YouTube to check one video and now it’s been two hours of just vibing to this. Someone send help 😂</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">8K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile7} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@open up anime mathan</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Imagine hearing this live in concert. I’d probably forget how to breathe 😭🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">9K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile8} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@varmankalakal</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p> don’t know how I landed here, but I’m glad I did. This is pure gold</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
            <div className="comment-container">
              <img src={profile9} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@marvel mani</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Who else is watching this at 2AM?</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile10} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@Arise </p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Proof that good content always wins.</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile1} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@Empty hand</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark ">
                  <p>Visuals, Sound, Emotions — everything is top-notch!</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile2} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@makkro pro</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>This song gives me goosebumps every time 🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile3} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@coc gamer</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Repeat button is officially broken 😍</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.9K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
            <div className="comment-container">
              <img src={profile4} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@back words</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>The beat drop hit harder than my exams!</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile5} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@new row guys</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Imagine hearing this live in concert. I’d probably forget how to breathe 😭🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile6} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@gowri game</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>I opened YouTube to check one video and now it’s been two hours of just vibing to this. Someone send help 😂</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">8K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile7} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@open up anime mathan</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Imagine hearing this live in concert. I’d probably forget how to breathe 😭🔥</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">9K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile8} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@varmankalakal</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p> don’t know how I landed here, but I’m glad I did. This is pure gold</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
            <div className="comment-container">
              <img src={profile9} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@marvel mani</p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Who else is watching this at 2AM?</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
             <div className="comment-container">
              <img src={profile10} alt="profile" className="profile-image-on-comment" />
              <div className="details-about-comment">
                <div className="channel-name-for-comment">
                  <p className="name-of-channel">@Arise </p>
                  <p className="time-after-posted card3">1 day ago</p>
                </div>
                <div className="comment-content light dark">
                  <p>Proof that good content always wins.</p>
                </div>
                <div className="comment-like-dislike">
                  <div className="like-with-count-container"><BiLike className="like-icon-comment" /><span className="like-count-comment">1.2K</span></div>
                  <BiDislike className="dislike-icon-comment" />
                </div>
              </div>
            </div>
          </main>
   
  )
}

export default VideoComments