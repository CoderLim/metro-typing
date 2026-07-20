import { m } from '@/paraglide/messages.js';

function SeoImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="border-border bg-muted/30 mt-8 overflow-hidden rounded-xl border">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}

export function SeoContent() {
  const faqs = [
    { q: m['landing.seo.faq.q1'](), a: m['landing.seo.faq.a1']() },
    { q: m['landing.seo.faq.q2'](), a: m['landing.seo.faq.a2']() },
    { q: m['landing.seo.faq.q3'](), a: m['landing.seo.faq.a3']() },
    { q: m['landing.seo.faq.q4'](), a: m['landing.seo.faq.a4']() },
    { q: m['landing.seo.faq.q5'](), a: m['landing.seo.faq.a5']() },
  ];

  return (
    <div className="bg-background text-foreground">
      <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            {m['landing.seo.h1']()}
          </h1>
          <h2 className="mt-10 font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.about.title']()}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>{m['landing.seo.about.p1']()}</p>
            <p>{m['landing.seo.about.p2']()}</p>
            <p>{m['landing.seo.about.p3']()}</p>
          </div>
          <SeoImage
            src="/imgs/screenshots/select-line.png"
            alt={m['landing.seo.img.select_alt']()}
            width={1280}
            height={720}
            priority
          />
        </div>
      </section>

      <section
        id="howto"
        className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.howto.title']()}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>{m['landing.seo.howto.p1']()}</p>
            <p>{m['landing.seo.howto.p2']()}</p>
            <SeoImage
              src="/imgs/screenshots/playing.png"
              alt={m['landing.seo.img.playing_alt']()}
              width={1280}
              height={800}
            />
            <p>{m['landing.seo.howto.p3']()}</p>
            <p>{m['landing.seo.howto.p4']()}</p>
          </div>
        </div>
      </section>

      <section
        id="lines"
        className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.lines.title']()}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>{m['landing.seo.lines.p1']()}</p>
            <SeoImage
              src="/imgs/screenshots/result.png"
              alt={m['landing.seo.img.result_alt']()}
              width={1280}
              height={800}
            />
            <p>{m['landing.seo.lines.p2']()}</p>
            <p>{m['landing.seo.lines.p3']()}</p>
          </div>
        </div>
      </section>

      <section
        id="tips"
        className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.tips.title']()}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>{m['landing.seo.tips.p1']()}</p>
            <p>{m['landing.seo.tips.p2']()}</p>
            <p>{m['landing.seo.tips.p3']()}</p>
          </div>
        </div>
      </section>

      <section
        id="audience"
        className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.audience.title']()}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>{m['landing.seo.audience.p1']()}</p>
            <p>{m['landing.seo.audience.p2']()}</p>
            <p>{m['landing.seo.audience.p3']()}</p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-border scroll-mt-20 border-t px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            {m['landing.seo.faq.title']()}
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="text-base font-semibold">{item.q}</dt>
                <dd className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
