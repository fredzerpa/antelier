import './image-display-box.styles.scss';

const VideoDisplayBox = ({ imageUrl }) => {
  return (
    <article className='image-display-box'>
      <img alt='Searched' src={imageUrl} loading='lazy' />
    </article>
  );
};

export default VideoDisplayBox;
