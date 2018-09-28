import React from 'react';
import YouTube from 'react-youtube';

const VideoProject = () => {
    const opts = {
        height: '390',
        width: '640'
    }
    return (
        <YouTube
            videoId="DTOW3MrUAX4"
            opts={opts}
            containerClassName="video"
        />
    )
}

export default VideoProject;