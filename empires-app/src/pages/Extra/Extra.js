import React from 'react';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoButton from '../../components/VideoButton/VideoButton';

import CommonVideo from '../../videos/common-version.mp4';
import UncutVideo from '../../videos/uncut-version.mp4';

const Extra = () => {
  const inputElement = React.useRef(null);
  const [ videoSrc, setVideoSrc ] = React.useState('');


  return (
    <div className='Extra'>
      <div className='VideoSelector'>
        <VideoButton label='Uncut' onClick={() => setVideoSrc(UncutVideo)}/>
        <VideoButton label='Common' onClick={() => setVideoSrc(CommonVideo)}/>
      </div>
      {
        videoSrc && <VideoPlayer src={videoSrc} />
      }
    </div>
  )
};

export default Extra;
