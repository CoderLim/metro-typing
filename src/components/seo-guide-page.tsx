import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import type { ResolvedSeoGuide } from '@/content/seo-guides';

export type GuideSummary = {
  slug: string;
  title: string;
  description: string;
};

export function SeoGuidePage({
  guide,
  related,
  relatedBaseHref,
  backHref,
  backLabel,
}: {
  guide: ResolvedSeoGuide;
  related: GuideSummary[];
  relatedBaseHref: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <article>
      <header className="border-border mb-8 border-b pb-6">
        <p className="text-primary mb-3 text-sm font-semibold tracking-wide">
          Metro Typing Guide
        </p>
        <h1 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
          {guide.title}
        </h1>
        <p className="text-muted-foreground mt-3 text-base leading-7">
          {guide.description}
        </p>
        <p className="text-muted-foreground mt-3 text-xs">
          Updated: {guide.updatedAt}
        </p>
      </header>

      <div className="text-foreground/90 space-y-10 text-[15px] leading-7">
        <p className="text-base leading-8">{guide.intro}</p>

        {guide.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-foreground mb-3 text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="border-border bg-muted/35 rounded-xl border p-5 md:p-6">
          <h2 className="text-foreground mb-4 text-xl font-semibold">
            Practice checklist
          </h2>
          <ul className="space-y-3">
            {guide.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="text-primary mt-1 size-4 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-medium">{guide.cta}</p>
        </section>
      </div>

      {related.length > 0 ? (
        <aside className="border-border mt-12 border-t pt-8">
          <h2 className="text-foreground text-xl font-semibold">
            Related guides
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`${relatedBaseHref}/${item.slug}`}
                className="border-border hover:bg-muted/40 group rounded-xl border p-4 transition-colors"
              >
                <h3 className="text-foreground font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-6">
                  {item.description}
                </p>
                <span className="text-primary mt-3 inline-flex items-center gap-1 text-sm font-medium">
                  Read guide
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}

      <div className="mt-10">
        <Link
          href={backHref}
          className="text-primary hover:text-primary/80 text-sm font-medium"
        >
          ← {backLabel}
        </Link>
      </div>
    </article>
  );
}
