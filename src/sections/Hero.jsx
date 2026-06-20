import { Link } from "react-router";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto"
    >
      <p className="font-mono text-accent-1 text-sm mb-4">
        {"</> portfolio.dev"}
      </p>

      <h1 className="font-display text-4xl md:text-6xl text-text leading-tight mb-6">
        Bonjour, je suis <br />
        <span className="text-accent-1">GUEMA Christian</span>
      </h1>

      <p className="font-body text-text/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
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
    </section>
  );
}