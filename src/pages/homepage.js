import './homepage.styles.scss';

// Particles
import Particles from 'react-tsparticles';
import snowPreset from '../config/tsParticles/snow';

// Components
import Logo from '../components/logo/logo.component';
import ImageDisplay from '../components/image-display/image-display.component';
import NavigationHeader from '../components/navigation-header/navigation-header.component';

const HomePage = () => {
  return (
    <main className='homepage'>
      {/* Background */}
      <Particles id='tsparticles-bg' options={snowPreset} />

      {/* Navigation Section */}
      <NavigationHeader />

      {/* Logo Section */}
      <Logo />

      {/* Image Section */}
      <ImageDisplay />
    </main>
  );
};

export default HomePage;
