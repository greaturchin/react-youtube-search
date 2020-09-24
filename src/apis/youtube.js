import axios from 'axios';

const KEY = 'AIzaSyA9R2fAW6c51wLQrxoZRSF3bNzeh2jury0';
const proxyUrl = 'https://evening-coast-62453.herokuapp.com/';

export default axios.create({
    baseURL: `${proxyUrl}https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        // type: 'video',
        maxResults: 5,
        key: KEY
    }
});