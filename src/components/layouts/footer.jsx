import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ton-username", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/ton-username", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com/ton-username", icon: FaTwitter },
  { label: "Email", href: "mailto:toi@example.com", icon: HiOutlineMail },
];

const quickLinks = [
  { label: "Accueil", to: "/" },
  { label: "CV", to: "/cv" },
  { label: "Blog", to: "/blog" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-bg/40 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <p className="font-display text-accent-1 text-lg mb-3">{"<Dev/>"}</p>
          <p className="font-body text-text/70 text-sm leading-relaxed max-w-xs">
            Développeur fullstack passionné, je construis des expériences web
            modernes, performantes et créatives.
          </p>
        </div>

        <div>
          <h3 className="font-display text-text text-sm tracking-wide mb-4 uppercase">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 font-body text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-text/70 hover:text-accent-1 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-text text-sm tracking-wide mb-4 uppercase">
            Me suivre
          </h3>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-bg/40 text-text/70 hover:text-accent-1 hover:border-accent-1 transition-colors duration-200"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-bg/40 py-4">
        <p className="text-center font-mono text-xs text-text/50">
          © {year} — Construit de bout en bout
        </p>
      </div>
    </footer>
  );
}