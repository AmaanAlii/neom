import React from 'react'
import './VideoSection.css'
import Videocard from '../../Cards/VideoCard/Videocard'
function VideoSection() {
  return (
    <div className='videosection'>
        <div className="videosection_heading">
            <h3>Videos</h3>
        </div>
        <div className="videosection_video">
            <Videocard/>
            <Videocard/>
            <Videocard/>
            <Videocard/>
            <Videocard/>
            <Videocard/>
            <Videocard/>
        </div>
    </div>
  )
}

export default VideoSection