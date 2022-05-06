import './homepage.styles.scss';

// Particles
import Particles from 'react-tsparticles';
import faceMask from '../config/tsParticles/face-mask';
import snowPreset from '../config/tsParticles/snow';
import { loadFull } from 'tsparticles';

// Components
import ImageForm from '../components/image-form/image-form.component';

const HomePage = () => {

  const particlesLoaded = container => {
    console.log(container);

    // Override canvas element style
    container.canvas.element.style.position = 'absolute';
  };

  return (
    <main className='homepage'>
      {/* Header */}
      <header>
        <Particles id='tsparticles-bg' options={snowPreset} />
        <Particles
          id='tsparticles-logo'
          options={faceMask}
          loaded={particlesLoaded}
        />
        <img alt='Antelier Logo' className='logo' src='logo.svg' />
      </header>

      {/* Face Recognition */}
      <ImageForm />
    </main>
  );
};

export default HomePage;
