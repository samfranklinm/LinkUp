import InputOption from './InputOption';
import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header" >
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div >

            <div className="post__body">
                <p>{message}</p>
                <hr style={{
                    marginBottom: '-20px'
                }}></hr>
            </div>

            <div className="post__buttons">

                <InputOption Icon={AddOutlinedIcon} title="Connect" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
            </div>
        </div >
    )
})


export default Post;