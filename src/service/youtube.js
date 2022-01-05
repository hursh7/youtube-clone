import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostpopular',
        maxResults: 25,
        regionCode: 'kr',
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        path: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
        regionCode: 'kr',
      },
    });
    return response.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
