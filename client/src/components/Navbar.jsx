import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-background dark:bg-on-surface max-w-7xl mx-auto border-b-2 border-outline-variant dark:border-outline">
      <div className="font-headline-md text-headline-md font-bold text-on-background dark:text-surface-bright flex items-center gap-2">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          emoji_symbols
        </span>
        Ol' Smokey's
      </div>
      <div className="hidden md:flex gap-item-gap items-center font-body-md text-body-md">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary translate-y-px transition-all duration-100"
                : "text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-container transition-colors"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <a
        href="#order"
        className="hidden md:inline-flex bg-primary-container text-on-primary hover:bg-secondary transition-colors px-6 py-3 uppercase font-label-bold text-label-bold rounded"
      >
        Order Online
      </a>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
