const faceMask = {
  detectRetina: false,
  fpsLimit: 30,
  fullscreen: false,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 4,
        speed: 1,
      },
    },
  },
  particles: {
    color: {
      value: '#00f1ff',
      animation: {
        enable: true,
        speed: 1,
        sync: true,
      },
    },
    lineLinked: {
      blink: false,
      color: 'random',
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.15,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2,
      },
      limit: 0,
      value: 300,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 1,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: 'rgba(255,255,255,0.2)',
      lineWidth: 0.3,
    },
    move: {
      // radius: 2,
    },
    inlineArrangement: 'equidistant',
    scale: 0.5,
    type: 'inline',
    url: '/images/tsparticles/smalldeer.svg',
  },
};

export default faceMask;
