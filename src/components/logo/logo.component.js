import './logo.styles.scss';

import Particles from 'react-tsparticles';
import faceMask from '../../config/tsParticles/face-mask';

const Logo = () => {
  const particlesLoaded = container => {
    // Override canvas element style
    container.canvas.element.style.position = 'absolute';
  };

  return (
    <section id='logo'>
      <img alt='Antelier Logo' className='logo' src='logo.svg' />
      <Particles
        id='tsparticles-logo'
        options={faceMask}
        loaded={particlesLoaded}
      />
    </section>
  );
};

export default Logo;