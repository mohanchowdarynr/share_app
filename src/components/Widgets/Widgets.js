import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
import { TwitterTweetEmbed,TwitterVideoEmbed,TwitterTimelineEmbed } from 'react-twitter-embed';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_search">
                <SearchIcon  className = "widgets_SearchIcon" />
                <input type="text" placeholder="search twitter"/>
             </div>
             <div className="widgets_container">
                 <h2>What's happening</h2>
                 <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Mohan nagabhiru"
                    options={{height: 400}}
                 />
                 <TwitterTweetEmbed
                    tweetId={'921230215744856064'}
                 />
                 <TwitterVideoEmbed
                        id={'1304738489141850112'}
                 />
             </div>

        </div>
    )
}

export default Widgets
