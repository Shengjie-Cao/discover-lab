import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "nav.home", to: "/" },
  { key: "nav.research", to: "/research" },
  { key: "nav.people", to: "/people" },
  { key: "nav.publications", to: "/publications" },
  { key: "nav.news", to: "/news" },
  { key: "nav.joinUs", to: "/join" },
  { key: "nav.contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "zh" : "en");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-wide mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-heading text-lg font-bold text-foreground hover:text-primary transition-colors">
          {siteConfig.groupName}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ml-2 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 text-sm"
            aria-label="Toggle language"
          >
            <Languages size={18} />
            <span className="text-xs font-medium">{lang === "en" ? "中" : "EN"}</span>
          </button>
          <button
            onClick={toggleDark}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground flex items-center gap-1"
            aria-label="Toggle language"
          >
            <Languages size={18} />
            <span className="text-xs font-medium">{lang === "en" ? "中" : "EN"}</span>
          </button>
          <button
            onClick={toggleDark}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
