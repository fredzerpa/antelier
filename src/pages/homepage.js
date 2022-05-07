import './homepage.styles.scss';

// Particles
import Particles from 'react-tsparticles';
import faceMask from '../config/tsParticles/face-mask';
import snowPreset from '../config/tsParticles/snow';

// Components
import ImageForm from '../components/image-form/image-form.component';

const HomePage = () => {
  const particlesLoaded = container => {
    // Override canvas element style
    container.canvas.element.style.position = 'absolute';
  };

  return (
    <div className='homepage'>
      {/* Background */}
      <Particles id='tsparticles-b' g options={snowPreset} />
      <Particles
        id='tsparticles-logo'
        options={faceMask}
        loaded={particlesLoaded}
      />
      <main>
        {/* Logo */}
        <img alt='Antelier Logo' className='logo' src='logo.svg' />

        {/* Face Recognition */}
        <ImageForm />
      </main>
    </div>
  );
};

export default HomePage;
