import React,{useState,useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username : "vishnu",
      caption : "nike T-shirt", 
      imageUrl : "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png",
    },
    {
      username : "vishnu",
      caption : "nike T-shirt", 
      imageUrl : "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png",
    }
  ]);
   
  useEffect(() => {
     db.collection('posts').onSnapshot(snapshot => {
       setPosts(snapshot.docs.map(doc => doc.data()));
     })
  },[]);

  return (
    <div className="app">
       <div className = "app__header">
          <img
            className = "app__headerImage"
            src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt = ""
          />
       </div>
       <h1>hello World</h1>
       {
         posts.map(post => (
            <Post
              username = {post.username}
              caption = {post.caption}
              imageUrl = {post.imageUrl}
            />
         ))
       }
       <Post 
           username = "vishnu" 
           caption = "nike T-shirt" 
           imageUrl = "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"/>
       <Post 
           username = "verma817" 
           caption = "nike T-shirt" 
           imageUrl = "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"/>
       <Post 
           username = "greate139" 
           caption = "nike T-shirt" 
           imageUrl = "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"/>
    </div>
  );
}

export default App;
