import React from "react"
import video from "../assets/videos/video1.mp4"

export const RegVideo = () => {
  return (
    <div className="regVideoWrapper">
      <video controls autoPlay muted loop>
        {/* autoPlay non funzione se non si selez pure MUTED!! */}
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export const Video = ({ src, title, ...props }) => {
  return (
    <div className="iframeVideoWrapper">
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}

Video.defaultProps = {
  src: "https://www.youtube.com/embed/-3_Q2v8ckN0",
  title: "the best html css tutorial ever !",
}
