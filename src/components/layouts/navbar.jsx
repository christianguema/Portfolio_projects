import { Link, NavLink } from "react-router";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Accueil", to: "/", type: "route" },
  { label: "À propos", to: "#about", type: "anchor" },
  { label: "Compétences", to: "#skills", type: "anchor" },
  { label: "Projets", to: "#projects", type: "anchor" },
  { label: "Expérience", to: "#experience", type: "anchor" },
  { label: "Contact", to: "#contact", type: "anchor" },
  { label: "CV", to: "/cv", type: "route" },
  { label: "Blog", to: "/blog", type: "route" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, toggleTheme} = useTheme()

  const handleAnchorClick = (e, to) => {
    e.preventDefault();
    setIsOpen(false);

    if (window.location.pathname !== "/") {
      window.location.href = "/" + to;
      return;
    }

    const el = document.querySelector(to);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link to="/" className="font-display text-accent-1 text-xl tracking-wide">
          {"<Dev/>"}
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <li key={link.label}>
                <a
                  href={link.to}
                  onClick={(e) => handleAnchorClick(e, link.to)}
                  className="text-text/80 hover:text-accent-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive ? "text-accent-1" : "text-text/80 hover:text-accent-1"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-accent-1/20 text-accent-1 hover:border-accent-1 transition-colors duration-200 cursor-pointer"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="md:hidden text-text text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-body text-sm bg-bg">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <li key={link.label}>
                <a
                  href={link.to}
                  onClick={(e) => handleAnchorClick(e, link.to)}
                  className="text-text/80 hover:text-accent-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive ? "text-accent-1" : "text-text/80 hover:text-accent-1"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}