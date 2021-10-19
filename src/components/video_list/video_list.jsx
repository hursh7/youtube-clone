import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => (
        <ul className={styles.videolist}>
            {videos.map(videoItem => ( 
                <VideoItem key={videoItem.id} videoItem={videoItem} onVideoClick={onVideoClick} display={display} />
            ))}
        </ul>    
    );

export default VideoList;