import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmojiShape } from "@tsparticles/shape-emoji";
import { Container } from "../shared/Container";

export const Screen = () => {
  const [init, setInit] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmojiShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        shape: {
          type: "emoji",
          options: {
            emoji: {
                value: ["💕", "💸", "💰", "🤩"],
            },
          },
        },
        size: {
          value: 14, 
          random: false, 
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
          outModes: { default: "bounce" },
          direction: "out",
        },
        number: {
         value: isMobile ? 20 : 60,
          // density: { enable: true, area: 800 },
        },
        opacity: { value: { min: 0.5, max: 1 } }, 
        position: {
          x: 50,
          y: 50,
        },
        render: {
          fill: true, 
          stroke: {
            width: 0, 
            color: "transparent",
          },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative mb-[160px] sm:mb-[110px]">
      <Container>
        <div className="relative">
          <picture>
            <source srcSet="/assets/screen_mob.png" media="(max-width: 768px)" />
            <img src="/assets/screen.png" alt="screen" className="scale-110 md:scale-100 sm:scale-100" />
          </picture>
        </div>
      </Container>

      {init && (
        <Particles
          id="emojiParticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
        />
      )}
    </section>
  );
};

