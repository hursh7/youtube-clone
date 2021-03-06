import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = videoItem => {
    setSelectedVideo(videoItem);
  };

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube.search(query).then(videos => setVideos(videos));
    },
    [youtube]
  );

  const reset = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onReset={reset} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail videoItem={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'selected' : 'basic'}
            // selectedVideo 가 있으면(videoItem을 클릭해서 videoDetail이 나타난 상태가 selected 기본상태가 basic)
          />
        </div>
      </section>
    </div>
  );
}

export default App;
