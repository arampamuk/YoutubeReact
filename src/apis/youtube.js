import axios from 'axios';

const KEY = 'AIzaSyDv8_5qxCOPjBBfE3jLjmWdH8hF44Dyubw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});