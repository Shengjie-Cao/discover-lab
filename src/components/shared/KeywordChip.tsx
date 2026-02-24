interface KeywordChipProps {
  label: string;
}

export default function KeywordChip({ label }: KeywordChipProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground">
      {label}
    </span>
  );
}
