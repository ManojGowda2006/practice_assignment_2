import React from 'react'
import '../App.css'
import Likebutton from './likebutton'

function Postcard({posts}) {
   return (
    <div className="post">
    {posts.map((item) => (
      <div key={item.id} className="post-item">
        <div className="profile-info">
          <img src={item.profileImage} alt="Profile" className="profile-img" />
          <h3 className="username">{item.username}</h3>
        </div>
        <p className="content">{item.content}</p>
        <Likebutton props={item.isLiked} />
      </div>
    ))}
  </div>
  

   )
}

export default Postcard