import { FiDownload, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { cvData } from "../data/cv";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import TextType from "@/components/ui/TextType";

const CV_PDF_PATH = "/cv/mon-cv.pdf";

export function CvPage() {
  const { identity, summary, experience, education, skills, languages } = cvData;

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <TextType
              className="font-mono text-accent-1 text-sm mb-4"
              text={["$ cat resume.txt"]}
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
            <h1 className="font-display text-3xl text-text mb-2">
              {identity.name}
            </h1>
            <p className="font-body text-accent-1">{identity.title}</p>
          </div>

          <a
            href={CV_PDF_PATH}
            download
            className="flex items-center gap-2 bg-accent-1 text-bg font-body font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          >
            <FiDownload /> Télécharger le PDF
          </a>
        </div>

        <div className="flex flex-wrap gap-6 mb-12 font-body text-sm text-text/70">
          <span className="flex items-center gap-2">
            <FiMapPin className="text-accent-1" /> {identity.location}
          </span>
          <span className="flex items-center gap-2">
            <FiMail className="text-accent-1" /> {identity.email}
          </span>
          <span className="flex items-center gap-2">
            <FiPhone className="text-accent-1" /> {identity.phone}
          </span>
        </div>

        <p className="font-body text-text/70 leading-relaxed mb-12 max-w-2xl">
          {summary}
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="border border-accent-2/30 rounded-2xl p-8 mb-10">
          <h2 className="font-display text-xl text-accent-2 mb-8">
            Expérience
          </h2>
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-text">{exp.role}</h3>
                  <span className="font-mono text-xs text-accent-1">
                    {exp.period}
                  </span>
                </div>
                <p className="font-body text-sm text-accent-1 mb-3">
                  {exp.company}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {exp.tasks.map((task, j) => (
                    <li
                      key={j}
                      className="font-body text-sm text-text/70 flex items-start gap-2"
                    >
                      <span className="text-accent-1 mt-1">▸</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="border border-accent-2/30 rounded-2xl p-8 mb-10">
          <h2 className="font-display text-xl text-accent-2 mb-8">Formation</h2>
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="font-display text-base text-text">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-sm text-text/70">{edu.school}</p>
                </div>
                <span className="font-mono text-xs text-accent-1">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevealOnScroll>
          <div className="border border-accent-2/30 rounded-2xl p-8 h-full">
            <h2 className="font-display text-xl text-accent-2 mb-6">
              Compétences
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-accent-1 bg-accent-1/10 border border-accent-1/30 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="border border-accent-2/30 rounded-2xl p-8 h-full">
            <h2 className="font-display text-xl text-accent-2 mb-6">Langues</h2>
            <ul className="flex flex-col gap-2">
              {languages.map((lang) => (
                <li key={lang.name} className="font-body text-sm text-text/70">
                  <span className="text-text">{lang.name}</span> — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}