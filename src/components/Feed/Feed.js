import React,{ useEffect, useState } from 'react';
import './styles.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import db from '../Firebase/Firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div className="feed">
        <div className="feed_home">
           <h1>Home</h1>
        </div>
        <TweetBox />
        {/* <Post /> */}
        {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}
        </div>
    )
}

export default Feed
