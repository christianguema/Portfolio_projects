import { skillsData } from "../data/skills";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import TextType from "@/components/ui/TextType";

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <RevealOnScroll>
        {/* <p className="font-mono text-accent-1 text-sm mb-3">{"$ ls skills/"}</p> */}
        <TextType
          className="font-mono text-accent-1 text-sm mb-4"
          text={["$ ls skills/", "~/ ls skills"]}
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
        <h2 className="font-display text-3xl text-text mb-12">Compétences</h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 0.1}>
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
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}