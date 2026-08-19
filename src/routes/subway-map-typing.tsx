import { createFileRoute } from '@tanstack/react-router';

import { Link } from '@/core/i18n/navigation';
import { localeSeoLinks } from '@/core/i18n/seo';
import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { GameEmbed } from '@/blocks/game-embed';
import { Header } from '@/blocks/header';

const PAGE_PATH = '/subway-map-typing';
const GAME_URL = 'https://metrotyping.kr/';
const RANKING_URL = 'https://metrotyping.kr/ranking';
const META_TITLE = '지하철 노선도 타이핑 - 서울 지하철 노선도 완주 게임';
const META_DESCRIPTION =
  '지하철 노선도 타이핑 - 서울·수도권 지하철 역 이름을 순서대로 입력하며 노선을 완주하세요. 실제 게임 화면, 플레이 방법, 공식 랭킹, FAQ를 한 페이지에서 확인할 수 있습니다.';

const features = [
  {
    icon: '🚇',
    title: '지원 노선: 서울·수도권부터 전국 주요 도시까지',
    description:
      '서울·수도권 1~9호선과 신분당선, 경춘선, 경의중앙선, 수인분당선, 인천 1·2호선, 공항철도, GTX-A 등에서 원하는 노선을 고를 수 있습니다. 지하철 노선도 타이핑을 처음 한다면 평소 자주 이용하는 노선부터 시작하는 편이 쉽습니다.',
    image: '/imgs/screenshots/select-line.png',
    imageAlt: '지하철 노선도 타이핑 노선 선택 화면',
  },
  {
    icon: '⌨️',
    title: '실시간 타자 기록: 평균 타수·정확도·완주 흐름',
    description:
      '플레이 중에는 평균 타수와 정확도 같은 기록을 확인할 수 있고, 완주 뒤에는 결과를 다시 비교할 수 있습니다. 공식 화면에서 확인되는 지표를 기준으로 안내하며 WPM이나 콤보를 임의로 추가하지 않습니다. 지하철 노선도 타이핑은 빠르게 치는 것뿐 아니라 오타 없이 흐름을 유지하는 것이 중요합니다.',
    image: '/imgs/screenshots/playing.png',
    imageAlt: '지하철 노선도 타이핑 게임 진행 화면',
  },
  {
    icon: '🏆',
    title: '공식 리더보드에서 기록 비교',
    description:
      '공식 랭킹에서는 서버 검증을 거친 기록을 다른 플레이어와 비교할 수 있습니다. 지하철 노선도 타이핑 한 판을 끝낸 뒤 같은 노선에 다시 도전하면 개인 기록 변화도 체감하기 쉽습니다.',
    image: '/imgs/screenshots/result.png',
    imageAlt: '지하철 노선도 타이핑 완주 결과 화면',
  },
  {
    icon: '📱',
    title: '모바일에서도 이어지는 타이핑 게임',
    description:
      '웹 페이지는 모바일 브라우저에서도 열리며, 짧은 노선은 이동 중에도 가볍게 도전할 수 있습니다. 지하철 노선도 타이핑은 PC 키보드가 가장 편하지만 모바일에서도 플레이 흐름과 노선 구성을 확인할 수 있습니다.',
    image: '/imgs/screenshots/playing.png',
    imageAlt: '모바일에서도 확인할 수 있는 지하철 노선도 타이핑 화면',
  },
];

const steps = [
  {
    number: '01',
    title: '노선 선택',
    description:
      '먼저 원하는 지하철 노선을 선택하세요. 지하철 노선도 타이핑이 처음이라면 역 순서를 이미 알고 있는 출퇴근 노선이 좋습니다. 노선 선택 화면에서는 지역과 호선을 바꿀 수 있으므로 긴 노선에 바로 도전하기보다 짧고 익숙한 구간에서 리듬을 잡는 편이 편합니다.',
    image: '/imgs/screenshots/select-line.png',
    imageAlt: '지하철 노선도 타이핑 1단계 노선 선택',
  },
  {
    number: '02',
    title: '역 이름 입력',
    description:
      '운행을 시작하면 화면에 표시되는 역 이름을 정확하게 입력하세요. 맞게 입력할 때마다 다음 구간으로 진행됩니다. 지하철 노선도 타이핑은 속도만 높이려다 오타가 늘면 전체 흐름이 끊기기 때문에 정확도를 먼저 안정시키는 것이 좋습니다.',
    image: '/imgs/screenshots/playing.png',
    imageAlt: '지하철 노선도 타이핑 2단계 역 이름 입력',
  },
  {
    number: '03',
    title: '노선 완주와 기록 확인',
    description:
      '마지막 역까지 입력하면 한 판이 끝나고 결과 화면에서 기록을 확인할 수 있습니다. 지하철 노선도 타이핑 기록은 같은 노선과 방향을 반복해서 플레이할 때 비교하기 쉽습니다. 막혔던 역을 기억해 두었다가 다음 판에서 다시 확인하면 노선 기억과 한글 타자 연습을 함께 할 수 있습니다.',
    image: '/imgs/screenshots/result.png',
    imageAlt: '지하철 노선도 타이핑 3단계 완주 결과 확인',
  },
];

const faq = [
  {
    question: '지하철 노선도 타이핑은 무료인가요?',
    answer:
      '네. 지하철 노선도 타이핑은 브라우저에서 바로 시작할 수 있으며 기본 플레이를 위해 별도 설치가 필요하지 않습니다.',
  },
  {
    question: '모바일에서도 할 수 있나요?',
    answer:
      '네. 모바일 브라우저에서도 페이지를 열 수 있습니다. 다만 빠른 한글 입력이 목표라면 물리 키보드가 있는 PC 환경이 더 편할 수 있습니다.',
  },
  {
    question: '어떤 지하철 노선을 지원하나요?',
    answer:
      '서울·수도권의 1~9호선과 여러 광역·경전철 노선이 보이며, 부산·대구·광주·대전 등 지역 선택도 제공됩니다. 노선 목록은 공식 게임의 선택 화면을 기준으로 달라질 수 있습니다.',
  },
  {
    question: '회원가입이 필요한가요?',
    answer:
      '노선 선택과 기본 플레이는 바로 접근할 수 있습니다. 랭킹이나 계정 기능은 공식 사이트의 현재 정책에 따라 로그인이 요구될 수 있습니다.',
  },
  {
    question: '기록은 어떻게 확인하나요?',
    answer:
      '플레이 중 평균 타수와 정확도 같은 지표를 확인하고, 완주 후 결과 화면에서 기록을 다시 볼 수 있습니다. 지하철 노선도 타이핑 기록을 줄이려면 같은 노선을 반복해 비교해 보세요.',
  },
  {
    question: '오타가 나면 어떻게 되나요?',
    answer:
      '역 이름을 정확하게 입력해야 다음 진행으로 이어집니다. 너무 빠르게 입력하기보다 익숙하지 않은 역에서 한 박자 늦추는 편이 전체 완주에는 도움이 됩니다.',
  },
  {
    question: '지하철 노선도를 외우는 데 도움이 되나요?',
    answer:
      '지하철 노선도 타이핑은 실제 역 이름을 노선 순서에 맞춰 반복해서 보게 되므로 노선 순서를 복습하는 용도로 활용할 수 있습니다. 다만 공식 교통 안내가 필요할 때는 운영기관의 최신 노선도를 확인하세요.',
  },
  {
    question: '타자 연습용으로도 쓸 수 있나요?',
    answer:
      '네. 무작위 단어 대신 실제 역 이름을 반복 입력하므로 한글 타자 연습을 게임처럼 하고 싶은 사람에게 잘 맞습니다. 지하철 노선도 타이핑은 목표가 한 노선 완주라서 짧은 연습 세션을 만들기 쉽습니다.',
  },
  {
    question: '랭킹 기록은 이 사이트가 만든 데이터인가요?',
    answer:
      '아닙니다. 지하철 노선도 타이핑 베스트 기록 영역은 공식 Metro Typing의 랭킹 화면을 불러오는 방식이며, 임의의 TOP 10 데이터를 생성하지 않습니다.',
  },
  {
    question: '다른 노선도 타이핑 게임도 있나요?',
    answer:
      '이 사이트의 플레이 방법, 지원 노선, 기록 단축 팁과 일본 전철 타이핑 페이지를 함께 보면 비슷한 역 이름 타자 게임을 더 찾아볼 수 있습니다.',
  },
];

const relatedPages = [
  {
    eyebrow: 'GUIDE',
    title: '역 이름 타자 연습',
    description:
      '역 이름을 어떤 순서로 입력하는지 기본 플레이 흐름부터 확인하세요.',
    href: '/how-to-play',
  },
  {
    eyebrow: 'LINES',
    title: '지하철 노선도 게임',
    description:
      '지원 노선과 노선별 특징을 보고 다음에 완주할 지하철을 골라보세요.',
    href: '/supported-lines',
  },
  {
    eyebrow: 'PRACTICE',
    title: '지하철 타자 기록 줄이기',
    description:
      '정확도를 유지하면서 완주 시간을 줄이는 반복 연습 팁을 확인하세요.',
    href: '/tips',
  },
  {
    eyebrow: 'JAPAN',
    title: '기차역 타자연습',
    description:
      '다른 역 이름 타이핑을 찾는다면 일본 전철 타이핑 페이지도 이어서 즐겨보세요.',
    href: '/japan-metro-typing',
  },
];

function buildStructuredData(canonical: string) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: '지하철 노선도 타이핑',
      description: META_DESCRIPTION,
      url: canonical,
      sameAs: GAME_URL,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and a modern web browser',
      inLanguage: 'ko-KR',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '지하철 노선도 타이핑 게임 하는 법',
      description:
        '노선을 선택하고 역 이름을 순서대로 입력한 뒤 마지막 역까지 완주하는 세 단계 플레이 방법입니다.',
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description,
        image: `${envConfigs.app_url}${step.image}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Metro Typing',
          item: envConfigs.app_url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '지하철 노선도 타이핑',
          item: canonical,
        },
      ],
    },
  ];
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-primary mb-3 text-sm font-semibold tracking-[0.22em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-muted-foreground mt-4 text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SubwayMapTypingPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b bg-[radial-gradient(circle_at_top,_color-mix(in_oklch,var(--primary)_14%,transparent),_transparent_48%)] px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-primary mb-4 text-sm font-semibold tracking-[0.24em] uppercase">
              Seoul Subway Typing Game
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              지하철 노선도 타이핑 - 서울 지하철 노선도를 완주하세요
            </h1>
            <p className="text-muted-foreground mx-auto mt-5 max-w-3xl text-lg leading-8 sm:text-xl">
              역 이름을 입력하며 노선도를 따라 달리는 타이핑 게임. 지하철 노선도
              타이핑은 서울 지하철 역 이름을 순서대로 입력하고 한 노선을 끝까지
              완주하는 방식입니다. 설치 없이 브라우저에서 바로 시작할 수 있어
              익숙한 노선을 타자 연습처럼 즐길 수 있습니다.
            </p>
          </div>
        </section>

        <GameEmbed />

        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="FEATURES"
              title="메트로 타이핑으로 지하철 노선도를 정복하는 방법"
              description="지하철 노선도 타이핑의 핵심은 실제 노선 선택, 실시간 기록 확인, 완주 결과 비교입니다. 공식 Metro Typing은 서울·수도권 1호선부터 9호선은 물론 신분당선, 경의중앙선, 수인분당선, 공항철도, GTX-A 등 다양한 노선을 선택할 수 있습니다. 부산, 대구, 광주, 대전과 일부 열차 카테고리도 제공되어 한 가지 노선만 반복하는 게임보다 선택 폭이 넓습니다."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="bg-card overflow-hidden rounded-3xl border shadow-sm"
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="aspect-[16/10] w-full border-b object-cover object-top"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 text-3xl" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground mt-3 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/35 border-y px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="HOW TO PLAY"
              title="지하철 노선도 타이핑 게임 하는 법"
              description="지하철 노선도 타이핑 게임은 세 단계만 알면 바로 시작할 수 있습니다. 노선을 고르고, 화면에 표시되는 역 이름을 입력하고, 마지막 역까지 완주하면 됩니다. 처음 30초 안에 아래 흐름을 이해하면 이후에는 같은 방식으로 다른 노선에도 도전할 수 있습니다."
            />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className="bg-background grid overflow-hidden rounded-3xl border shadow-sm lg:grid-cols-2"
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className={`aspect-[16/10] h-full w-full object-cover object-top ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  />
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <span className="text-primary text-sm font-bold tracking-[0.2em]">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground mt-4 text-base leading-8">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="LIVE RECORDS"
              title="지하철 노선도 타이핑 베스트 기록"
              description="지하철 노선도 타이핑 베스트 기록은 임의로 만든 닉네임이나 숫자를 표시하지 않습니다. 아래 영역은 공식 Metro Typing 랭킹 페이지를 직접 불러와 현재 공개되는 플레이어 기록을 보여 주는 방식입니다. 공식 사이트는 기록을 서버에서 검증해 다른 승객과 순위를 비교할 수 있다고 안내하고 있습니다."
            />

            <div className="bg-card overflow-hidden rounded-3xl border shadow-sm">
              <div className="border-b px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-7">
                <div>
                  <p className="font-semibold">공식 Metro Typing 랭킹</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    실시간 기록은 원본 서비스의 공개 랭킹을 기준으로 표시됩니다.
                  </p>
                </div>
                <a
                  href={RANKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-3 inline-flex text-sm font-semibold hover:underline sm:mt-0"
                >
                  공식 랭킹 새 창에서 보기 →
                </a>
              </div>
              <iframe
                src={RANKING_URL}
                title="Metro Typing 공식 지하철 노선도 타이핑 랭킹"
                loading="lazy"
                className="h-[720px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-muted-foreground mx-auto mt-6 max-w-4xl text-center leading-7">
              랭킹 프레임이 브라우저 정책이나 네트워크 상태 때문에 보이지 않는
              경우에는 공식 랭킹 페이지를 새 창에서 확인할 수 있습니다. 지하철
              노선도 타이핑 기록을 비교할 때는 노선과 플레이 조건이 다를 수
              있으므로 숫자 하나만 보기보다 같은 조건에서 자신의 이전 기록과
              비교하는 편이 유용합니다.
            </p>
          </div>
        </section>

        <section className="bg-muted/35 border-y px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="FAQ"
              title="자주 묻는 질문 (FAQ)"
              description="지하철 노선도 타이핑을 시작하기 전에 많이 궁금해하는 무료 이용, 모바일, 지원 노선, 기록과 랭킹 관련 내용을 정리했습니다."
            />

            <div className="space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="bg-background group rounded-2xl border px-5 py-4 sm:px-6"
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">
                    {item.question}
                  </summary>
                  <p className="text-muted-foreground mt-3 leading-7">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="MORE TYPING"
              title="다른 타이핑 게임도 즐겨보세요"
              description="지하철 노선도 타이핑을 더 오래 즐기고 싶다면 플레이 방법, 지원 노선, 기록 단축 팁을 함께 확인해 보세요. 같은 주제의 페이지를 오가며 노선 선택부터 완주 기록 개선까지 이어서 볼 수 있습니다."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-card group rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-primary text-xs font-bold tracking-[0.2em]">
                    {page.eyebrow}
                  </span>
                  <h3 className="mt-3 text-xl font-bold group-hover:underline">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    {page.description}
                  </p>
                  <span className="text-primary mt-5 inline-block text-sm font-semibold">
                    자세히 보기 →
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-muted-foreground mt-10 text-center text-sm">
              <span>기능·노선·랭킹 정보 출처: </span>
              <a
                href={GAME_URL}
                target="_blank"
                rel="noreferrer"
                className="text-foreground font-medium underline underline-offset-4"
              >
                Metro Typing 공식 사이트
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/subway-map-typing')({
  loader: () => {
    const locale = getLocale();
    return { locale };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'ko';
    const { canonical, links } = localeSeoLinks(PAGE_PATH, locale);
    const ogImage = `${envConfigs.app_url}/imgs/screenshots/playing.png`;
    const structuredData = buildStructuredData(canonical);

    return {
      meta: [
        { title: META_TITLE },
        { name: 'description', content: META_DESCRIPTION },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: META_TITLE },
        { property: 'og:description', content: META_DESCRIPTION },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ko_KR' },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1280' },
        { property: 'og:image:height', content: '800' },
        {
          property: 'og:image:alt',
          content: '지하철 노선도 타이핑 게임 진행 화면',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: META_TITLE },
        { name: 'twitter:description', content: META_DESCRIPTION },
        { name: 'twitter:image', content: ogImage },
      ],
      links: [
        ...links,
        { rel: 'preconnect', href: GAME_URL },
        { rel: 'dns-prefetch', href: GAME_URL },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        },
      ],
    };
  },
  component: SubwayMapTypingPage,
});
