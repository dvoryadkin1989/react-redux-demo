import React from 'react';

import Post from './Post';

const renderPosts = (posts) => {
    console.log('rendering posts:', posts);
    const postImtemsList =  posts.map(post =>{
        return <li key={post.id}><Post post={post} /></li>
    });
    return <ul>{postImtemsList}</ul>;
} 

const PostList = (props) => {
    return (
        <div className='posts-list'>
            {renderPosts(props.posts)}
        </div>
    );
}

export default PostList;
