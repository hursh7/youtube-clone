import React from 'react';

const VideoItem = (props) => (
        <h1>{props.videoItem.snippet.title}</h1>    
    );

export default VideoItem;