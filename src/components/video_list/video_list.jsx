import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
        <ul>
            {props.videos.map(videoItem => ( 
                <VideoItem key={videoItem.id} videoItem={videoItem} />
            ))}
        </ul>    
    );

export default VideoList;