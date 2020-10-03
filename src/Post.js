import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl }) {
    return (
        <div className = "post">
            <div className = "post__header">
            <Avatar
               className = "post__avatar"
               alt = "WOW"
               src = "Avatar.png"
            />
            <h3 >{username}</h3>
            </div>
            <img
               className = "post__image"
               src = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg" 
               alt = ""
            />
            <h4 className = "post__text">
             <strong>{username}</strong> {caption}</h4>        
        </div>
    );
}

export default Post; 
