import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({ title, subtitle, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      {children}
    </div>
  );
}
