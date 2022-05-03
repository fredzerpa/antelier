import './image-form.styles.scss';

const ImageForm = () => {
  return (
    <form className='image-form'>
      <div class='bar'>
        <input
          class='searchbar'
          type='text'
          title='Paste Image URL'
          placeholder='Paste Image URL'
        />
      </div>
    </form>
  );
};

export default ImageForm;
