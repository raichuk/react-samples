import React from 'react';

import VideoButton from '../../components/VideoButton/VideoButton';

const ControlButton = ({ label, onClick }) => (
  <button className='VideoButton' onClick={onClick}>
    { label }
  </button>
);

const VideoPlayer = (props) => {
  const videoElement = React.useRef(null);

  React.useEffect(() => {
    videoElement.current.src = props.src;
    videoElement.current.play();
  }, [props.src]);

  const enableDownloadButton = () => {
    videoElement.current.controlsList = '';
  }

  return (
    <div className='VideoPlayerContainer'>
      <video ref={videoElement} className='VideoPlayer' controls controlsList='nodownload'>
      </video>
      <div className='VideoPlayerControlsContainer'>
        <ControlButton label='Allow download' onClick={enableDownloadButton} />
      </div>
    </div>
  );
};

export default VideoPlayer;
