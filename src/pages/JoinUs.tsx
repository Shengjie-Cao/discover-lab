import { Link } from "react-router-dom";
import { Mail, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JoinUsPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const lookingFor = Array.from({ length: 5 }, (_, i) => t(`join.lookingFor.${i}`));
  const howToApply = Array.from({ length: 5 }, (_, i) => t(`join.howToApply.${i}`));
  const faq = Array.from({ length: 8 }, (_, i) => ({
    question: t(`join.faq.${i}.q`),
    answer: t(`join.faq.${i}.a`),
  }));

  return (
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading title={t("join.title")} subtitle={t("site.intro")} />

        {/* Who we look for */}
        <section className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("join.whoTitle")}</h3>
          <ul className="space-y-2">
            {lookingFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to apply */}
        <section className="mb-12 rounded-lg border border-border bg-card p-6">
          <h3 className="font-heading text-xl font-semibold text-card-foreground mb-4">{t("join.howTitle")}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t("join.howDesc")}{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>{" "}
            {t("join.howDescSuffix")}
          </p>
          <h4 className="text-sm font-semibold text-card-foreground mb-2">{t("join.checklist")}</h4>
          <ul className="space-y-1.5">
            {howToApply.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{t("join.faqTitle")}</h3>
          <div className="space-y-2">
            {faq.map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-card-foreground pr-4">{item.question}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg bg-primary text-primary-foreground p-8 text-center">
          <h3 className="font-heading text-2xl font-bold">{t("join.ctaTitle")}</h3>
          <p className="mt-2 text-sm opacity-90">{t("join.ctaDesc")}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> {t("join.ctaButton")}
          </a>
        </section>
      </div>
    </div>
  );
}
