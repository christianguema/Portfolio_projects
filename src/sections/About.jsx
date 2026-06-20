export function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="bg-surface border border-accent-1/20 rounded-lg aspect-square flex items-center justify-center">
        <p className="font-mono text-text/40 text-sm">[ Photo / Avatar ]</p>
      </div>

      <div>
        <p className="font-mono text-accent-1 text-sm mb-3">{"$ whoami"}</p>
        <h2 className="font-display text-3xl text-text mb-6">À propos</h2>

        <div className="font-body text-text/70 leading-relaxed space-y-4">
          <p>
            Développeur fullstack avec une passion pour la création
            d'interfaces modernes et performantes. J'aime transformer des
            idées complexes en expériences web simples et agréables à
            utiliser.
          </p>
          <p>
            Mon approche combine rigueur technique et sens du détail visuel,
            avec une attention particulière portée à la performance et à
            l'accessibilité.
          </p>
          <p>
            En dehors du code, je m'intéresse aux nouvelles technologies web,
            au design d'interface et à l'open source.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {[
            { label: "Années d'expérience", value: "3+" },
            { label: "Projets réalisés", value: "20+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-accent-1/10 rounded-md px-4 py-3"
            >
              <p className="font-display text-2xl text-accent-1">{stat.value}</p>
              <p className="font-body text-xs text-text/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}