import React from 'react';
import styled from 'styled-components';

const VideoBase = styled.div`
    width: 720px;
`;

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <VideoBase >
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player"/>
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