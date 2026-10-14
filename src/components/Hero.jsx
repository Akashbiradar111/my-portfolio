import { useEffect, useState } from "react";
import profileImage from "../assets/profile.png";
import { TextLoop } from "./core/text-loop";
import { TextShimmer } from "./core/text-shimmer";
import SecretAbout from "./SecretAbout";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span className="stat-number">+{count}</span>;
}

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Right vertical label */}
      <div className="hero-side-label">
        <span>Software Developer</span>

        <div className="side-line"></div>

        <span>2026</span>
      </div>

      {/* Main content */}
      <div className="hero-content">

        {/* Stats */}
        <div className="hero-stats">

          <div className="stat">
            <AnimatedNumber value={3} />
            <span className="stat-label">
              Selected Projects
            </span>
          </div>

          <div className="stat">
            <AnimatedNumber value={2} />
            <span className="stat-label">
              Years Experience
            </span>
          </div>

        </div>

        {/* Introduction */}
        <div className="hero-intro">

          <p className="eyebrow">
            <TextShimmer duration={1.5}>
              HELLO, I'M
            </TextShimmer>
          </p>

          <h1>
            AKASH
            <br />
            BIRADAR.
          </h1>

          <p className="hero-description">

            <span className="hero-role hero-role-desktop">

              <TextLoop
                interval={2500}
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>Software Developer</span>
                <span>AI Engineer</span>
                <span>Data Engineer</span>
                <span>ML Engineer</span>
              </TextLoop>

            </span>

            <span className="hero-role-mobile">Data Engineer</span>

            {" "}crafting
            <br />
            software, data & AI solutions.

          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="/Akash_Biradar_Resume.pdf"
              download="Akash_Biradar_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

      {/* Profile image */}
      <div className="hero-image-wrapper">
        <img
          src={profileImage}
          alt="Akash Biradar"
          className="hero-image"
        />
      </div>

      {/* Secret About */}
      <SecretAbout />

      {/* Bottom information */}
      <div className="hero-bottom">

        <div className="availability">

          <span>BASED IN INDIA</span>

          <div className="availability-line">
            <span></span>
          </div>

          <span>AVAILABLE FOR OPPORTUNITIES</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;
