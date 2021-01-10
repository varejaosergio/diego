import React from 'react';
import styled from 'styled-components';

const VideoBase = styled.div`
    
    .videoPlayer {
        max-width: 720px;
    }

    @media (max-width: 800px) {
        .videoPlayer {
            align-items: center;
            max-width: 340px;
            margin: 0 10px 0 10px;
        }
    }
`;

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <VideoBase >
            <div className="ui embed">
                <iframe className="videoPlayer" src={videoSrc} title="Video Player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </VideoBase>
    ); 
};

export default VideoDetail;