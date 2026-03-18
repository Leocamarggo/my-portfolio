export const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: '#1A1A1A',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.6,
        },
      },
      push: {
        quantity: 3,
      },
    },
  },
  particles: {
    color: {
      value: ['#ffffff', '#02d463', '#02d463'],
    },
    links: {
      color: '#02d463',
      distance: 140,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    opacity: {
      value: { min: 0.2, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.1,
      },
    },
    move: {
      enable: true,
      speed: 0.8,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    number: {
      value: 60,
      density: {
        enable: true,
        area: 900,
      },
    },
  },
}
