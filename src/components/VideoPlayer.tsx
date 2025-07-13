import React from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-40 sm:h-56 md:h-72 lg:h-96 xl:h-full object-cover rounded"
    ></video>
  );
};

export default VideoPlayer;
