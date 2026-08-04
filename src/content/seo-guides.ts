export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResolvedSeoGuide = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  intro: string;
  sections: GuideSection[];
  checklist: string[];
  cta: string;
};

type Bilingual = { ko: string; en: string };

const b = (ko: string, en: string): Bilingual => ({ ko, en });
const pick = (value: Bilingual, locale: string) =>
  locale === 'ko' ? value.ko : value.en;

const UPDATED_AT = '2026-08-04';

type LineGuideDefinition = {
  slug: string;
  name: Bilingual;
  intro: Bilingual;
  challenge: Bilingual;
  drill: Bilingual;
  benchmark: Bilingual;
  stickyPoints: Bilingual[];
  checklist: Bilingual[];
  focusStations: Bilingual[];
  sessionDetail: Bilingual;
  mistakeDetail: Bilingual;
};

const LINE_GUIDES_BASE = [
  {
    slug: 'line-1',
    name: b('서울 지하철 1호선', 'Seoul Subway Line 1'),
    intro: b(
      '1호선은 긴 구간과 여러 행선지가 섞여 있어 단순 속도전보다 구간을 고정하는 능력이 중요합니다. 같은 “1호선”이라도 선택한 출발점과 방향에 따라 체감 난도가 달라질 수 있으므로 첫 기록부터 조건을 적어 두는 편이 좋습니다.',
      'Line 1 rewards route control more than raw speed because long sections and different destinations can change the sequence you see. Record the exact start, end, and direction from the first run so later scores are genuinely comparable.'
    ),
    challenge: b(
      '가장 흔한 실수는 긴 노선 전체를 한 번에 외우려는 것입니다. 중간에 행선지나 분기 감각이 흔들리면 손은 빨라도 다음 역을 떠올리는 시간이 길어집니다.',
      'The common mistake is trying to memorize the whole network in one pass. When branch awareness slips, the pause before the next station costs more time than any keyboard delay.'
    ),
    drill: b(
      '8~12개 역 단위로 구간을 나누고, 각 구간의 첫 역과 마지막 역을 먼저 말한 뒤 입력하세요. 두 번 연속 정확하게 끝낸 구간만 다음 구간과 합치면 긴 노선도 안정적으로 연결됩니다.',
      'Split the run into blocks of eight to twelve stations. Say the first and last station of each block before typing, and only combine blocks after two clean repetitions.'
    ),
    benchmark: b(
      '기록 비교 시 출발역·도착역·방향·입력 기기를 고정하세요. 1호선에서는 최고 속도보다 오타 없이 긴 구간을 유지한 시간이 더 유용한 지표입니다.',
      'Keep the start, destination, direction, and device fixed. On Line 1, the longest error-free stretch is often a better training metric than peak words per minute.'
    ),
    stickyPoints: [
      b(
        '행선지나 분기가 달라지는 지점',
        'Points where the destination or branch changes'
      ),
      b(
        '이름 길이가 갑자기 길어지는 역',
        'Stations whose names are noticeably longer'
      ),
      b('환승역이 연속으로 나오는 구간', 'Transfer-heavy stretches'),
    ],
    checklist: [
      b(
        '오늘 연습할 출발·도착 구간을 한 개만 정하기',
        'Choose one start-to-end section for the session'
      ),
      b('방향과 행선지를 기록하기', 'Write down the direction and destination'),
      b(
        '막힌 역 세 개만 따로 재입력하기',
        'Retype only the three stations that caused pauses'
      ),
      b(
        '같은 조건으로 두 번째 기록을 남기기',
        'Run the same setup a second time'
      ),
    ],
  },
  {
    slug: 'line-2',
    name: b('서울 지하철 2호선', 'Seoul Subway Line 2'),
    intro: b(
      '2호선은 순환 구조 덕분에 반복 연습에 적합하지만, 내선·외선 방향을 바꾸면 익숙한 역 순서가 반대로 느껴집니다. 방향을 고정하지 않으면 기록이 좋아졌는지 판단하기 어렵습니다.',
      'Line 2 is ideal for repeat practice because of its loop, but switching loop direction reverses a familiar sequence. Fix one direction before comparing times.'
    ),
    challenge: b(
      '환승역이 많아 역 이름은 익숙해도 다음 역을 한 박자 늦게 떠올리기 쉽습니다. 순환선이라는 이유로 “알고 있다”고 생각해 미리 읽지 않는 것이 주요 실수입니다.',
      'The dense transfer pattern creates delayed recall even when every station name feels familiar. Confidence can make players stop reading ahead.'
    ),
    drill: b(
      '한 바퀴를 네 구간으로 나누고, 구간마다 다음 세 역을 미리 떠올리는 연습을 하세요. 첫 판은 정확도, 둘째 판은 리듬, 셋째 판은 기록 단축에 집중하면 무리하게 속도를 올리지 않아도 됩니다.',
      'Divide the loop into four quarters and preview the next three stations in each quarter. Use run one for accuracy, run two for rhythm, and run three for time.'
    ),
    benchmark: b(
      '내선과 외선 기록은 별도로 관리하세요. 같은 방향에서 오타 수와 가장 긴 멈춤 시간을 함께 적으면 실제 개선 구간이 보입니다.',
      'Track clockwise and counter-clockwise results separately. Note both typo count and the longest pause to see where improvement is real.'
    ),
    stickyPoints: [
      b(
        '방향을 바꿨을 때 순서가 헷갈리는 구간',
        'Sections that feel reversed after changing direction'
      ),
      b('환승역이 연속되는 중심 구간', 'Central transfer clusters'),
      b('한 바퀴 후반의 집중력 저하', 'Concentration loss late in the loop'),
    ],
    checklist: [
      b('내선 또는 외선 하나만 선택하기', 'Choose only one loop direction'),
      b('한 바퀴를 네 구간으로 나누기', 'Split the loop into four quarters'),
      b('다음 세 역을 미리 말하기', 'Say the next three stations ahead'),
      b(
        '오타 수와 최장 멈춤을 함께 기록하기',
        'Record typo count and longest pause'
      ),
    ],
  },
  {
    slug: 'line-3',
    name: b('서울 지하철 3호선', 'Seoul Subway Line 3'),
    intro: b(
      '3호선은 긴 직선형 흐름 속에 환승 밀집 구간과 이름 길이가 다른 역이 섞여 있어 일정한 타자 리듬을 유지하는 연습에 좋습니다.',
      'Line 3 mixes a long corridor with transfer-heavy sections and varied station-name lengths, making it useful for rhythm control.'
    ),
    challenge: b(
      '짧은 역 이름을 빠르게 통과한 뒤 긴 이름에서 같은 속도를 유지하려 하면 자모 누락이 생기기 쉽습니다.',
      'After several short names, players often keep the same pace on a longer name and drop a consonant or vowel.'
    ),
    drill: b(
      '역 이름 길이에 따라 “짧게-보통-길게” 세 묶음으로 나눠 입력하세요. 긴 이름 앞에서는 한 번 숨을 고르고 첫 음절을 정확히 시작하는 것이 전체 기록을 지킵니다.',
      'Group names into short, medium, and long patterns. Before a long name, reset for one beat and land the first syllable cleanly.'
    ),
    benchmark: b(
      '평균 속도만 보지 말고 긴 역 이름에서 난 오타를 따로 세세요. 긴 이름 정확도가 올라가면 전체 완주 시간이 자연스럽게 줄어듭니다.',
      'Count errors on long names separately from average speed. Better long-name accuracy usually lowers the total time without forcing pace.'
    ),
    stickyPoints: [
      b(
        '짧은 이름 뒤에 긴 이름이 나오는 구간',
        'A long name immediately after short names'
      ),
      b('환승역 사이의 순서 기억', 'Sequence recall between transfer stations'),
      b('첫 음절을 급하게 입력하는 습관', 'Rushing the first syllable'),
    ],
    checklist: [
      b('역 이름을 길이별로 표시하기', 'Mark names by length'),
      b('긴 이름 앞에서 한 박자 쉬기', 'Reset for one beat before long names'),
      b('첫 음절 오타만 따로 세기', 'Count first-syllable errors separately'),
      b(
        '같은 구간을 정확도 우선으로 재도전하기',
        'Repeat the section with accuracy first'
      ),
    ],
  },
  {
    slug: 'line-4',
    name: b('서울 지하철 4호선', 'Seoul Subway Line 4'),
    intro: b(
      '4호선은 긴 남북 흐름을 따라 역 이름의 리듬이 자주 바뀌어, 다음 역을 미리 준비하는 습관을 만들기 좋습니다.',
      'Line 4 has a long north-south flow with frequent rhythm changes, so it is good for learning to prepare the next station early.'
    ),
    challenge: b(
      '현재 역 입력에만 집중하면 다음 역을 확인하는 순간 손이 완전히 멈춥니다. 긴 구간에서는 이 작은 정지가 반복되어 기록 차이가 커집니다.',
      'Focusing only on the current input creates a full stop whenever the next station appears. Those small pauses add up on a long route.'
    ),
    drill: b(
      '현재 역의 마지막 음절을 칠 때 다음 역의 첫 음절을 머릿속에 준비하세요. 처음에는 속도를 낮추고 “현재 입력-다음 준비” 패턴이 끊기지 않는지 확인합니다.',
      'As you type the final syllable of the current station, prepare the first syllable of the next one. Slow down until that handoff stays continuous.'
    ),
    benchmark: b(
      '완주 시간과 함께 완전히 멈춘 횟수를 기록하세요. 정지 횟수가 줄면 속도를 크게 올리지 않아도 기록이 개선됩니다.',
      'Track the number of full stops alongside completion time. Fewer stops improve the score even when typing speed barely changes.'
    ),
    stickyPoints: [
      b(
        '다음 역을 확인하느라 손이 멈추는 순간',
        'Full stops while reading the next station'
      ),
      b('역 이름 리듬이 갑자기 바뀌는 구간', 'Abrupt changes in name rhythm'),
      b(
        '긴 구간 후반의 자세 무너짐',
        'Posture and hand-position drift late in the route'
      ),
    ],
    checklist: [
      b(
        '다음 역 첫 음절을 미리 준비하기',
        'Preview the first syllable of the next station'
      ),
      b('완전 정지 횟수를 세기', 'Count full stops'),
      b('중간에 손 위치를 다시 맞추기', 'Reset hand position midway'),
      b(
        '속도보다 연속 입력을 우선하기',
        'Prioritize continuous input over speed'
      ),
    ],
  },
  {
    slug: 'line-5',
    name: b('서울 지하철 5호선', 'Seoul Subway Line 5'),
    intro: b(
      '5호선은 긴 본선 흐름과 분기 감각을 함께 요구합니다. 플레이 전에 게임 화면에서 선택한 구간과 방향을 확인해야 기록이 섞이지 않습니다.',
      'Line 5 combines a long main flow with branch awareness. Confirm the selected section and direction in the game before each timed run.'
    ),
    challenge: b(
      '분기 전까지는 순서가 익숙해도 이후 행선지를 잘못 예상하면 다음 역 회상이 끊깁니다. 같은 이름의 노선 기록을 하나로 합치는 것도 분석을 어렵게 만듭니다.',
      'Recall can collapse after a branch if you anticipated the wrong destination. Combining all Line 5 runs into one score also hides the difference.'
    ),
    drill: b(
      '분기 전 공통 구간과 분기 후 구간을 따로 연습하세요. 공통 구간을 워밍업으로 한 번, 선택한 분기 구간을 두 번 반복하면 순서 전환이 안정됩니다.',
      'Practice the shared section and the post-branch section separately. Use one shared-section warm-up, then repeat the chosen branch twice.'
    ),
    benchmark: b(
      '분기별 기록을 별도로 저장하고, 공통 구간의 시간과 분기 후 시간을 나눠 비교하세요. 어디서 기억 지연이 생기는지 바로 드러납니다.',
      'Store results by branch and compare the shared segment with the post-branch segment. This exposes where recall delay begins.'
    ),
    stickyPoints: [
      b('분기 직전의 행선지 확인', 'Destination check before the branch'),
      b(
        '공통 구간과 분기 구간의 전환',
        'Transition from shared to branch-specific sequence'
      ),
      b(
        '서로 다른 조건의 기록을 섞는 문제',
        'Mixing results from different route conditions'
      ),
    ],
    checklist: [
      b(
        '선택한 분기와 방향을 적기',
        'Write down the selected branch and direction'
      ),
      b('공통 구간을 한 번 워밍업하기', 'Warm up once on the shared section'),
      b(
        '분기 후 구간을 두 번 반복하기',
        'Repeat the post-branch section twice'
      ),
      b(
        '분기별 최고 기록을 따로 관리하기',
        'Keep separate personal bests by branch'
      ),
    ],
  },
  {
    slug: 'line-6',
    name: b('서울 지하철 6호선', 'Seoul Subway Line 6'),
    intro: b(
      '6호선은 응암 순환 구간 때문에 방향과 역 순서를 정확히 확인하는 습관이 특히 중요합니다. 익숙함만 믿고 시작하면 초반부터 순서가 어긋날 수 있습니다.',
      'Line 6 requires careful direction checking because the Eungam loop changes how the sequence is experienced. Familiarity alone can create an early mistake.'
    ),
    challenge: b(
      '순환 구간을 일반적인 왕복 노선처럼 기억하면 다음 역 예측이 흔들립니다. 게임에서 표시한 실제 순서를 기준으로 연습해야 합니다.',
      'Treating the loop like a normal two-way segment leads to wrong predictions. Train against the exact order shown in the game.'
    ),
    drill: b(
      '응암 순환 구간만 따로 소리 내어 읽고 입력한 뒤, 본선 구간과 연결하세요. 순환 진입 전 마지막 역과 진출 후 첫 역을 앵커로 잡으면 전환이 쉬워집니다.',
      'Read and type the loop section separately, then attach it to the main route. Use the station before entry and the first station after exit as anchors.'
    ),
    benchmark: b(
      '순환 구간과 일반 구간의 오타 수를 따로 기록하세요. 특정 구조에서만 반복되는 실수인지 확인할 수 있습니다.',
      'Track loop errors separately from regular-route errors to see whether the structure itself causes the problem.'
    ),
    stickyPoints: [
      b(
        '응암 순환 진입·진출 순서',
        'Entry and exit order around the Eungam loop'
      ),
      b(
        '방향을 확인하지 않고 시작하는 습관',
        'Starting without checking direction'
      ),
      b('순환 구간 뒤 리듬 재정렬', 'Rebuilding rhythm after the loop'),
    ],
    checklist: [
      b(
        '게임에 표시된 역 순서를 먼저 읽기',
        'Read the displayed station order first'
      ),
      b(
        '순환 구간만 따로 한 번 입력하기',
        'Type the loop section once by itself'
      ),
      b('진입·진출 앵커를 정하기', 'Choose entry and exit anchors'),
      b('순환 구간 오타를 별도 기록하기', 'Record loop errors separately'),
    ],
  },
  {
    slug: 'line-7',
    name: b('서울 지하철 7호선', 'Seoul Subway Line 7'),
    intro: b(
      '7호선은 긴 완주에서 집중력과 손 피로를 관리하는 연습에 적합합니다. 초반 속도가 너무 빠르면 후반 정확도가 급격히 떨어질 수 있습니다.',
      'Line 7 is useful for training concentration and hand endurance over a long run. An overly fast start often causes a sharp accuracy drop later.'
    ),
    challenge: b(
      '기록을 줄이려고 초반부터 최고 속도로 치면 손 위치가 흐트러지고, 후반에는 짧은 역 이름에서도 오타가 납니다.',
      'Starting at maximum speed can shift hand position, causing errors even on short names late in the run.'
    ),
    drill: b(
      '전체 구간을 세 부분으로 나눠 첫 구간 80%, 중간 85%, 마지막 90%의 체감 속도로 올리세요. 후반 가속 방식이 완주 안정성을 높입니다.',
      'Divide the route into thirds and use roughly 80%, 85%, then 90% effort. A controlled negative split protects late-run accuracy.'
    ),
    benchmark: b(
      '세 구간별 오타와 시간을 나눠 적으세요. 후반 구간이 안정되기 전에는 전체 최고 기록보다 구간 편차를 줄이는 것이 우선입니다.',
      'Record time and errors for each third. Reduce the gap between sections before chasing an overall personal best.'
    ),
    stickyPoints: [
      b('초반 과속', 'Starting too fast'),
      b('중간 이후 손 위치 이동', 'Hand-position drift after the midpoint'),
      b('후반 집중력 저하', 'Late-run concentration loss'),
    ],
    checklist: [
      b('전체를 세 구간으로 나누기', 'Split the route into thirds'),
      b('초반 체감 속도를 80%로 제한하기', 'Cap early effort around 80%'),
      b(
        '중간에 자세와 손 위치 확인하기',
        'Check posture and hand position midway'
      ),
      b('구간별 오타 편차를 기록하기', 'Record error variation by section'),
    ],
  },
  {
    slug: 'line-8',
    name: b('서울 지하철 8호선', 'Seoul Subway Line 8'),
    intro: b(
      '8호선은 비교적 짧은 반복 세션을 만들기 좋아 정확도와 속도를 같은 날 비교하기에 적합합니다. 짧다고 바로 전력으로 시작하기보다 깨끗한 기준 기록을 먼저 만드세요.',
      'Line 8 works well for shorter repeat sessions, making it suitable for comparing accuracy and speed on the same day. Build a clean baseline before sprinting.'
    ),
    challenge: b(
      '짧은 노선이라는 인식 때문에 첫 판부터 과속하기 쉽습니다. 한두 번의 오타가 전체 기록에서 차지하는 비중도 커집니다.',
      'Because the route feels short, players tend to sprint immediately. One or two errors then represent a large share of the total time.'
    ),
    drill: b(
      '첫 판은 100% 정확도를 목표로 하고, 둘째 판부터 입력 간격을 조금씩 줄이세요. 세 판 이상 연속할 때는 최고 기록보다 평균 기록을 확인합니다.',
      'Aim for perfect accuracy on run one, then shorten the gap between inputs. Over three or more runs, compare the average rather than only the best score.'
    ),
    benchmark: b(
      '한 판 최고 기록과 세 판 평균을 함께 저장하세요. 평균이 내려가면 우연한 한 번이 아니라 실력이 안정된 것입니다.',
      'Save both the single-run best and the three-run average. A lower average shows stable progress rather than one lucky attempt.'
    ),
    stickyPoints: [
      b('첫 판 과속', 'Sprinting on the first run'),
      b(
        '한 번의 오타가 기록에 크게 반영되는 문제',
        'A single error having outsized impact'
      ),
      b(
        '최고 기록만 보고 평균을 놓치는 습관',
        'Ignoring the average in favor of one best time'
      ),
    ],
    checklist: [
      b(
        '첫 판은 정확도 기준 기록으로 사용하기',
        'Use the first run as an accuracy baseline'
      ),
      b('세 판 평균을 계산하기', 'Calculate a three-run average'),
      b('입력 간격만 조금씩 줄이기', 'Reduce input gaps gradually'),
      b(
        '오타가 난 역만 마지막에 재연습하기',
        'Retype error stations at the end'
      ),
    ],
  },
  {
    slug: 'line-9',
    name: b('서울 지하철 9호선', 'Seoul Subway Line 9'),
    intro: b(
      '9호선은 일반·급행 운행 개념 때문에 실제 이용 경험과 게임의 역 순서를 혼동하지 않는 것이 중요합니다. 게임 화면에 제시된 순서를 기준으로 입력하세요.',
      'Line 9 can trigger confusion between local and express travel memories. Always follow the exact station sequence displayed by the game.'
    ),
    challenge: b(
      '평소 급행 이용 경험을 떠올리면 일반 정차 순서에서 역을 건너뛰어 생각할 수 있습니다. 반대로 모든 역을 외우려다 현재 모드 확인을 놓치기도 합니다.',
      'Express-service memory can make players mentally skip local stops, while trying to recall every stop can distract from the selected mode.'
    ),
    drill: b(
      '시작 전에 일반·급행 여부와 방향을 말로 확인하세요. 급행 감각이 강한 구간은 일반 순서만 따로 읽고 입력해 기억을 분리합니다.',
      'State the service pattern and direction before starting. Where express memory dominates, read and type the local sequence separately.'
    ),
    benchmark: b(
      '서비스 패턴별 기록을 절대 섞지 마세요. 같은 모드에서 건너뛴 역을 예상한 횟수를 적으면 기억 오류가 줄어드는지 볼 수 있습니다.',
      'Never mix results from different service patterns. Count how often you anticipated a skipped stop to measure recall correction.'
    ),
    stickyPoints: [
      b('일반·급행 기억 혼동', 'Local and express memory conflict'),
      b('모드 확인 없이 시작', 'Starting without checking the mode'),
      b(
        '평소 이용 패턴에 따라 역을 건너뛰어 예상',
        'Mentally skipping stops based on commuting habits'
      ),
    ],
    checklist: [
      b('일반·급행 여부 확인하기', 'Confirm local or express mode'),
      b('방향을 소리 내어 말하기', 'Say the direction aloud'),
      b(
        '건너뛰어 예상한 역을 표시하기',
        'Mark stops you incorrectly expected to skip'
      ),
      b('같은 모드로만 기록 비교하기', 'Compare only within the same mode'),
    ],
  },
  {
    slug: 'sillim-line',
    name: b('신림선', 'Sillim Line'),
    intro: b(
      '신림선은 짧은 경전철 구간을 반복해 한글 입력 리듬을 빠르게 점검하기 좋습니다. 긴 노선 전에 손을 푸는 워밍업 코스로 활용할 수 있습니다.',
      'The Sillim Line is a compact light-rail route that works well for checking Hangul rhythm before a longer challenge.'
    ),
    challenge: b(
      '짧은 구간에서는 한 번의 멈춤이나 입력 언어 전환 실수가 전체 기록을 크게 흔듭니다. 준비 없이 시작하면 연습 효과가 작습니다.',
      'On a short route, one pause or wrong keyboard language can distort the whole result. Setup matters more than it seems.'
    ),
    drill: b(
      '첫 판은 천천히 자판 위치를 확인하고, 둘째 판은 화면을 더 오래 보며 입력하세요. 모바일에서는 자동 완성과 제안 기능이 끼어드는지도 확인합니다.',
      'Use the first run to confirm key positions, then keep your eyes on the screen longer in run two. On mobile, check whether autocorrect or suggestions interrupt input.'
    ),
    benchmark: b(
      '두 판 평균과 오타 수를 기록해 워밍업 상태를 판단하세요. 평균이 평소보다 나쁘면 긴 노선 기록 도전보다 정확도 연습을 선택하는 것이 낫습니다.',
      'Use the two-run average and error count as a readiness check. If both are worse than usual, choose accuracy practice instead of a long personal-best attempt.'
    ),
    stickyPoints: [
      b('입력 언어가 영어로 남아 있는 상태', 'Keyboard left in English mode'),
      b('모바일 자동 완성 개입', 'Mobile autocorrect interference'),
      b(
        '짧은 노선이라 준비 없이 시작하는 습관',
        'Skipping setup because the route is short'
      ),
    ],
    checklist: [
      b('한글 입력 상태 확인하기', 'Confirm Hangul input mode'),
      b(
        '첫 판은 자판 워밍업으로 사용하기',
        'Use run one as a keyboard warm-up'
      ),
      b('모바일 자동 완성 끄기', 'Disable mobile autocorrect if it interferes'),
      b(
        '두 판 평균으로 컨디션 판단하기',
        'Use the two-run average as a readiness check'
      ),
    ],
  },
];

const LINE_GUIDE_DETAILS: Record<
  string,
  Pick<LineGuideDefinition, 'focusStations' | 'sessionDetail' | 'mistakeDetail'>
> = {
  'line-1': {
    focusStations: [
      b('서울역', 'Seoul Station'),
      b('종각', 'Jonggak'),
      b('청량리', 'Cheongnyangni'),
      b('구로', 'Guro'),
    ],
    sessionDetail: b(
      '2분 동안 서울역–종각–시청의 순서를 소리 내어 확인한 뒤, 서울역에서 청량리까지 8~10개 역을 천천히 한 번 입력하세요. 다음 6분에는 구로를 포함한 구간을 선택해 첫 역과 마지막 역을 먼저 말하고 두 번 반복합니다. 마지막 7분은 같은 방향과 기기에서 한 번만 기록 도전을 하고, 서울역·청량리·구로 가운데 멈춘 역을 오타 기록표에 남기세요.',
      'Spend two minutes saying Seoul Station–Jonggak–City Hall aloud, then type an eight-to-ten-station Seoul Station to Cheongnyangni stretch once slowly. For the next six minutes, choose a section containing Guro, name its first and last stations, and repeat it twice. Use the final seven minutes for one timed run on the same device and direction, logging any pause at Seoul Station, Cheongnyangni, or Guro.'
    ),
    mistakeDetail: b(
      '1호선에서는 서울역 다음을 시청으로 넘겨짚거나, 구로에서 분기 기억이 끼어들어 순서를 멈추는 일이 흔합니다. 청량리처럼 긴 이름은 앞선 짧은 역의 속도로 시작해 자모를 빼먹기 쉽습니다. 실제 게임에 표시된 방향을 먼저 보고, 분기 자체를 외우기보다 선택한 서울역–청량리 또는 구로 주변 구간만 별도 카드처럼 연습하세요.',
      'On Line 1, players often jump from Seoul Station to City Hall too early or freeze at Guro when branch memories intrude. A longer name such as Cheongnyangni is easy to mistype at the pace of the shorter stations before it. Check the displayed direction first, then practice only the chosen Seoul Station–Cheongnyangni or Guro neighborhood as a small card rather than memorizing every branch.'
    ),
  },
  'line-2': {
    focusStations: [
      b('시청', 'City Hall'),
      b('홍대입구', 'Hongik Univ.'),
      b('강남', 'Gangnam'),
      b('잠실', 'Jamsil'),
      b('사당', 'Sadang'),
    ],
    sessionDetail: b(
      '내선 또는 외선을 하나 고른 뒤 3분 동안 시청–홍대입구, 강남–잠실, 사당 주변을 세 묶음으로 말해 보세요. 7분 동안 각 묶음을 정확도 우선으로 한 번씩 입력하고, 다음 세 역을 미리 보는지 확인합니다. 남은 5분에는 같은 방향에서 한 구간을 두 번 달려 첫 판의 최장 멈춤이 두 번째 판에서 줄었는지 비교하세요.',
      'Choose one loop direction and spend three minutes reciting three clusters: City Hall–Hongik Univ., Gangnam–Jamsil, and the Sadang area. For seven minutes, type each cluster once for accuracy while previewing the next three stations. In the final five minutes, run one chosen section twice in the same direction and check whether the longest pause from run one shrinks in run two.'
    ),
    mistakeDetail: b(
      '2호선은 시청, 홍대입구, 강남처럼 너무 익숙한 역에서 오히려 다음 역을 읽지 않고 추측하는 실수가 납니다. 내선에서 익힌 잠실–강남 감각을 외선에 그대로 적용하면 순서가 뒤집힙니다. 기록장에는 반드시 내선·외선을 적고, 사당처럼 환승 기억이 강한 역은 앞뒤 두 역까지 한 묶음으로 입력하세요.',
      'Line 2 invites guesses at overfamiliar stops such as City Hall, Hongik Univ., and Gangnam instead of reading ahead. Applying a Jamsil–Gangnam memory learned clockwise to the opposite direction reverses the sequence. Always label runs by loop direction, and type transfer-heavy stations such as Sadang together with their two neighbors.'
    ),
  },
  'line-3': {
    focusStations: [
      b('대화', 'Daehwa'),
      b('연신내', 'Yeonsinnae'),
      b('종로3가', 'Jongno 3-ga'),
      b('고속터미널', 'Express Bus Terminal'),
      b('수서', 'Suseo'),
    ],
    sessionDetail: b(
      '3분 동안 대화–연신내와 종로3가–고속터미널 두 구간의 긴 이름에 밑줄을 그어 보듯 읽으세요. 이어 8분은 짧은 이름 뒤 긴 이름이 오는 구간을 느린 속도로 두 번 입력하며 첫 음절을 정확히 시작합니다. 마지막 4분에는 수서까지의 한 구간을 달리고, 고속터미널과 종로3가에서 난 첫 음절 오타를 따로 세어 다음 세션의 속도를 정하세요.',
      'For three minutes, read the long names in the Daehwa–Yeonsinnae and Jongno 3-ga–Express Bus Terminal areas as if underlining them. Then spend eight minutes typing stretches where a long name follows a short one twice at a controlled pace, landing the first syllable cleanly. Finish with one run toward Suseo and count first-syllable errors separately at Express Bus Terminal and Jongno 3-ga to set the next session’s pace.'
    ),
    mistakeDetail: b(
      '대화나 수서 같은 짧은 이름 뒤에 종로3가·고속터미널이 나오면 이전 속도를 유지하다가 숫자 표기나 긴 음절에서 멈춥니다. 연신내 주변에서는 환승역이라는 인상만 기억하고 순서를 놓치기도 합니다. 긴 역은 첫 음절, 가운데, 마지막을 세 박자로 보고 입력하며, 한 번 틀린 이름을 전체 노선 재시도보다 먼저 세 번만 재입력하세요.',
      'After short names such as Daehwa or Suseo, players carry too much speed into Jongno 3-ga or Express Bus Terminal and stall on the number marker or length. Around Yeonsinnae, transfer familiarity can replace sequence recall. Type a long name in three beats—opening, middle, ending—and retype one failed name three times before restarting the whole route.'
    ),
  },
  'line-4': {
    focusStations: [
      b('당고개', 'Danggogae'),
      b('동대문역사문화공원', 'Dongdaemun History & Culture Park'),
      b('서울역', 'Seoul Station'),
      b('사당', 'Sadang'),
      b('오이도', 'Oido'),
    ],
    sessionDetail: b(
      '당고개에서 서울역까지의 흐름을 2분간 눈으로 따라가며 각 역의 다음 첫 음절만 말하세요. 8분 동안 동대문역사문화공원과 사당을 포함한 구간을 세 번 입력하되, 현재 역의 끝 음절을 칠 때 다음 역 첫 음절을 준비합니다. 마지막 5분은 서울역–오이도처럼 더 긴 구간을 한 번 달려 완전히 멈춘 횟수만 기록하세요.',
      'Trace the Danggogae-to-Seoul Station flow for two minutes and say only the first syllable of each next station. For eight minutes, type a section containing Dongdaemun History & Culture Park and Sadang three times, preparing the next station’s opening syllable while finishing the current one. Use the last five minutes for one longer Seoul Station–Oido-style run and record only full stops.'
    ),
    mistakeDetail: b(
      '4호선에서는 동대문역사문화공원처럼 긴 이름에서 시선이 멈춘 뒤 서울역·사당 같은 익숙한 역까지 리듬이 늦어집니다. 당고개나 오이도 방향을 섞으면 같은 구간도 완전히 다른 회상 과제가 됩니다. 이름이 긴 역에서는 속도를 낮추고, 입력 직후 다음 역을 찾는 대신 입력 중간에 다음 첫 음절을 준비하세요.',
      'On Line 4, a visual stop at a long name like Dongdaemun History & Culture Park can delay rhythm even at familiar Seoul Station or Sadang. Mixing Danggogae and Oido directions turns the same corridor into a different recall task. Slow down for long names and prepare the next opening syllable during the current input instead of searching after it.'
    ),
  },
  'line-5': {
    focusStations: [
      b('방화', 'Banghwa'),
      b('여의도', 'Yeouido'),
      b('광화문', 'Gwanghwamun'),
      b('왕십리', 'Wangsimni'),
      b('마천', 'Macheon'),
    ],
    sessionDetail: b(
      '먼저 2분 동안 방화–여의도–광화문 공통 흐름과 왕십리 이후의 선택 방향을 확인합니다. 7분은 공통 구간을 한 번, 선택한 마천 방향 구간을 두 번 정확하게 입력하세요. 마지막 6분에는 같은 분기와 방향으로 기록을 한 번 내고, 왕십리 전후 중 어디에서 다음 역 회상이 늦어졌는지 표시합니다.',
      'First spend two minutes checking the shared Banghwa–Yeouido–Gwanghwamun flow and the selected direction after Wangsimni. For seven minutes, type the shared section once and your chosen Macheon-side section twice accurately. In the final six minutes, make one timed run on the same branch and direction, marking whether recall slowed before or after Wangsimni.'
    ),
    mistakeDetail: b(
      '5호선은 방화에서 광화문까지 잘 가다가 왕십리 이후에 다른 행선지 기억을 섞는 실수가 많습니다. 여의도처럼 익숙한 환승역을 앵커로 쓰되, 앵커 뒤의 실제 표시 순서를 확인하지 않으면 분기 전환이 끊깁니다. 기록에는 “마천 방향”처럼 분기를 쓰고, 공통 구간의 시간과 분기 뒤 시간을 따로 비교하세요.',
      'On Line 5, players often move smoothly from Banghwa to Gwanghwamun, then mix in a different destination memory after Wangsimni. Use familiar Yeouido as an anchor, but verify the displayed order after it or the branch transition breaks. Label records with the branch, such as “toward Macheon,” and compare shared-section time separately from post-branch time.'
    ),
  },
  'line-6': {
    focusStations: [
      b('응암', 'Eungam'),
      b('디지털미디어시티', 'Digital Media City'),
      b('공덕', 'Gongdeok'),
      b('이태원', 'Itaewon'),
      b('봉화산', 'Bonghwasan'),
    ],
    sessionDetail: b(
      '3분 동안 응암 순환에서 보이는 실제 순서를 읽고, 응암·디지털미디어시티를 진입 앵커로 정하세요. 7분은 그 순환 구간만 두 번 입력한 뒤 공덕까지 연결해 한 번 더 입력합니다. 마지막 5분은 이태원 또는 봉화산 방향의 짧은 기록 도전으로 쓰고, 순환 안과 밖의 오타를 구분해 적습니다.',
      'Spend three minutes reading the exact displayed Eungam-loop order and choose Eungam and Digital Media City as entry anchors. For seven minutes, type the loop alone twice, then attach it through Gongdeok once. Use the final five minutes for a short timed attempt toward Itaewon or Bonghwasan, logging loop errors separately from non-loop errors.'
    ),
    mistakeDetail: b(
      '응암 순환을 왕복 선처럼 생각하면 응암 다음과 디지털미디어시티 전후 순서를 거꾸로 예상하기 쉽습니다. 공덕이나 이태원처럼 익숙한 역이 보여도 순환 직후에는 손 리듬을 다시 맞춰야 합니다. 게임에 보이는 방향을 말로 확인하고, 순환 구간을 단독으로 정확히 두 번 끝낸 뒤에만 본선과 연결하세요.',
      'Treating the Eungam loop like a standard two-way line makes it easy to predict the order after Eungam or around Digital Media City backward. Even familiar Gongdeok or Itaewon needs a rhythm reset after the loop. Say the displayed direction aloud and connect the loop to the main line only after two clean standalone loop runs.'
    ),
  },
  'line-7': {
    focusStations: [
      b('장암', 'Jangam'),
      b('건대입구', 'Konkuk Univ.'),
      b('고속터미널', 'Express Bus Terminal'),
      b('가산디지털단지', 'Gasan Digital Complex'),
      b('석남', 'Seongnam'),
    ],
    sessionDetail: b(
      '2분간 장암–건대입구–고속터미널–가산디지털단지를 세 부분으로 나눕니다. 다음 9분에는 첫 구간을 80%, 중간을 85%, 마지막을 90% 힘으로 달리는 세 번의 짧은 연습을 하며 손 위치를 중간마다 확인하세요. 마지막 4분에는 석남 방향 한 번을 완주하고 세 구간의 오타 차이만 적습니다.',
      'Spend two minutes splitting Jangam–Konkuk Univ.–Express Bus Terminal–Gasan Digital Complex into three thirds. For the next nine minutes, do three short drills at 80% early effort, 85% middle effort, and 90% late effort, checking hand position between them. Finish with one run toward Seongnam and record only the error difference across the thirds.'
    ),
    mistakeDetail: b(
      '7호선에서는 장암 쪽 초반에 과속해 고속터미널이나 가산디지털단지에서 손이 굳고, 석남 쪽 후반에는 짧은 이름도 무너집니다. 한 번 빠른 출발보다 세 구간의 오타 편차가 작은 기록이 더 좋은 기준입니다. 중간 환승역을 통과할 때 어깨와 손목을 풀고 다음 구간의 목표 속도를 낮게 재설정하세요.',
      'On Line 7, an overfast start near Jangam can tighten the hands by Express Bus Terminal or Gasan Digital Complex, while the Seongnam-side finish can break even on short names. A run with a small error gap across thirds is a better benchmark than one fast start. Relax shoulders and wrists at a mid-route transfer, then reset the next section to a modest target pace.'
    ),
  },
  'line-8': {
    focusStations: [
      b('암사역사공원', 'Amsa History Park'),
      b('잠실', 'Jamsil'),
      b('가락시장', 'Garak Market'),
      b('복정', 'Bokjeong'),
      b('모란', 'Moran'),
    ],
    sessionDetail: b(
      '암사역사공원–잠실–가락시장–복정–모란을 한 번 천천히 입력해 3분 기준 기록을 만듭니다. 다음 8분에는 같은 구간을 세 번 달리되 첫 판은 무오타, 둘째 판은 일정 리듬, 셋째 판만 속도 향상에 집중합니다. 마지막 4분에 세 기록의 평균과 암사역사공원·가락시장 오타를 확인하세요.',
      'Type Amsa History Park–Jamsil–Garak Market–Bokjeong–Moran once slowly to make a three-minute baseline. Over the next eight minutes, run the same section three times: perfect accuracy first, steady rhythm second, speed only on the third. Spend the last four minutes checking the average and errors at Amsa History Park and Garak Market.'
    ),
    mistakeDetail: b(
      '8호선은 짧아서 암사역사공원처럼 긴 이름을 첫 판부터 전력으로 치다가 전체 평균을 망치기 쉽습니다. 잠실과 복정 같은 익숙한 역 뒤에도 가락시장 순서를 미리 읽지 않으면 한 번의 오타가 크게 반영됩니다. 최고 기록만 저장하지 말고 세 판 평균과 재현 가능한 무오타 기록을 함께 남기세요.',
      'Because Line 8 is short, players often sprint into a long name like Amsa History Park and ruin the whole average. Even after familiar Jamsil or Bokjeong, failing to preview Garak Market makes one typo disproportionately costly. Save a three-run average and a repeatable clean run, not only the fastest result.'
    ),
  },
  'line-9': {
    focusStations: [
      b('개화', 'Gaehwa'),
      b('김포공항', 'Gimpo Airport'),
      b('여의도', 'Yeouido'),
      b('노량진', 'Noryangjin'),
      b('중앙보훈병원', 'VHS Medical Center'),
    ],
    sessionDetail: b(
      '시작 3분에는 오늘 게임이 일반인지 급행인지, 개화에서 중앙보훈병원 어느 방향인지 말로 적습니다. 이어 7분 동안 김포공항–여의도–노량진 구간을 표시 순서대로 두 번 입력하며 건너뛸 역을 예상하지 않도록 합니다. 마지막 5분은 한 모드만 선택해 기록을 내고, 잘못 건너뛴다고 생각한 역 수를 적으세요.',
      'For the first three minutes, state whether today’s game is local or express and which Gaehwa-to-VHS Medical Center direction is shown. For seven minutes, type the Gimpo Airport–Yeouido–Noryangjin segment twice in displayed order without predicting skipped stops. Use the final five minutes for one mode-specific timed run and count stops you wrongly expected to skip.'
    ),
    mistakeDetail: b(
      '9호선은 김포공항, 여의도, 노량진을 평소 급행 기억으로 연결해 일반 정차역을 머릿속에서 건너뛰기 쉽습니다. 중앙보훈병원 방향처럼 긴 구간은 모드가 달라지면 비교할 수 없습니다. 화면의 모드·방향을 기록장 맨 앞에 쓰고, 한 세션에서는 일반 또는 급행 한 가지 기억만 사용하세요.',
      'On Line 9, commuters often link Gimpo Airport, Yeouido, and Noryangjin using express-service memory and mentally skip local stops. A long run toward VHS Medical Center is not comparable when the mode changes. Put the displayed mode and direction at the top of the log, and use only one service pattern per session.'
    ),
  },
  'sillim-line': {
    focusStations: [
      b('샛강', 'Saetgang'),
      b('보라매', 'Boramae'),
      b('당곡', 'Danggok'),
      b('서울대벤처타운', 'Seoul National Univ. Venture Town'),
      b('관악산', 'Gwanaksan'),
    ],
    sessionDetail: b(
      '첫 2분은 한글 입력 상태와 모바일 자동 완성을 점검하고 샛강–보라매–당곡을 천천히 입력합니다. 다음 8분에는 서울대벤처타운과 관악산을 포함한 전 구간을 두 번 달리며 한 손·두 손 방식 중 수정이 적은 쪽을 고르세요. 마지막 5분은 같은 방식으로 두 번째 기록을 내고 평균 오타가 평소 범위인지 확인합니다.',
      'Use the first two minutes to check Hangul input and mobile autocorrect, then type Saetgang–Boramae–Danggok slowly. For eight minutes, run the full stretch containing Seoul National Univ. Venture Town and Gwanaksan twice, choosing the one- or two-handed method with fewer corrections. Spend the final five minutes making a second same-method run and check whether the average error count is within your normal range.'
    ),
    mistakeDetail: b(
      '신림선은 샛강이나 보라매처럼 짧은 이름에 빨리 들어가다가 서울대벤처타운에서 자동 완성이나 자판 전환에 걸리는 일이 많습니다. 짧은 노선이라 한 번의 멈춤이 기록을 크게 바꾸므로, 관악산까지의 기록 전에는 반드시 입력 언어를 확인하세요. 긴 이름은 천천히 정확히 끝내고 다음 판에서만 간격을 줄입니다.',
      'On the Sillim Line, a fast start through short Saetgang or Boramae often collides with autocorrect or an input-mode switch at Seoul National Univ. Venture Town. One pause heavily changes a short-route score, so confirm the keyboard language before a run to Gwanaksan. Finish long names slowly and correctly; reduce spacing only on the next run.'
    ),
  },
};

const LINE_GUIDES: LineGuideDefinition[] = LINE_GUIDES_BASE.map((guide) => ({
  ...guide,
  ...LINE_GUIDE_DETAILS[guide.slug],
}));

type PracticeGuideDefinition = {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  intro: Bilingual;
  problem: Bilingual;
  method: Bilingual;
  measure: Bilingual;
  steps: Bilingual[];
  workedExample: Bilingual;
  pitfalls: Bilingual[];
};

const PRACTICE_GUIDES_BASE = [
  {
    slug: 'hangul-keyboard-setup',
    title: b('한글 키보드 설정 점검', 'Hangul Keyboard Setup Check'),
    description: b(
      'Metro Typing 전에 입력 언어, 두벌식 배열, 자동 완성 설정을 확인하는 방법.',
      'Check input language, keyboard layout, and autocorrect before Metro Typing.'
    ),
    intro: b(
      '타자 실력과 무관한 설정 오류는 가장 쉽게 줄일 수 있는 손실입니다. 시작 전 30초 점검만으로 첫 역에서 멈추는 일을 피할 수 있습니다.',
      'Configuration mistakes are the easiest lost seconds to remove. A 30-second check prevents a bad start that has nothing to do with skill.'
    ),
    problem: b(
      '영문 입력 상태, 다른 한글 배열, 브라우저 단축키 충돌, 모바일 자동 완성이 대표적인 원인입니다.',
      'Common causes include English input mode, an unexpected Korean layout, browser shortcut conflicts, and mobile autocorrect.'
    ),
    method: b(
      '메모장이나 주소창이 아닌 일반 입력칸에서 짧은 역 이름 세 개를 먼저 입력하세요. 게임과 같은 브라우저·기기에서 확인해야 실제 조건이 맞습니다.',
      'Type three short station names in a normal text field using the same browser and device as the game.'
    ),
    measure: b(
      '첫 입력 실패가 0회인지 확인하고, 설정 변경 전후의 오타 수를 비교하세요.',
      'Confirm zero first-input failures and compare errors before and after the setup change.'
    ),
    steps: [
      b('입력 언어를 한글로 전환', 'Switch the input language to Korean'),
      b('두벌식 등 사용하는 배열 확인', 'Confirm the keyboard layout you use'),
      b('자동 완성·문자 제안 점검', 'Check autocorrect and suggestions'),
      b('짧은 역 이름 세 개로 테스트', 'Test with three short station names'),
    ],
  },
  {
    slug: 'mobile-hangul-typing',
    title: b('모바일 한글 타이핑 연습', 'Mobile Hangul Typing Practice'),
    description: b(
      '작은 화면에서 역 이름을 정확히 입력하고 자동 완성 방해를 줄이는 훈련법.',
      'Improve station-name accuracy on a small screen and reduce autocorrect interruptions.'
    ),
    intro: b(
      '모바일은 키 간격과 화면 가림 때문에 데스크톱과 다른 전략이 필요합니다. 속도보다 엄지 동선과 화면 확인 타이밍을 안정시키는 것이 먼저입니다.',
      'Mobile play needs a different strategy because key spacing and screen coverage change the task. Stabilize thumb movement before chasing speed.'
    ),
    problem: b(
      '두 엄지가 같은 영역을 침범하거나, 자동 완성이 입력을 바꾸거나, 키보드가 지도를 가려 다음 역 확인이 늦어질 수 있습니다.',
      'Thumb overlap, autocorrect replacement, and a keyboard covering route information can all create delays.'
    ),
    method: b(
      '한 손과 두 손 입력을 각각 두 판씩 비교하고, 더 정확한 방식을 기본으로 선택하세요. 화면을 올려다보는 시점을 매 음절이 아니라 역 이름 단위로 맞춥니다.',
      'Compare two one-handed runs with two two-handed runs, then keep the more accurate method. Look up once per station name rather than once per syllable.'
    ),
    measure: b(
      '분당 입력 수보다 수정 횟수와 자동 완성 취소 횟수를 기록하세요.',
      'Track corrections and autocorrect reversals rather than only inputs per minute.'
    ),
    steps: [
      b(
        '한 손·두 손 입력 각각 두 판 테스트',
        'Test two runs one-handed and two runs two-handed'
      ),
      b('자동 완성 개입 횟수 기록', 'Count autocorrect interventions'),
      b(
        '화면 확인 시점을 역 이름 단위로 통일',
        'Look up once per station name'
      ),
      b(
        '정확한 입력 방식을 기본으로 고정',
        'Keep the more accurate hand method'
      ),
    ],
  },
  {
    slug: 'accuracy-before-speed',
    title: b('속도보다 정확도 먼저 올리기', 'Build Accuracy Before Speed'),
    description: b(
      '오타로 인한 정지를 줄여 Metro Typing 기록을 안정적으로 단축하는 방법.',
      'Lower Metro Typing times by reducing error stops before increasing speed.'
    ),
    intro: b(
      'Metro Typing에서는 빠른 손보다 멈추지 않는 입력이 더 강합니다. 오타 한 번은 수정 시간뿐 아니라 다음 역 리듬까지 끊습니다.',
      'In Metro Typing, uninterrupted input beats fast hands. One typo costs correction time and disrupts the next station.'
    ),
    problem: b(
      '최고 속도만 따라가면 같은 역에서 반복해서 막히고 기록 변동이 커집니다.',
      'Chasing peak speed creates repeated failures at the same stations and unstable results.'
    ),
    method: b(
      '목표 정확도를 먼저 정하고 그 기준을 넘긴 판만 속도 기록으로 인정하세요. 예를 들어 두 판 연속 깨끗하게 끝낸 뒤에만 템포를 올립니다.',
      'Set an accuracy threshold and only treat runs above it as speed attempts. Raise tempo after two consecutive clean completions.'
    ),
    measure: b(
      '완주 시간, 오타 수, 완전 정지 횟수를 함께 기록하면 속도와 정확도의 균형이 보입니다.',
      'Record completion time, typo count, and full stops together to see the speed-accuracy tradeoff.'
    ),
    steps: [
      b('정확도 기준 정하기', 'Set an accuracy threshold'),
      b('두 판 연속 기준 달성', 'Meet it for two consecutive runs'),
      b('그다음 입력 간격을 소폭 줄이기', 'Then reduce input gaps slightly'),
      b(
        '오타가 늘면 이전 속도로 복귀',
        'Return to the prior pace if errors rise'
      ),
    ],
  },
  {
    slug: 'transfer-station-drills',
    title: b('환승역 구간 집중 훈련', 'Transfer-Station Cluster Drills'),
    description: b(
      '환승역이 연속되는 구간에서 순서 기억과 한글 입력을 함께 안정시키는 훈련.',
      'Stabilize recall and Hangul input across transfer-heavy sections.'
    ),
    intro: b(
      '환승역은 이름 자체보다 주변 역 순서를 헷갈리게 만드는 경우가 많습니다. 한 역만 외우기보다 앞뒤 묶음으로 훈련해야 합니다.',
      'Transfer stations often disrupt the surrounding sequence more than the station name itself. Train them as a neighborhood, not as isolated words.'
    ),
    problem: b(
      '환승역 이름에만 집중하면 직전·직후 역 회상이 늦어지고, 화면을 확인하는 시간이 길어집니다.',
      'Over-focusing on the transfer name delays recall of the station before and after it.'
    ),
    method: b(
      '환승역을 가운데 둔 5개 역 묶음을 만들고, 순방향·역방향으로 말한 뒤 입력하세요. 순서 회상과 타이핑을 분리해 한 번씩 연습한 뒤 합칩니다.',
      'Build a five-station cluster around the transfer, say it forward and backward, then type it. Practice recall and typing separately before combining them.'
    ),
    measure: b(
      '환승역 전후에서 발생한 멈춤 시간을 따로 적어 묶음 훈련 효과를 확인하세요.',
      'Track pause time immediately before and after the transfer to measure cluster practice.'
    ),
    steps: [
      b('환승역 중심 5개 역 묶음 만들기', 'Create a five-station cluster'),
      b('순방향·역방향으로 말하기', 'Say it forward and backward'),
      b('화면 없이 순서 회상', 'Recall the order without the screen'),
      b('마지막에 실제 입력으로 연결', 'Finish with actual typing'),
    ],
  },
  {
    slug: 'line-memory-drills',
    title: b('지하철 노선 기억 훈련', 'Subway Line Memory Drills'),
    description: b(
      '다음 역을 더 빨리 떠올리기 위한 앵커·구간·회상 훈련법.',
      'Use anchors, segments, and recall practice to retrieve the next station faster.'
    ),
    intro: b(
      '기록이 느린 이유가 손이 아니라 다음 역 회상이라면 타자 연습만으로는 해결되지 않습니다. 노선을 작은 기억 단위로 바꿔야 합니다.',
      'When the delay comes from recalling the next station rather than typing it, keyboard drills alone will not solve the problem.'
    ),
    problem: b(
      '노선 전체를 한 줄로 외우면 한 역을 놓쳤을 때 뒤 순서까지 함께 무너집니다.',
      'Memorizing the route as one long chain makes every later station vulnerable after one missed link.'
    ),
    method: b(
      '환승역·강 건너기·구간 끝처럼 기억하기 쉬운 앵커를 정하고, 앵커 사이를 5~8개 역 묶음으로 외우세요.',
      'Choose memorable anchors such as transfers or section boundaries, then learn the five-to-eight-station blocks between them.'
    ),
    measure: b(
      '화면이 나타난 뒤 첫 입력까지 걸린 체감 지연을 빠름·보통·느림으로 표시하세요.',
      'Mark recall latency as fast, normal, or slow from display to first keystroke.'
    ),
    steps: [
      b('노선 앵커 3~5개 정하기', 'Choose three to five route anchors'),
      b(
        '앵커 사이를 작은 묶음으로 나누기',
        'Split the space between anchors into blocks'
      ),
      b('화면 없이 다음 역 말하기', 'Say the next station without the screen'),
      b('느린 묶음만 반복하기', 'Repeat only slow-recall blocks'),
    ],
  },
  {
    slug: 'typing-rhythm',
    title: b(
      '역 이름 타이핑 리듬 만들기',
      'Build a Station-Name Typing Rhythm'
    ),
    description: b(
      '음절 단위가 아닌 역 이름 단위로 일정한 한글 입력 리듬을 만드는 연습.',
      'Create a steady Hangul rhythm at the station-name level rather than syllable by syllable.'
    ),
    intro: b(
      '리듬은 무조건 빠르게 치는 것이 아니라, 각 역 이름을 비슷한 준비 과정으로 시작하는 것입니다.',
      'Rhythm is not constant maximum speed; it is starting every station name with the same reliable preparation.'
    ),
    problem: b(
      '첫 음절을 급하게 시작하거나 긴 이름 중간에서 손이 멈추면 다음 역까지 리듬이 흔들립니다.',
      'Rushing the first syllable or freezing midway through a long name disrupts the next station too.'
    ),
    method: b(
      '역 이름을 보기, 첫 음절 준비, 전체 입력, 다음 역 보기의 네 박자로 반복하세요. 익숙해지면 보기와 준비를 겹칩니다.',
      'Repeat a four-beat cycle: read, prepare the first syllable, type the full name, preview the next. Later, overlap reading and preparation.'
    ),
    measure: b(
      '최고 속도 대신 입력 시작 지연과 이름 중간 멈춤 횟수를 기록하세요.',
      'Track start delay and mid-name pauses instead of peak speed.'
    ),
    steps: [
      b('보기-준비-입력-다음 보기 네 박자 사용', 'Use the four-beat cycle'),
      b('첫 음절을 정확히 시작', 'Land the first syllable accurately'),
      b('이름 중간 멈춤 세기', 'Count mid-name pauses'),
      b(
        '익숙해지면 보기와 준비 겹치기',
        'Overlap reading and preparation when stable'
      ),
    ],
  },
  {
    slug: 'error-log',
    title: b('오타 기록표 만드는 법', 'Create a Useful Error Log'),
    description: b(
      '반복해서 틀리는 역 이름과 오류 유형을 기록해 연습 우선순위를 정하는 방법.',
      'Log repeated station-name errors and choose the right practice priority.'
    ),
    intro: b(
      '모든 오타를 같은 문제로 보면 연습량만 늘고 개선은 느립니다. 자모 누락, 순서 착각, 입력 언어 오류를 나눠야 합니다.',
      'Treating every error as the same problem creates more practice but slower improvement. Separate typing, recall, and setup mistakes.'
    ),
    problem: b(
      '완주 후 시간만 보면 어느 역을 왜 틀렸는지 잊어버립니다.',
      'A completion time alone does not preserve which station failed or why.'
    ),
    method: b(
      '역 이름, 오류 유형, 발생 구간, 재시도 결과 네 칸만 기록하세요. 같은 오류가 세 번 나오면 다음 세션의 첫 훈련으로 올립니다.',
      'Log station name, error type, route section, and retry result. Promote any error repeated three times to the first drill of the next session.'
    ),
    measure: b(
      '일주일 단위로 반복 오류 수가 줄었는지 확인하세요. 단발성 오타보다 반복 패턴 감소가 핵심입니다.',
      'Review repeated-error count weekly. Reducing patterns matters more than eliminating every one-off typo.'
    ),
    steps: [
      b('역 이름 기록', 'Record the station name'),
      b(
        '오류를 입력·기억·설정으로 분류',
        'Classify as typing, recall, or setup'
      ),
      b('즉시 한 번 재입력', 'Retry once immediately'),
      b(
        '세 번 반복되면 다음 세션 우선 훈련',
        'Prioritize errors repeated three times'
      ),
    ],
  },
  {
    slug: 'weekly-routine',
    title: b('주 3회 Metro Typing 루틴', 'A Three-Day Metro Typing Routine'),
    description: b(
      '정확도, 노선 기억, 기록 도전을 균형 있게 배치하는 주간 연습 계획.',
      'Balance accuracy, route memory, and personal-best attempts across a week.'
    ),
    intro: b(
      '매일 최고 기록만 시도하면 피로와 운에 따라 결과가 흔들립니다. 연습 목적을 날짜별로 분리하면 변화가 더 잘 보입니다.',
      'Daily personal-best attempts are noisy and tiring. Separate goals by day so progress becomes easier to see.'
    ),
    problem: b(
      '정확도 연습과 기록 도전을 같은 판에서 동시에 하려다 둘 다 애매해지는 경우가 많습니다.',
      'Trying to train accuracy and chase a record in the same run often weakens both goals.'
    ),
    method: b(
      '1일차는 정확도, 2일차는 느린 구간 기억, 3일차는 같은 조건의 기록 도전으로 구성하세요. 세션은 15~20분이면 충분합니다.',
      'Use day one for accuracy, day two for slow-recall sections, and day three for a controlled personal-best attempt. Fifteen to twenty minutes is enough.'
    ),
    measure: b(
      '주간 최고 기록보다 평균 오타와 느린 구간 수를 비교하세요.',
      'Compare average errors and the number of slow-recall sections, not only the weekly best time.'
    ),
    steps: [
      b('1일차: 정확도 두 판', 'Day 1: two accuracy runs'),
      b('2일차: 느린 구간 세 묶음', 'Day 2: three slow-recall blocks'),
      b('3일차: 동일 조건 기록 도전', 'Day 3: a same-condition time attempt'),
      b(
        '주말에 오타·멈춤 변화 검토',
        'Review error and pause trends at week end'
      ),
    ],
  },
  {
    slug: 'warmup-routine',
    title: b('5분 타자 워밍업', 'A Five-Minute Typing Warm-Up'),
    description: b(
      '긴 노선 도전 전에 손 위치와 한글 입력 상태를 빠르게 확인하는 워밍업.',
      'Check hand position and Hangul input before a long route attempt.'
    ),
    intro: b(
      '워밍업은 기록을 내는 시간이 아니라 오늘의 입력 상태를 확인하는 시간입니다.',
      'A warm-up is not a record attempt; it is a check of today’s input readiness.'
    ),
    problem: b(
      '차가운 손, 잘못된 입력 언어, 불안정한 자세로 바로 긴 노선을 시작하면 첫 판이 낭비됩니다.',
      'Cold hands, the wrong input language, or poor posture can waste the first long run.'
    ),
    method: b(
      '1분 설정 확인, 2분 짧은 노선, 1분 오타 역 재입력, 1분 휴식으로 구성하세요.',
      'Use one minute for setup, two minutes on a short route, one minute retyping errors, and one minute of rest.'
    ),
    measure: b(
      '짧은 노선 두 판의 평균 오타가 평소 범위인지 확인한 뒤 긴 도전을 결정하세요.',
      'Check whether the average error count from two short runs is within your normal range before attempting a long route.'
    ),
    steps: [
      b('1분: 입력 언어·자세 확인', '1 minute: input language and posture'),
      b('2분: 짧은 노선 두 판', '2 minutes: two short-route runs'),
      b('1분: 오타 역 재입력', '1 minute: retype error stations'),
      b(
        '1분: 손을 쉬고 긴 도전 결정',
        '1 minute: rest and decide on a long attempt'
      ),
    ],
  },
  {
    slug: 'personal-best-method',
    title: b('공정한 개인 최고 기록 측정', 'Measure a Fair Personal Best'),
    description: b(
      '출발·도착·방향·기기를 통제해 실제로 비교 가능한 Metro Typing 기록을 만드는 법.',
      'Control route and device conditions so Metro Typing results are genuinely comparable.'
    ),
    intro: b(
      '조건이 다른 기록을 비교하면 실력이 아니라 노선 길이와 기기 차이를 측정하게 됩니다.',
      'Comparing unlike runs measures route and device differences rather than skill.'
    ),
    problem: b(
      '방향, 출발점, 입력 기기, 워밍업 여부가 달라지면 같은 노선 이름의 기록도 공정하지 않습니다.',
      'Direction, start point, device, and warm-up status can make two runs on the same line incomparable.'
    ),
    method: b(
      '기준 조건을 한 줄로 저장하고 그 조건과 완전히 같은 판만 개인 기록 후보로 인정하세요. 첫 판은 워밍업으로 제외하는 것도 좋습니다.',
      'Save one baseline setup and only accept runs that match it exactly. Consider excluding the first run as a warm-up.'
    ),
    measure: b(
      '최고 기록과 함께 세 판 중앙값을 저장하면 우연한 한 번과 안정된 실력을 구분할 수 있습니다.',
      'Store the best time and the median of three runs to separate a lucky attempt from stable performance.'
    ),
    steps: [
      b('출발·도착·방향 고정', 'Fix start, end, and direction'),
      b('같은 기기와 브라우저 사용', 'Use the same device and browser'),
      b('첫 판을 워밍업으로 제외', 'Exclude the first run as warm-up'),
      b('최고 기록과 세 판 중앙값 저장', 'Save best time and three-run median'),
    ],
  },
];

const PRACTICE_GUIDE_DETAILS: Record<
  string,
  Pick<PracticeGuideDefinition, 'workedExample' | 'pitfalls'>
> = {
  'hangul-keyboard-setup': {
    workedExample: b(
      '예를 들어 “서울역, 시청, 종각”을 게임과 같은 브라우저의 입력칸에 차례로 입력해 보세요. 첫 글자가 영문으로 나오면 속도 연습을 시작하지 말고 입력 언어를 바꾼 뒤 세 이름을 다시 입력합니다. 세 번 모두 수정 없이 끝난 뒤에만 타이머를 켭니다.',
      'For example, type “Seoul Station, City Hall, Jonggak” in a normal field in the same browser as the game. If the first character appears in English, do not begin a speed drill; switch input mode and retype all three names. Start the timer only after all three need no correction.'
    ),
    pitfalls: [
      b('주소창에서만 테스트하기', 'Testing only in the address bar'),
      b(
        '다른 한글 배열을 켠 채 시작하기',
        'Starting with a different Korean layout enabled'
      ),
      b('모바일 자동 완성을 확인하지 않기', 'Ignoring mobile autocorrect'),
    ],
  },
  'mobile-hangul-typing': {
    workedExample: b(
      '보라매–당곡–서울대벤처타운 세 역을 한 손으로 두 번, 두 손으로 두 번 입력하세요. 네 판 중 수정이 적은 방식을 고르고, 서울대벤처타운에서는 이름을 끝까지 본 뒤에만 엄지를 움직입니다.',
      'Type Boramae–Danggok–Seoul National Univ. Venture Town twice one-handed and twice two-handed. Keep the method with fewer corrections, and at Seoul National Univ. Venture Town do not move your thumbs until you have read the full name.'
    ),
    pitfalls: [
      b(
        '속도만 보고 수정 횟수를 놓치기',
        'Watching speed while ignoring corrections'
      ),
      b(
        '키보드가 다음 역을 가리는 상태',
        'Letting the keyboard hide the next station'
      ),
      b(
        '엄지 두 개를 같은 키 영역에 겹치기',
        'Overlapping both thumbs in one key area'
      ),
    ],
  },
  'accuracy-before-speed': {
    workedExample: b(
      '잠실–석촌–송파–가락시장 구간을 두 번 무오타로 끝냈다면, 세 번째 판에서만 입력 간격을 조금 줄이세요. 세 번째에 가락시장을 수정했다면 그 속도는 아직 기준 기록이 아니며, 이전 간격으로 돌아갑니다.',
      'After two clean runs on Jamsil–Seokchon–Songpa–Garak Market, shorten the input gap only on run three. If Garak Market needs correction on that run, that pace is not yet a baseline; return to the previous gap.'
    ),
    pitfalls: [
      b(
        '한 번의 빠른 기록을 실력으로 판단하기',
        'Treating one fast run as stable skill'
      ),
      b(
        '오타 뒤에도 같은 속도를 유지하기',
        'Keeping the same pace after errors rise'
      ),
      b(
        '정확도 기준 없이 기록 도전하기',
        'Chasing a time without an accuracy threshold'
      ),
    ],
  },
  'transfer-station-drills': {
    workedExample: b(
      '2호선 사당을 중심으로 방배–사당–낙성대처럼 다섯 역 묶음을 만드세요. 먼저 앞에서 뒤로 말하고, 다음에는 뒤에서 앞으로 말한 뒤, 화면을 보며 한 번 입력합니다. 사당에서만 멈춘다면 이름이 아니라 주변 순서 문제가 드러납니다.',
      'Build a five-station cluster around Line 2 Sadang, such as Bangbae–Sadang–Nakseongdae. Say it forward, then backward, then type it once with the screen. If the pause occurs only at Sadang, the issue is the surrounding order rather than the name itself.'
    ),
    pitfalls: [
      b('환승역 이름만 단독으로 외우기', 'Memorizing only the transfer name'),
      b('한 방향으로만 회상하기', 'Recalling in just one direction'),
      b('화면 확인 시간을 기록하지 않기', 'Not tracking screen-check pauses'),
    ],
  },
  'line-memory-drills': {
    workedExample: b(
      '3호선에서 연신내와 종로3가를 앵커로 정하고 그 사이를 두 묶음으로 나누세요. 화면을 가린 채 “연신내 다음 세 역”을 말한 후 입력해 보고, 느린 묶음만 다시 반복합니다.',
      'On Line 3, choose Yeonsinnae and Jongno 3-ga as anchors and split the space between them into two blocks. With the screen covered, say the next three stations after Yeonsinnae, then type them; repeat only the slow block.'
    ),
    pitfalls: [
      b('노선 전체를 한 번에 암기하기', 'Memorizing the entire line at once'),
      b('앵커 없이 긴 목록을 외우기', 'Learning a long list without anchors'),
      b(
        '회상과 타이핑 오류를 구분하지 않기',
        'Failing to separate recall and typing errors'
      ),
    ],
  },
  'typing-rhythm': {
    workedExample: b(
      '“시청–을지로입구–을지로3가”에서 보기, 첫 음절 준비, 이름 입력, 다음 역 보기의 네 박자를 소리 없이 세세요. 을지로3가에서 중간에 멈춘다면 전체 속도를 올리지 말고 첫 음절 준비 시간을 일정하게 맞춥니다.',
      'On “City Hall–Euljiro 1-ga–Euljiro 3-ga,” silently count four beats: read, prepare the opening syllable, type the name, preview the next. If you pause in the middle of Euljiro 3-ga, do not raise overall speed; make the opening preparation time consistent first.'
    ),
    pitfalls: [
      b(
        '음절마다 화면을 다시 보기',
        'Re-reading the screen for every syllable'
      ),
      b('첫 음절을 서두르기', 'Rushing the first syllable'),
      b(
        '긴 이름과 짧은 이름을 같은 힘으로 밀기',
        'Forcing long and short names at identical effort'
      ),
    ],
  },
  'error-log': {
    workedExample: b(
      '고속터미널을 두 번 틀렸다면 표에 “고속터미널 / 자모 누락 / 3호선 남행 / 재입력 성공”처럼 적으세요. 세 번째 반복이면 다음 세션 시작 전에 그 이름과 앞뒤 역을 세 번 입력합니다.',
      'If you miss Express Bus Terminal twice, log “Express Bus Terminal / dropped jamo / Line 3 southbound / retry clean.” On a third repeat, type that name and its neighbors three times before the next session.'
    ),
    pitfalls: [
      b('완주 시간만 기록하기', 'Logging only completion time'),
      b(
        '오류 원인을 모두 오타로 분류하기',
        'Classifying every failure as a typo'
      ),
      b('단발성 오류에 과도하게 집착하기', 'Overreacting to one-off errors'),
    ],
  },
  'weekly-routine': {
    workedExample: b(
      '월요일에는 8호선 한 구간을 두 번 정확하게, 수요일에는 2호선 사당 주변 세 묶음을, 금요일에는 같은 8호선 조건으로 세 판 기록 도전을 합니다. 일요일에는 세 판 평균과 반복 오타만 비교해 다음 주의 첫 묶음을 고르세요.',
      'On Monday, complete one Line 8 section accurately twice; on Wednesday, drill three Line 2 clusters around Sadang; on Friday, make three timed attempts under the same Line 8 conditions. On Sunday, compare only the three-run average and repeated errors to choose next week’s first block.'
    ),
    pitfalls: [
      b('매일 개인 최고 기록만 시도하기', 'Chasing a personal best every day'),
      b('날짜마다 노선 조건을 바꾸기', 'Changing route conditions each day'),
      b('휴식 없이 오타를 반복하기', 'Repeating errors without a break'),
    ],
  },
  'warmup-routine': {
    workedExample: b(
      '1분 동안 한글 입력과 자세를 확인하고, 신림선 샛강–당곡을 두 번 입력하세요. 두 판에서 서울대벤처타운에 모두 멈췄다면 긴 7호선 도전 대신 그 이름을 세 번 재입력하고 손을 1분 쉽니다.',
      'Check Hangul input and posture for one minute, then type the Sillim Line’s Saetgang–Danggok stretch twice. If Seoul National Univ. Venture Town pauses both runs, skip a long Line 7 attempt; retype that name three times and rest your hands for a minute.'
    ),
    pitfalls: [
      b(
        '워밍업을 곧바로 기록 도전으로 바꾸기',
        'Turning warm-up into an immediate record attempt'
      ),
      b('첫 판 오타를 무시하기', 'Ignoring errors in the first run'),
      b('손목 긴장을 확인하지 않기', 'Not checking wrist tension'),
    ],
  },
  'personal-best-method': {
    workedExample: b(
      '“2호선 내선, 시청→잠실, 데스크톱 Chrome, 워밍업 1판 후”를 기준 조건으로 적으세요. 이 조건에서 세 판을 달려 최고 시간과 중앙값을 저장하고, 반대 방향이나 모바일 결과는 별도 기록으로 둡니다.',
      'Write a baseline such as “Line 2 clockwise, City Hall to Jamsil, desktop Chrome, after one warm-up.” Run it three times, save the best time and median, and keep opposite-direction or mobile scores in a separate record.'
    ),
    pitfalls: [
      b(
        '방향이 다른 기록을 함께 비교하기',
        'Comparing results from different directions'
      ),
      b('기기 변경을 기록하지 않기', 'Not recording device changes'),
      b(
        '첫 워밍업 판을 최고 기록 후보에 넣기',
        'Counting the first warm-up as a personal-best candidate'
      ),
    ],
  },
};

const PRACTICE_GUIDES: PracticeGuideDefinition[] = PRACTICE_GUIDES_BASE.map(
  (guide) => ({
    ...guide,
    ...PRACTICE_GUIDE_DETAILS[guide.slug],
  })
);

function resolveLineGuide(
  definition: LineGuideDefinition,
  locale: string
): ResolvedSeoGuide {
  const name = pick(definition.name, locale);
  const korean = locale === 'ko';

  return {
    slug: definition.slug,
    title: korean ? `${name} Metro Typing 공략` : `${name} Metro Typing Guide`,
    description: korean
      ? `${name}에서 자주 막히는 구간, 반복 훈련 순서, 기록 비교 기준을 정리한 실전 가이드.`
      : `A practical guide to difficult sections, repeat drills, and fair score tracking on ${name}.`,
    updatedAt: UPDATED_AT,
    intro: pick(definition.intro, locale),
    sections: [
      {
        title: korean
          ? '이 노선에서 기록이 흔들리는 이유'
          : 'Why this line disrupts your score',
        paragraphs: [pick(definition.challenge, locale)],
        bullets: definition.stickyPoints.map((item) => pick(item, locale)),
      },
      {
        title: korean ? '추천 연습 순서' : 'Recommended practice sequence',
        paragraphs: [pick(definition.drill, locale)],
      },
      {
        title: korean ? '기록을 비교하는 방법' : 'How to compare results',
        paragraphs: [pick(definition.benchmark, locale)],
      },
      {
        title: korean ? '집중 연습할 역' : 'Stations to drill first',
        paragraphs: [
          korean
            ? '아래 역은 이 노선에서 순서 회상이나 입력 리듬이 자주 흔들리는 지점입니다. 전체 노선을 외우기 전에 이 이름과 앞뒤 한두 역부터 반복하세요.'
            : 'These stations are where recall or typing rhythm often breaks on this line. Drill each name with one or two neighbors before trying to memorize the whole route.',
        ],
        bullets: definition.focusStations.map((item) => pick(item, locale)),
      },
      {
        title: korean ? '15분 연습 세션' : 'A 15-minute practice session',
        paragraphs: [pick(definition.sessionDetail, locale)],
      },
      {
        title: korean
          ? '이 노선에서 자주 하는 실수'
          : 'Common mistakes on this line',
        paragraphs: [pick(definition.mistakeDetail, locale)],
      },
    ],
    checklist: definition.checklist.map((item) => pick(item, locale)),
    cta: korean
      ? '같은 조건으로 두 번 반복한 뒤, 가장 오래 멈춘 구간만 다시 연습하세요.'
      : 'Repeat the same setup twice, then practice only the section with the longest pause.',
  };
}

function resolvePracticeGuide(
  definition: PracticeGuideDefinition,
  locale: string
): ResolvedSeoGuide {
  const korean = locale === 'ko';

  return {
    slug: definition.slug,
    title: pick(definition.title, locale),
    description: pick(definition.description, locale),
    updatedAt: UPDATED_AT,
    intro: pick(definition.intro, locale),
    sections: [
      {
        title: korean ? '먼저 확인할 문제' : 'The problem to identify first',
        paragraphs: [pick(definition.problem, locale)],
      },
      {
        title: korean ? '실전 연습 방법' : 'Practice method',
        paragraphs: [pick(definition.method, locale)],
      },
      {
        title: korean ? '개선 여부 측정' : 'How to measure improvement',
        paragraphs: [pick(definition.measure, locale)],
      },
      {
        title: korean ? '실전 예시' : 'Worked example',
        paragraphs: [pick(definition.workedExample, locale)],
      },
      {
        title: korean ? '피해야 할 함정' : 'Pitfalls to avoid',
        paragraphs: [
          korean
            ? '연습량이 늘어도 아래 습관이 남으면 기록이 잘 안 움직입니다. 한 세션에 하나만 고치는 편이 낫습니다.'
            : 'More practice will not help much if these habits remain. Fix one of them per session.',
        ],
        bullets: definition.pitfalls.map((item) => pick(item, locale)),
      },
    ],
    checklist: definition.steps.map((item) => pick(item, locale)),
    cta: korean
      ? '한 번에 한 가지 변수만 바꾸고, 같은 조건의 두 번째 판에서 효과를 확인하세요.'
      : 'Change one variable at a time and verify the effect on a second run under the same conditions.',
  };
}

export const LINE_GUIDE_SLUGS = LINE_GUIDES.map((guide) => guide.slug);
export const PRACTICE_GUIDE_SLUGS = PRACTICE_GUIDES.map((guide) => guide.slug);

export function getLineGuide(slug: string, locale: string) {
  const guide = LINE_GUIDES.find((item) => item.slug === slug);
  return guide ? resolveLineGuide(guide, locale) : null;
}

export function getPracticeGuide(slug: string, locale: string) {
  const guide = PRACTICE_GUIDES.find((item) => item.slug === slug);
  return guide ? resolvePracticeGuide(guide, locale) : null;
}

export function getLineGuideSummaries(locale: string) {
  return LINE_GUIDES.map((guide) => {
    const resolved = resolveLineGuide(guide, locale);
    return {
      slug: resolved.slug,
      title: resolved.title,
      description: resolved.description,
    };
  });
}

export function getPracticeGuideSummaries(locale: string) {
  return PRACTICE_GUIDES.map((guide) => {
    const resolved = resolvePracticeGuide(guide, locale);
    return {
      slug: resolved.slug,
      title: resolved.title,
      description: resolved.description,
    };
  });
}
