import React from 'react';
import './VideoItem.css';

const VideoItem=(props)=>{
    return(
        <div className='video-item item' onClick={()=>props.onVideoSelect(props.videos)}>
            <img className="ui image" src={props.videos.snippet.thumbnails.medium.url} alt={props.videos.snippet.title}/>
            <div className="content">
             <div className="header">
                {props.videos.snippet.title}
             </div>
            </div>
        </div>
    );
}

export default VideoItem;