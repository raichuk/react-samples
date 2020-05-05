import React from 'react';

const VideoButton = ({ label, onClick }) => (
  <button className='VideoButton' onClick={onClick}>
    { label }
  </button>
);

export default VideoButton;
