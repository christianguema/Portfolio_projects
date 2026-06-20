import { Link } from "react-router";
import TextType from "@/components/ui/TextType";
import PixelBlast from "@/components/ui/PixelBlast";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#64FF5C"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="relative z-10">
        <TextType
          className="font-mono text-accent-1 text-sm mb-4"
          text={["</> portfolio.dev"]}
          typingSpeed={200}
          pauseDuration={1600}
          showCursor
          cursorCharacter="█"
          textColors={"#64FF5C"}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />

        <h1 className="font-display text-4xl md:text-6xl text-text leading-tight mb-6">
          Bonjour, je suis <br />
          <span className="text-accent-1">GUEMA Christian</span>
        </h1>

        <p className="font-body text-white text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Développeur fullstack passionné, je construis des expériences web
          modernes et performantes avec React, Node.js et un soupçon de
          créativité.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="bg-accent-1 text-bg font-body font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Voir mes projets
          </a>
          <Link
            to="/cv"
            className="border border-surface text-text font-body font-medium px-6 py-3 rounded-md hover:border-accent-1 hover:text-accent-1 transition-colors duration-200"
          >
            Voir mon CV
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {["React", "Node.js", "TypeScript", "Three.js"].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-accent-1 bg-accent-1/10 border border-accent-1/30 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
