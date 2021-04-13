import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import './styles.css';
import db from '../Firebase/Firebase';
import firebase from 'firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
   
    const sendTweet = e => {
             e.preventDefault();    
            
        db.collection('posts').add({
            displayName : "Mohannagabhiru",
            username: "mohannagabhiru",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1238452402061099009/BY7sHlQ2_400x400.jpg"
        })
            setTweetMessage("");
            setTweetImage("");
}
    return (
        <div>
           <div className="tweetbox">
           <form>
           <div className="tweetbox_avatar">
           <Avatar className="tweetbox_avatarIcon" alt="Profile pic" src="https://pbs.twimg.com/profile_images/1238452402061099009/BY7sHlQ2_400x400.jpg" />
           </div>
           <div className="tweetbox_input">
           <input type="text"
                  onChange = {(e) => setTweetMessage(e.target.value)}
                  value = {tweetMessage} 
                  placeholder="What's happening?"/>
           <input type="text"
                  onChange = {(e) => setTweetImage(e.target.value)}
                  value = {tweetImage}
                  placeholder="Any Images?"/>
           <Button className="tweetbox_button" onClick={sendTweet}>Tweet</Button>
           </div>
           </form>
           </div> 
        </div>
    )
}

export default TweetBox
