import './image-form.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const REGEX_URL_VALIDATION =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;

const ImageForm = ({ setImageUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className='image-form'
      onSubmit={handleSubmit(({ imageUrl }) => setImageUrl(imageUrl))}
    >
      {/* Searchbar */}
      <div className='bar'>
        <input
          {...register('imageUrl', {
            pattern: {
              // RegEx URL validation
              value: REGEX_URL_VALIDATION,
            },
            validate: {
              // No empty data
              value: data => data !== '',
            },
          })}
          className='searchbar'
          type='text'
          placeholder='Paste Image URL'
          // onChange={handleChange}
        />
        <button className='search-icon' type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* React Form Validation */}
      {errors.imageUrl?.type === 'pattern' && (
        <span className='error-message'>Invalid URL</span>
      )}
    </form>
  );
};

export default ImageForm;
