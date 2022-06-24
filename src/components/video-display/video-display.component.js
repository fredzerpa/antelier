import { useState } from 'react';
import './video-display.styles.scss';

// Components
import RecordButton from '../record-button/record-button.component';
import VideoBox from '../video-box/video-box.component';

const VideoDisplay = () => {
  const [startVideo, setStartVideo] = useState(false);

  return (
    <section id='video-display'>
      {/* Button */}
      <RecordButton startVideo={setStartVideo} />
      {/* Video Box */}
      {startVideo ? <VideoBox /> : null}
    </section>
  );
};

export default VideoDisplay;