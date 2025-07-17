import React from "react";
import {
  footer,
  solutions,
  technologyLinks,
  aboutLinks,
  ResourcesLinks
} from "../assets/all";

const Footer = () => {
  const getSubMenu = (name) => {
    switch (name) {
        case "about":
          return aboutLinks;
      case "solutions":
        return solutions.map(({ label, link }) => ({ name: label, path: link }));
      case "technology":
        return technologyLinks;
        case "resources":
          return ResourcesLinks;
      default:
        return [];
    }
  };

  return (
    <footer className="bg-[#1637b3] rounded-3xl overflow-hidden font-sans  mb-10">
      {/* Top navigation grid */}
      <div className="max-w-6xl mx-auto px-1 sm:px-10 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-18 gap-y-10">
        {footer.map(({ title, name }) => (
          <div key={name} className="flex flex-col">
            {/* Pill button */}
            <button className="self-start bg-[#1f4dc9] border border-white/30 rounded-full px-5 py-2 text-sm mb-6 font-semibold text-white hover:bg-[#2b62df] transition-colors whitespace-nowrap">
              {title}
            </button>

            {/* Submenu links */}
            <ul className="space-y-4 text-white text-sm leading-relaxed">
              {getSubMenu(name).map(({ name, path }, i) => (
                <li key={i}>
                  <a
                    href={path}
                    className="hover:underline hover:text-[#a3b9ff] transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0f247d] px-6 sm:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-5  mx-auto ">
        {/* Logo left */}
        <a
          href="https://www.logile.com"
          aria-label="Logile: The Logic of Retail"
          className="flex items-center"
        >
          <img
            src="https://www.logile.com/wp-content/uploads/2024/09/logo.svg"
            alt="Logile Logo"
            width={115}
            height={40}
            loading="lazy"
            decoding="async"
          />
          <span className="sr-only">The Logic of Retail</span>
        </a>

        {/* Social icons center */}
        <div className="flex space-x-6 text-white text-xl">
          <a
            href="https://www.linkedin.com/company/logile/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#a3b9ff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v13H0v-13zm7.5 0h4.7v1.7h.06c.65-1.24 2.25-2.55 4.62-2.55 4.95 0 5.85 3.25 5.85 7.46v8.39h-5v-7.41c0-1.77-.03-4.05-2.46-4.05-2.46 0-2.83 1.92-2.83 3.9v7.56h-5v-13z" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/c/LogileInc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#a3b9ff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.8 6.1c-.2-.6-.8-1-1.5-1.1C16.3 4.8 12 4.8 12 4.8s-4.3 0-6.3.2c-.7.1-1.3.5-1.5 1.1C4 8 4 12 4 12s0 4 .2 5.9c.2.6.8 1 1.5 1.1 2 .2 6.3.2 6.3.2s4.3 0 6.3-.2c.7-.1 1.3-.5 1.5-1.1.2-1.9.2-5.9.2-5.9s0-4-.2-5.9zM10 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/LogileInc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#a3b9ff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.53-4.47-10-10-10S2 6.47 2 12c0 4.98 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.98 22 12z" />
            </svg>
          </a>
        </div>

        {/* Legal links + copyright container */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white text-sm whitespace-nowrap">
          <nav aria-label="Legal" className="flex space-x-8">
            <a
              href="https://www.logile.com/privacy-policy/"
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.logile.com/cookie-policy/"
              className="hover:underline"
            >
              Cookie Policy
            </a>
          </nav>

          <p>© 2025 Logile, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
