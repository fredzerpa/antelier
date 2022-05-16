import { useEffect, useState } from 'react';
import './image-display.styles.scss';

// Components
import ImageDisplayBox from '../image-display-box/image-display-box.component';
import ImageForm from '../image-form/image-form.component';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <section id='image-display'>
      {/* Url Searchbar */}
      <ImageForm setImageUrl={setImageUrl} />
      {/* Image Box */}
      {imageUrl ? <ImageDisplayBox imageUrl={imageUrl} /> : null}
    </section>
  );
};

export default ImageDisplay;
