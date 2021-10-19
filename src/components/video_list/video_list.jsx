import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => (
        <ul className={styles.videolist}>
            {props.videos.map(videoItem => ( 
                <VideoItem key={videoItem.id} videoItem={videoItem} />
            ))}
        </ul>    
    );

export default VideoList;