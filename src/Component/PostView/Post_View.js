import React from 'react'
import { PostData } from '../../data'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';

function Post_View() {
  return (
    <div className='postview-container'>
      <div className='header-div'>
        <div className='insta-div'>
          <div className='insta-logo'><InstagramIcon  /></div>
          <h1>Instagram</h1>
        </div>
        <PhotoCameraIcon className='logo-pic' />
      </div>

      <div className="post-container">
        {PostData.map((post, index) => (
          <div className="card" key={index}>
            <div className="post-header">
              <div className='name-location'> 
                <h5>{post.name}</h5>
                <p>{post.location}</p>
              </div>
              <div className='three-dot'>
                <MoreHorizIcon />
              </div>
            </div>
            
            <div className="post-image">
              <img width={450} height={250} src={post.PostImage} alt="Post" className='upload-img' />
            </div>

            <div className="post-footer">
              <div className='heart'><FavoriteBorderIcon /></div>
              <div className='share'><SendIcon /></div>
              <span className='date'>{post.date.toDateString()}</span>
            </div>

            <p className="fas-fa-heart">{post.likes} Likes</p>
            <h5 className="description">{post.description}</h5>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post_View
