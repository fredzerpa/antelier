import './image-form.styles.scss';

const ImageForm = () => {
  return (
    <form className='image-form'>
      <div className='bar'>
        <input
          className='searchbar'
          type='text'
          title='Paste Image URL'
          placeholder='Paste Image URL'
        />
        <img className='search-icon' alt='search icon' src='/images/search.svg' />
      </div>
    </form>
  );
};

export default ImageForm;
