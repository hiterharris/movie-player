import React, { useState } from "react";

const VideoPlayer = () => {
  const [src, setSrc] = useState("");

  const handleChange = (event) => {
    try {
      const file = event.target.files[0];
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      {src && <video src={src} controls width="100%" />}
    </>
  );
}

export default VideoPlayer;
