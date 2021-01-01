import axios from 'axios';

const KEY = "AIzaSyCc6RtzhZvXtgO27u3fWEIuzxwhNlq7pCY";

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }    
});