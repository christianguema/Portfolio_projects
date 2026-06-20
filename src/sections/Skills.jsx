import { skillsData } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-accent-1 text-sm mb-3">{"$ ls skills/"}</p>
      <h2 className="font-display text-3xl text-text mb-12">Compétences</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="bg-surface border border-accent-1/10 rounded-lg p-6 hover:border-accent-1/40 transition-colors duration-200"
          >
            <h3 className="font-display text-lg text-accent-2 mb-5">
              {group.category}
            </h3>

            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-text/80 flex items-center gap-2"
                >
                  <span className="text-accent-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}