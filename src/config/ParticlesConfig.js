const ParticlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1183.721462448409
      }
    },
    color: {
      value: '#e1e1e1'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.44093831673801875,
      random: false,
      anim: {
        enable: false,
        speed: 0.05,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 0,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 192.40944730386272,
      color: '#d4d4d4',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.25,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'bubble'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 419.58041958041963,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 2,
        duration: 2,
        opacity: 8,
        speed: 2
      },
      repulse: {
        distance: 80,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
export default ParticlesConfig;
