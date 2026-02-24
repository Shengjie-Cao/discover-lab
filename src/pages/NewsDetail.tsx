import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { news } from "@/data/news";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="section-padding text-center">
        <p className="text-muted-foreground">{t("news.notFound")}</p>
        <Link to="/news" className="text-primary hover:underline text-sm mt-4 inline-block">
          ← {t("news.backToNews")}
        </Link>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <Link to="/news" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={14} /> {t("news.backToNews")}
        </Link>

        <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground mb-4">
          {item.tag}
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{item.title}</h1>
        <p className="text-sm text-muted-foreground mt-2">{item.date}</p>

        <div className="mt-8 text-muted-foreground leading-relaxed whitespace-pre-line">{item.content}</div>
      </div>
    </div>
  );
}
