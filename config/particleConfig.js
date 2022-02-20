const particlesConfig = 
{
    
    background: {
        color: {
            value: "rgb(8, 8, 44)"
        }

    },
    fullScreen: {
        zIndex: -1
    },

    
    particles: {
        color: {
            value: "rgb(153, 153, 167)"
        },
        links: {
            color: {
                value: "#ffffff"
            },
            distance: 150,
            opacity: 0.4
        },
        move: {
            attract: {
                rotate: {
                x: 600,
                y: 600
                }
            },
            enable: true,
            outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            },
            random: true,
            speed: 1
        },
        number: {
            density: {
                enable: true
            },
            value: 50
        },
        opacity: {
            random: {
                enable: true
            },
            value: {
                min: 0,
                max: 1
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0
            }
        },
        size: {
            random: {
                enable: true
            },
            value: {
                min: 1,
                max: 3
            },
            animation: {
                speed: 4,
                minimumValue: 0.3
            }
        }
    }
      
};

export default particlesConfig;