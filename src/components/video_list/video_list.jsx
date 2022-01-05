import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === 'basic' ? styles.basic : styles.selected;
  return (
    <ul className={`${styles.videolist} ${displayType}`}>
      {videos.map(videoItem => (
        <VideoItem
          key={videoItem.id}
          videoItem={videoItem}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
