export function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex items-center gap-2 text-gold ${className}`}>
      <span className="w-10 border-t-2 border-dotted border-current" />
      <span className="grid size-4 place-items-center border border-current">
        <span className="size-1.5 bg-current" />
      </span>
      <span className="w-10 border-t-2 border-dotted border-current" />
    </span>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-eyebrow text-gold italic">{eyebrow}</p>
      <h2 className="mt-3 text-h2">{title}</h2>
      <Ornament className="mt-4 justify-center" />
      {text && <p className="mt-5 text-body text-ink-soft">{text}</p>}
    </div>
  );
}
