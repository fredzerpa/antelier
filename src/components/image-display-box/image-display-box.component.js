import './image-display-box.styles.scss';

const ImageDisplayBox = ({imageURL}) => {
  return (
    <article className='image-display-box'>
      <img alt='Searched' src={imageURL} />
    </article>
  );
};

export default ImageDisplayBox;
