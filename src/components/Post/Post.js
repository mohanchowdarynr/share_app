import { Avatar } from '@material-ui/core'
import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import './styles.css';

function Post({
                displayName,
                username,
                verified, 
                text, 
                image, 
                avatar
              }) {
    return (
        <div className="post">
          <Avatar  className="post_avatar" src={avatar} alt="" />
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName}
                        <span className = "post_headerSpecial">
                        { verified && <CheckCircleIcon className = "post_badge" />}
                        @{username}
                        </span>
                        </h3>           
                    </div>
                    <div className = "post_headerDescription">
                        <h6>{text}</h6>
                    </div>
                </div>
                <img alt="" src={image} />
                <div className = "post_footer">
                    <ChatBubbleOutlineIcon className="post_footerIcons" fontSize = "small" /> 
                    <RepeatIcon className="post_footerIcons" fontSize = "small" />
                    <FavoriteBorderIcon className="post_footerIcons" fontSize = "small" />
                    <ShareIcon className="post_footerIcons" fontSize = "small" />
                </div>
            </div>
        </div>
    )
}

export default Post
