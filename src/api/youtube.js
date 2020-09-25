import axios from 'axios';

const KEY='AIzaSyBFQ7o0jsfxZ9bGIxHqlWxvodbe-baKbFw';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        type: 'video',
        maxResults:20,
        key:KEY
    }
});