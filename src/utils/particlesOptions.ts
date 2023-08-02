export const options = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    background: {
        color: {
            value: "#1A1A1A",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            }
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        opacity: {
            value: 0.3
        },
        move: {
            enable: true,
        },
        size: {
            value: { min: 1, max: 5 },
        },
        number: {
            limit: 20
        }
    }
}