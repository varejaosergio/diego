import React from 'react';
import './Video.css';

function Video() {
    return (
        <div className="MyVideo">            
            <iframe title="My videos" className="YoutubeVideo" width="560" height="315" src="https://www.youtube.com/embed/tPcgPkDr09I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>            
    );
}

export default Video;
