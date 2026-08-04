import { Link } from '@/core/i18n/navigation';
import { getJapanMetroPageCopy } from '@/content/japan-metro-page';
import { getLocale } from '@/paraglide/runtime.js';

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

export function JapanSeoContent() {
  const locale = getLocale();
  const copy = getJapanMetroPageCopy(locale);

  return (
    <div className="bg-background text-foreground">
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            {copy.h1}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm">{copy.reviewed}</p>
          <div className="text-muted-foreground mt-8 space-y-5 text-base leading-8 sm:text-lg">
            {copy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {copy.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-border bg-muted/20 rounded-2xl border p-5"
              >
                <dd className="font-serif text-3xl tracking-tight">
                  {fact.value}
                </dd>
                <dt className="mt-1 font-semibold">{fact.label}</dt>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  {fact.detail}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section id="overview">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.overviewTitle}
        </h2>
        <div className="mt-10 space-y-10">
          {copy.overviewBlocks.map((block) => (
            <div key={block.title}>
              <h3 className="text-xl font-semibold tracking-tight">
                {block.title}
              </h3>
              <div className="text-muted-foreground mt-4 space-y-4 text-base leading-8 sm:text-lg">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how-to-play">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.howToTitle}
        </h2>
        <p className="text-muted-foreground mt-6 text-base leading-8 sm:text-lg">
          {copy.howToIntro}
        </p>
        <ol className="mt-8 grid gap-4">
          {copy.steps.map((step, index) => (
            <li
              key={step.title}
              className="border-border bg-muted/15 flex gap-4 rounded-2xl border p-5"
            >
              <span className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 leading-7">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-tight">
            {copy.practiceTitle}
          </h3>
          <div className="text-muted-foreground mt-4 space-y-4 text-base leading-8 sm:text-lg">
            {copy.practiceParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="comparison">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.comparisonTitle}
        </h2>
        <p className="text-muted-foreground mt-6 text-base leading-8 sm:text-lg">
          {copy.comparisonIntro}
        </p>
        <div className="border-border mt-8 overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm sm:text-base">
            <thead className="bg-muted/50">
              <tr>
                {copy.comparisonHeaders.map((header) => (
                  <th key={header} className="px-5 py-4 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.comparisonRows.map((row) => (
                <tr key={row[0]} className="border-border border-t align-top">
                  {row.map((cell, index) => (
                    <td
                      key={cell}
                      className={
                        index === 0
                          ? 'px-5 py-4 font-medium'
                          : 'text-muted-foreground px-5 py-4 leading-7'
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-muted-foreground mt-8 space-y-4 text-base leading-8 sm:text-lg">
          {copy.comparisonAfter.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="improve">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.improveTitle}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {copy.improveBlocks.map((block) => (
            <div
              key={block.title}
              className="border-border bg-muted/15 rounded-2xl border p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {block.title}
              </h3>
              <div className="text-muted-foreground mt-4 space-y-4 leading-7">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sources">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.sourceTitle}
        </h2>
        <div className="text-muted-foreground mt-6 space-y-4 text-base leading-8 sm:text-lg">
          {copy.sourceParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {copy.sourceLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                title={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-primary/50 hover:bg-muted/30 flex h-full items-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-xl font-semibold tracking-tight">
          {copy.relatedTitle}
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {copy.relatedLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                title={link.title}
                className="border-border hover:border-primary/50 hover:bg-muted/30 flex h-full items-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq">
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {copy.faqTitle}
        </h2>
        <dl className="mt-8 space-y-4">
          {copy.faq.map((item) => (
            <div
              key={item.question}
              className="border-border rounded-2xl border p-5 sm:p-6"
            >
              <dt className="font-semibold">{item.question}</dt>
              <dd className="text-muted-foreground mt-3 leading-7">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#play"
          title={copy.playCtaTitle}
          className="bg-primary text-primary-foreground mt-10 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
        >
          {copy.playCta}
        </a>
      </Section>
    </div>
  );
}
