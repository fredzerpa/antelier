import './homepage.styles.scss';

// Particles
import Particles from 'react-tsparticles';
import snowPreset from '../config/tsParticles/snow.particles';

// Components
import Logo from '../components/logo/logo.component';
import VideoDisplay from '../components/video-display/video-display.component';

const HomePage = () => {
  return (
    <main className='homepage'>
      {/* Background */}
      <Particles id='tsparticles-bg' options={snowPreset} />

      {/* Logo Section */}
      <Logo />

      {/* Image Section */}
      <VideoDisplay />
    </main>
  );
};

export default HomePage;
