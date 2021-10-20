import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = videoItem => {
    setSelectedVideo(videoItem)
  }

  const search = useCallback(query => {
      setSelectedVideo(null);
      youtube.search(query)
      .then(videos => setVideos(videos));
    }, [youtube]);

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />  
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail videoItem={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display= { selectedVideo ? 'selected' : 'basic' } />
        </div>
      </section>
    </div>
  );
}

export default App;
