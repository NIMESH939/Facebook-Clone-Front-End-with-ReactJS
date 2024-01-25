import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/ProPic1.jpg" alt="" className="postImage" />
          <sapn className="postUserName">Harrison Edward</sapn>
          <span className="postTime">26 mins ago.</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">
          Exploring horizons, one adventure at a time.  🌍 #Wanderlust
          </div>
          <img src="/images/Man2.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/images/Like.png" alt="" className="reactionPic" />
            <img src="/images/Heart.png" alt="" className="reactionPic" />
            <img src="/images/haha.png" alt="" className="reactionPic" />
            <span className="likeCount">Jhone and 251 people </span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount"> 115 comments</span>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
