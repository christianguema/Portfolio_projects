import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-accent-1 text-sm mb-3">{"$ ls projects/"}</p>
      <h2 className="font-display text-3xl text-text mb-12">Projets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-accent-1/10 rounded-lg overflow-hidden flex flex-col hover:border-accent-1/40 transition-colors duration-200"
          >
            <div className="bg-bg aspect-video flex items-center justify-center border-b border-accent-1/10">
              <p className="font-mono text-text/30 text-xs">[ Aperçu projet ]</p>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-lg text-text mb-2">
                {project.title}
              </h3>
              <p className="font-body text-sm text-text/70 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-accent-2 bg-accent-2/10 border border-accent-2/30 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-body text-accent-1 hover:opacity-80 transition-opacity duration-200"
                >
                  <FiExternalLink /> Démo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-body text-text/70 hover:text-accent-1 transition-colors duration-200"
                >
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}