import { Link } from '@/core/i18n/navigation';
import {
  KOREAN_HOME_FAQS,
  KOREAN_HOME_LINES,
  KOREAN_HOME_RELATED,
  KOREAN_HOME_SOURCES,
} from '@/content/home-seo.ko';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

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

function GuideLink({ href, children }: { href: string; children: string }) {
  return (
    <p className="mt-6">
      <Link
        href={href}
        className="text-primary text-base font-medium underline-offset-4 hover:underline sm:text-lg"
      >
        {children}
      </Link>
    </p>
  );
}

function KoreanSeoContent() {
  return (
    <div className="bg-background text-foreground">
      <section id="about" className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            메트로 타이핑(메트로타이핑)
          </h1>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>
              메트로타이핑은 지하철 역 이름을 순서대로 입력하며 노선을 완주하는
              한글 타이핑 게임입니다. 공식 설명에 따르면 역 이름을 정확하게
              입력할 때마다 지하철이 다음 역으로 이동하며, 싱글 플레이에서는
              지역과 노선, 출발역과 도착역을 선택해 운행을 시작할 수 있습니다.
            </p>
            <p>
              메트로 타이핑 공식 싱글 플레이는 서울·수도권뿐 아니라 부산, 대구,
              광주, 대전과 KTX·SRT·ITX·무궁화호 선택 항목도 제공합니다. 아래에서는
              현재 사이트에 준비된 서울 지하철 노선별 가이드와 공식 기능을 기준으로
              게임 방법을 정리했습니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="lines"
        className="border-border scroll-mt-20 border-t px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            서울 지하철 노선별 역 이름 타자연습
          </h2>
          <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-relaxed sm:text-lg">
            공식 싱글 플레이 화면에는 서울·수도권 1호선부터 9호선까지와 신림선,
            신분당선, 공항철도, GTX-A 등 여러 노선이 표시됩니다. 아래 링크는 현재
            이 사이트에서 별도 가이드가 준비된 노선입니다.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {KOREAN_HOME_LINES.map((line) => (
              <Link
                key={line.href}
                href={line.href}
                className="border-border bg-muted/20 hover:bg-muted/45 rounded-xl border px-4 py-4 text-sm font-semibold transition-colors sm:text-base"
              >
                {line.label} →
              </Link>
            ))}
          </div>

          <SeoImage
            src="/imgs/screenshots/select-line.png"
            alt="메트로 타이핑 공식 플레이에서 지하철 노선을 선택하는 화면"
            width={1280}
            height={720}
          />

          <GuideLink href="/supported-lines">지원 노선 전체 보기</GuideLink>
        </div>
      </section>

      <section
        id="howto"
        className="border-border scroll-mt-20 border-t px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            메트로 타이핑 게임 방법과 기록 확인법
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            <p>
              싱글 플레이에서는 먼저 지역과 노선을 선택하고 출발역과 도착역을
              정합니다. 공식 App Store 설명에 따르면 역 이름을 정확하게 입력하면
              지하철이 다음 역으로 이동합니다. 따라서 역 이름 타자 연습을 시작할
              때는 원하는 노선과 구간을 고른 뒤 화면에 나온 역 이름을 정확하게
              입력하는 것이 기본 흐름입니다.
            </p>
            <p>
              기록을 비교하려면 같은 노선과 같은 구간처럼 조건을 맞춰 두는 편이
              결과를 해석하기 쉽습니다. 공식 랭킹에서는 평균 타수, 정확도와 완주
              기록을 확인할 수 있으므로 한 가지 숫자만 보기보다 세 항목을 함께
              확인할 수 있습니다. 노선별 랭킹 기능도 공식적으로 제공됩니다.
            </p>
            <p>
              공식 안내 기준으로 싱글 플레이와 노선 퀴즈는 로그인 없이 이용할 수
              있습니다. 프로필을 만들면 랭킹과 멀티플레이 기능을 이용할 수 있으며,
              멀티플레이는 공식 앱 설명에서 최대 4명이 같은 노선에서 동시에
              출발하는 방식으로 안내되어 있습니다.
            </p>
          </div>

          <SeoImage
            src="/imgs/screenshots/playing.png"
            alt="메트로 타이핑에서 역 이름을 입력하며 노선을 진행하는 화면"
            width={1280}
            height={800}
          />

          <GuideLink href="/how-to-play">전체 게임 방법 보기</GuideLink>
        </div>
      </section>

      <section
        id="faq"
        className="border-border scroll-mt-20 border-t px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            메트로 타이핑 역 이름 타자 FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            {KOREAN_HOME_FAQS.map((item) => (
              <div key={item.question}>
                <dt className="text-base font-semibold sm:text-lg">
                  {item.question}
                </dt>
                <dd className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <GuideLink href="/faq">FAQ 전체 보기</GuideLink>
        </div>
      </section>

      <section
        id="related"
        className="border-border scroll-mt-20 border-t px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            메트로 타이핑 관련 가이드
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {KOREAN_HOME_RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-border hover:bg-muted/40 rounded-xl border p-4 font-medium transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>

          <div className="border-border mt-10 border-t pt-6">
            <h3 className="text-sm font-semibold">정보 출처</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              지원 노선과 기능 설명은 METRO TYPING 공식 사이트·공식 싱글 플레이와
              공식 App Store 등록 정보를 기준으로 확인했습니다.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {KOREAN_HOME_SOURCES.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LocalizedSeoContent() {
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
          <GuideLink href="/how-to-play">
            {m['landing.seo.howto.read_more']()}
          </GuideLink>
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
          <GuideLink href="/supported-lines">
            {m['landing.seo.lines.read_more']()}
          </GuideLink>
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
          <GuideLink href="/tips">
            {m['landing.seo.tips.read_more']()}
          </GuideLink>
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
          <GuideLink href="/faq">{m['landing.seo.faq.read_more']()}</GuideLink>
        </div>
      </section>
    </div>
  );
}

export function SeoContent() {
  const locale = getLocale();
  return locale === 'ko' ? <KoreanSeoContent /> : <LocalizedSeoContent />;
}
