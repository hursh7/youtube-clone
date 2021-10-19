import React from 'react';
import styles from './video_item.module.css';


const VideoItem = ({videoItem, videoItem: { snippet }, onVideoClick, display}) =>  {   
    const displayType = display === 'basic' ? styles.basic : styles.selected;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(videoItem)}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channelTitle}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>   
    )};

export default VideoItem;