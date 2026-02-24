import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("nav.research"), to: "/research" },
    { label: t("nav.publications"), to: "/publications" },
    { label: t("nav.people"), to: "/people" },
    { label: t("nav.joinUs"), to: "/join" },
  ];

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              {siteConfig.groupName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.department}, {siteConfig.university}
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">{t("footer.external")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={siteConfig.links.googleScholar} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.links.universityDept} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.university}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.groupName}. {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
