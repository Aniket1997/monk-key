import { useState, useEffect, useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // slim version to reduce bundle size
import { useTheme } from "@mui/material/styles"; // Import Material UI theme hook

const ParticlesBackground = () => {
  const [particleColor, setParticleColor] = useState<string>("#ffffff"); // Default white color
  const theme = useTheme(); // Use theme hook from MUI

  useEffect(() => {
    // Check the localStorage for the theme mode
    const mode = localStorage.getItem("mui-mode");

    // Set particle color based on the mode
    if (mode === "light") {
      setParticleColor(theme.palette.primary.main); // Blue for light mode
    } else {
      setParticleColor(theme.palette.text.primary); // White or default color for dark mode
    }
  }, [theme]);

  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize particles with required engine configuration
    await loadSlim(engine); // Load slim version for optimized bundle size
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container); // Log the container details (optional)
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent", // Transparent background
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
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor, // Use dynamic color
          },
          links: {
            enable: false, // No linking between particles
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
