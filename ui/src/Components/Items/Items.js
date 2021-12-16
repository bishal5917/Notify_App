import React, { useState } from 'react'
import './items.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';

export default function Items({ post }) {
    const [liked, setLiked] = useState(false)

    const handleLiked = () => {
        setLiked(liked ? false : true)
    }
    return (
        <>
            <div className="sharesContainer">
                <div className="firstLine">
                    <div className="sharedInfo">
                        <span className="name">{post.name}</span>
                        <span className="time">{post.date}</span>
                    </div>
                </div>
                <div className="sharedImage">
                    <img className="shareimg" src={post.img} alt="" srcset="" />
                </div>
                <div className="indicators">
                    <FavoriteIcon onClick={handleLiked}
                        style={{ color: liked ? "red" : "white" }} />
                    <ModeCommentIcon />
                    <ShareIcon />
                </div>
            </div>
        </>
    )
}
