import { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BibTexModalProps {
  bibtex: string;
  title: string;
  onClose: () => void;
}

export default function BibTexModal({ bibtex, title, onClose }: BibTexModalProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-lg shadow-xl max-w-xl w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold text-card-foreground pr-4">BibTeX — {title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1" aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <pre className="bg-muted rounded-md p-4 text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap font-mono">
          {bibtex}
        </pre>
        <button
          onClick={handleCopy}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? t("pubs.copied") : t("pubs.copyClipboard")}
        </button>
      </div>
    </div>
  );
}
