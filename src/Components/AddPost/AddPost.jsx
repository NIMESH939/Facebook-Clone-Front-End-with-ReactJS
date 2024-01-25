import React from 'react'
import "./addPost.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.jpg" alt="" className="addPostPic" />
                <input placeholder='Whats in your mind...?' type="text" className="addPostInput" />
            </div>
            <hr className="postHr" />
            <div className="addPostBottom">
                <div className="addPostOption">
                    <AddPhotoAlternateIcon htmlColor='orange' className='addPhoto'/>
                    <span className="addPhotoOptionText">Add Photo/Video</span>
                </div>
                <div className="addPostOption">
                    <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                    <span className="addPhotoOptionText">Add Location</span>
                </div>
                <div className="addPostOption">
                    <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                    <span className="addPhotoOptionText">Add Tag</span>
                </div>
                <div className="addPostOption">
                    <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                    <span className="addPhotoOptionText">Go Live</span>
                </div>
                <button className="PostButton">Post</button>
            </div>
            
        </div>
    </div>
  )
}
