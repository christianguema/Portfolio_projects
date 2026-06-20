import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contactLinks = [
  { label: "Email", value: "toi@example.com", href: "mailto:toi@example.com", icon: HiOutlineMail },
  { label: "GitHub", value: "github.com/ton-username", href: "https://github.com/ton-username", icon: FaGithub },
  { label: "LinkedIn", value: "linkedin.com/in/ton-username", href: "https://linkedin.com/in/ton-username", icon: FaLinkedin },
  { label: "Twitter", value: "@ton-username", href: "https://twitter.com/ton-username", icon: FaTwitter },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:toi@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-accent-1 text-sm mb-3">{"$ ping contact"}</p>
      <h2 className="font-display text-3xl text-text mb-12">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-body text-text/70 leading-relaxed mb-8 max-w-md">
            Une idée de projet, une opportunité, ou simplement envie d'échanger ?
            N'hésite pas à me contacter via le formulaire ou directement par mes
            réseaux.
          </p>

          <div className="flex flex-col gap-4">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-text/80 hover:text-accent-1 transition-colors duration-200"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full border border-accent-1/20 text-accent-1">
                  <Icon />
                </span>
                {value}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-xs text-text/60 block mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-surface border border-accent-1/20 rounded-md px-4 py-3 text-text font-body text-sm focus:outline-none focus:border-accent-1 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-text/60 block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface border border-accent-1/20 rounded-md px-4 py-3 text-text font-body text-sm focus:outline-none focus:border-accent-1 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-text/60 block mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-surface border border-accent-1/20 rounded-md px-4 py-3 text-text font-body text-sm focus:outline-none focus:border-accent-1 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-accent-1 text-bg font-body font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-200 mt-2"
          >
            Envoyer <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}