import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => (

  <div className="video-responsive">
    <ReactPlayer url='https://greigmcmahon.com/assets/video/video.mp4'
      playing={true}
      muted={true}
      loop={true}
      controls={false}
      width="100%"
      height="100%"
    />
  </div>
);


export default Video;