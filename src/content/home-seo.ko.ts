export const KOREAN_HOME_LINES = [
  { href: '/lines/line-1', label: '서울 지하철 1호선 타자연습' },
  { href: '/lines/line-2', label: '서울 지하철 2호선 타자연습' },
  { href: '/lines/line-3', label: '서울 지하철 3호선 타자연습' },
  { href: '/lines/line-4', label: '서울 지하철 4호선 타자연습' },
  { href: '/lines/line-5', label: '서울 지하철 5호선 타자연습' },
  { href: '/lines/line-6', label: '서울 지하철 6호선 타자연습' },
  { href: '/lines/line-7', label: '서울 지하철 7호선 타자연습' },
  { href: '/lines/line-8', label: '서울 지하철 8호선 타자연습' },
  { href: '/lines/line-9', label: '서울 지하철 9호선 타자연습' },
  { href: '/lines/sillim-line', label: '신림선 역 이름 타자연습' },
] as const;

export const KOREAN_HOME_FAQS = [
  {
    question: '메트로 타이핑에서 역 이름 타자는 어떻게 하나요?',
    answer:
      '공식 싱글 플레이에서 지역과 노선을 고르고 출발역과 도착역을 설정한 뒤 시작합니다. 공식 앱 설명에 따르면 역 이름을 정확하게 입력할 때마다 지하철이 다음 역으로 이동합니다.',
  },
  {
    question: '서울 지하철 어떤 노선을 선택할 수 있나요?',
    answer:
      '공식 싱글 플레이 화면에는 서울·수도권 1호선부터 9호선까지와 경춘선, 경의중앙선, 수인분당선, 인천 1·2호선, 신분당선, 경강선, 서해선, 공항철도, 의정부경전철, 용인경전철, 우이신설선, 김포골드라인, 신림선, GTX-A가 표시됩니다.',
  },
  {
    question: '서울 말고 다른 지역 역 이름 타자도 할 수 있나요?',
    answer:
      '네. 공식 싱글 플레이 화면에는 부산, 대구, 광주, 대전과 함께 KTX, SRT, ITX, 무궁화호 선택 항목도 제공됩니다. 공식 앱 설명도 서울·수도권 외 여러 도시철도 노선을 지원한다고 안내합니다.',
  },
  {
    question: '회원가입 없이 메트로 타이핑을 할 수 있나요?',
    answer:
      '공식 App Store 설명에 따르면 싱글 플레이와 노선 퀴즈는 로그인 없이 이용할 수 있습니다. 프로필을 만들면 랭킹과 멀티플레이 기능을 이용할 수 있습니다.',
  },
  {
    question: '메트로 타이핑 기록에서는 무엇을 확인할 수 있나요?',
    answer:
      '공식 App Store 설명은 공식 랭킹에서 평균 타수, 정확도와 완주 기록을 확인할 수 있다고 안내합니다. 노선별 랭킹에도 도전할 수 있습니다.',
  },
  {
    question: '휴대폰에서도 역 이름 타자 연습을 할 수 있나요?',
    answer:
      '공식 메트로 타이핑 앱은 App Store에서 iPhone과 iPad용으로 제공됩니다. 모바일에서 공식 앱으로 역 이름 타자와 노선 완주 플레이를 이용할 수 있습니다.',
  },
  {
    question: '메트로 타이핑 앱은 무료인가요?',
    answer:
      '현재 한국 App Store 공식 등록 페이지에는 무료 앱으로 표시되어 있으며, 앱 설명에는 광고와 인앱 구매 없이 모든 운행을 즐길 수 있다고 안내되어 있습니다.',
  },
] as const;

export const KOREAN_HOME_RELATED = [
  { href: '/subway-map-typing', label: '지하철 노선도 타이핑' },
  { href: '/supported-lines', label: '메트로 타이핑 지원 노선 전체 보기' },
  { href: '/how-to-play', label: '메트로 타이핑 게임 방법' },
  { href: '/tips', label: '메트로 타이핑 기록 확인 가이드' },
  { href: '/japan-metro-typing', label: '일본 전철 타이핑' },
] as const;

export const KOREAN_HOME_SOURCES = [
  {
    href: 'https://metrotyping.kr/',
    label: 'METRO TYPING 공식 사이트',
  },
  {
    href: 'https://metrotyping.kr/single',
    label: 'METRO TYPING 공식 싱글 플레이',
  },
  {
    href: 'https://apps.apple.com/kr/app/%EB%A9%94%ED%8A%B8%EB%A1%9C-%ED%83%80%EC%9D%B4%ED%95%91/id6791242489',
    label: '메트로 타이핑 공식 App Store 페이지',
  },
] as const;
