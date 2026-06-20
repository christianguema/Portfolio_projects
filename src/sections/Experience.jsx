import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-accent-1 text-sm mb-3">{"$ cat experience.log"}</p>
      <h2 className="font-display text-3xl text-text mb-12">Expérience</h2>

      <div className="relative pl-8 border-l border-accent-1/20 flex flex-col gap-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative">
            <span className="absolute -left-9.25 top-1 w-3 h-3 rounded-full bg-accent-1 border-2 border-bg" />

            <p className="font-mono text-xs text-accent-2 mb-2">{exp.period}</p>
            <h3 className="font-display text-lg text-text mb-1">{exp.role}</h3>
            <p className="font-body text-sm text-accent-1 mb-3">{exp.company}</p>
            <p className="font-body text-sm text-text/70 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}