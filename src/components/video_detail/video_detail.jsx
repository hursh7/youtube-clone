import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ videoItem }) => (
        <section className={styles.detail}>
            <iframe className={styles.video} id="ytplayer" type="text/html" title="youtube video player" width="98%" height="600px" src={`https://www.youtube.com/embed/${videoItem.id}`} frameBorder="0" allowFullScreen></iframe>
            <h2 className={styles.title}>{videoItem.snippet.title}</h2>
            <h3 className={styles.channelTitle}>{videoItem.snippet.channelTitle}</h3>
            <pre className={styles.description}>{videoItem.snippet.description}</pre>
        </section>    
    );

export default VideoDetail;