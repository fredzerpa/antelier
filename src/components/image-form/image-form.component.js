import './image-form.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import ImageDisplayBox from '../image-display-box/image-display-box.component';

const ImageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = data => console.log(data);

  const handleChange = e => clearErrors(['imageUrl']);

  return (
    <form className='image-form' onSubmit={handleSubmit(onSubmit)}>
      {/* Searchbar */}
      <div className='bar'>
        <input
          {...register('imageUrl', {
            required: true,
            pattern:
              // RegEx URL validation
              /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi,
          })}
          className='searchbar'
          type='text'
          placeholder='Paste Image URL'
          onChange={handleChange}
        />
        <button className='search-icon' type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* React Form Validation */}
      {(errors.imageUrl?.type === 'pattern' ||
        errors.imageUrl?.type === 'required') && (
        <span className='error-message'>Invalid URL</span>
      )}

      {/* Image Display Box */}
      <ImageDisplayBox imageUrl={null} />
    </form>
  );
};

export default ImageForm;
