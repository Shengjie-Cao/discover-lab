import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Globe, GraduationCap, User } from "lucide-react";
import { people } from "@/data/people";
import { publications } from "@/data/publications";
import KeywordChip from "@/components/shared/KeywordChip";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PersonDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const person = people.find((p) => p.slug === slug);

  if (!person) {
    return (
      <div className="section-padding text-center">
        <p className="text-muted-foreground">{t("people.notFound")}</p>
        <Link to="/people" className="text-primary hover:underline text-sm mt-4 inline-block">
          ← {t("people.backToPeople")}
        </Link>
      </div>
    );
  }

  const selectedPubs = publications.filter((pub) => person.selectedPublications.includes(pub.id));

  return (
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <Link to="/people" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={14} /> {t("people.backToPeople")}
        </Link>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center shrink-0">
            <User className="text-muted-foreground" size={40} />
          </div>
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">{person.name}</h1>
            <p className="text-muted-foreground mt-1">{t(`people.role.${person.role}`)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {person.keywords.map((kw) => <KeywordChip key={kw} label={kw} />)}
            </div>
            <div className="mt-4 flex gap-4">
              {person.email && (
                <a href={`mailto:${person.email}`} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <Mail size={14} /> {person.email}
                </a>
              )}
              {person.website && (
                <a href={person.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <Globe size={14} /> Website
                </a>
              )}
              {person.scholar && (
                <a href={person.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <GraduationCap size={14} /> Scholar
                </a>
              )}
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{t("people.biography")}</h2>
          <p className="text-muted-foreground leading-relaxed">{person.bio}</p>
        </section>

        {selectedPubs.length > 0 && (
          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{t("people.selectedPubs")}</h2>
            <ul className="space-y-3">
              {selectedPubs.map((pub) => (
                <li key={pub.id} className="rounded-md border border-border bg-card p-4">
                  <p className="text-sm font-medium text-card-foreground">{pub.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pub.authors.join(", ")} — {pub.venue}, {pub.year}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {person.projects.length > 0 && (
          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{t("people.projects")}</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {person.projects.map((proj) => <li key={proj}>{proj}</li>)}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
