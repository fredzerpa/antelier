import './homepage.styles.scss';

// Particles
import Particles from 'react-tsparticles';
import faceMask from '../config/tsParticles/face-mask';
import snowPreset from '../config/tsParticles/snow';

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
      {/* Background */}
      <Particles id='tsparticles-bg' g options={snowPreset} />

      {/* Logo */}
      <section className='logo'>
        <img alt='Antelier Logo' className='logo' src='logo.svg' />
        <Particles
          id='tsparticles-logo'
          options={faceMask}
          loaded={particlesLoaded}
        />
      </section>

      {/* Face Recognition */}
      <section className='image-form'>
        <ImageForm />
      </section>
    </main>
  );
};

export default HomePage;
