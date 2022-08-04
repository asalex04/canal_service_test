import React from 'react';
import './post.css'
import {Item} from "../../types";


const Post = (props: {post: Item}) => {
    const {title, body, username, company, photoUrl} = props.post
    return (
        <div className='post'>
            <div className='post__wrapper'>
                <div className='post__header'>
                    <img src={photoUrl}/>
                    <div className='post__author'>
                        <div className='post__author_title'>
                            Author: {username}
                        </div>
                        <div>
                            Company: {company.name}
                        </div>
                    </div>
                </div>
                <div>
                    {title}
                </div>
                <div className='post__body'>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Post;
