import './image-display-box.styles.scss';

const ImageDisplayBox = ({ imageUrl }) => {
  return (
    <article className='image-display-box'>
      <img alt='Searched' src={imageUrl} loading='lazy' />
    </article>
  );
};

export default ImageDisplayBox;
