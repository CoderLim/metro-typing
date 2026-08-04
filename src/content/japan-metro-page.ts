export type JapanMetroPageCopy = {
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
  eyebrow: string;
  reviewed: string;
  h1: string;
  intro: string[];
  facts: Array<{ value: string; label: string; detail: string }>;
  overviewTitle: string;
  overviewBlocks: Array<{ title: string; paragraphs: string[] }>;
  howToTitle: string;
  howToIntro: string;
  steps: Array<{ title: string; description: string }>;
  practiceTitle: string;
  practiceParagraphs: string[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonHeaders: [string, string, string];
  comparisonRows: Array<[string, string, string]>;
  comparisonAfter: string[];
  improveTitle: string;
  improveBlocks: Array<{ title: string; paragraphs: string[] }>;
  sourceTitle: string;
  sourceParagraphs: string[];
  sourceLinks: Array<{ href: string; label: string; title: string }>;
  relatedTitle: string;
  relatedLinks: Array<{ href: string; label: string; title: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  playCta: string;
  playCtaTitle: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
};

const COPY: Record<string, JapanMetroPageCopy> = {
  ja: {
    metaTitle:
      '電車でタイピング - 全国602路線・8783駅の無料駅名ゲームオンライン | Metro Typing',
    metaDescription:
      '電車でタイピングを無料でプレイ。全国602路線・8783駅の実在する駅名をローマ字入力やかな入力で打ち、山手線周回、日本縦断、区間指定などのモードに挑戦できます。登録なしでも進捗と記録をブラウザへ自動保存。駅名を覚えながら正確さとWPMを伸ばしたい人は、今すぐ無料で日本の電車タイピングを始めましょう。',
    ogImageAlt: '日本全国の実在駅名で遊ぶ電車でタイピング',
    eyebrow: 'JAPAN TRAIN TYPING',
    reviewed: '公開画面・仕様確認：2026年8月4日',
    h1: '電車でタイピング｜全国602路線・8783駅の無料駅名ゲーム',
    intro: [
      '電車でタイピングは、日本全国の実在する駅名を一つずつ正しく入力し、列車を次の駅へ進める無料ブラウザゲームです。ページ上部のゲームからすぐ始められ、インストールも必須登録もありません。駅名の読みをローマ字またはかなで打ちながら、路線を広げ、記録を残し、苦手な入力を繰り返し練習できます。',
      '本ページでは、2026年8月4日時点の公開ゲーム、遊び方、スコア説明、鉄道データ出典を実際に照合しました。単に「日本版も遊べる」と紹介するのではなく、最初の駅の選び方、受け付けるローマ字、6つのモード、WPMと正確率の見方まで、プレイ前に必要な情報をまとめています。',
    ],
    facts: [
      {
        value: '602',
        label: '収録路線',
        detail: '公開中の生成データに含まれる路線数',
      },
      {
        value: '8,783',
        label: '収録駅',
        detail: '同一駅を統合したstation_g_cd単位の駅数',
      },
      {
        value: '6',
        label: 'プレイモード',
        detail: '冒険・山手線周回・区間指定など',
      },
    ],
    overviewTitle: '電車でタイピングとは？実在駅名を使う日本版の特徴',
    overviewBlocks: [
      {
        title: '全国の鉄道網が、そのまま練習の進み方になる',
        paragraphs: [
          '一般的なタイピング練習は、用意された単語を順番に消化します。電車でタイピングでは、現在地から路線と方向を選び、次の駅名を打つこと自体がゲームの進行です。最初は全国の収録駅から好きな出発駅を検索でき、駅へ到着するたびに進捗が保存されます。地元の路線から始めても、旅行で知った駅から始めても構いません。',
          '公開データには602路線・8783駅が含まれます。ただし、これは運行情報や公式の乗換案内ではありません。駅名、読み、駅順、接続、位置情報をゲーム向けに変換したデータであり、時刻、運賃、工事、実際の改札内乗換は各鉄道事業者の公式案内を確認する必要があります。',
        ],
      },
      {
        title: 'ローマ字入力とかな入力を選べる',
        paragraphs: [
          '日本版はローマ字入力とかな入力に対応しています。ローマ字は表示された綴り一つだけを暗記させる方式ではなく、「し」のshi・si・ci、「ち」のchi・ti、「きゃ」のkyaや分解入力など、普段使う複数の打ち方を受け付けます。促音、撥音、長音、駅名中の中黒にも個別ルールがあります。',
          'たとえば「ん」は、語末や次の音によってn一つで確定しない場合があります。止まったときはnn、n\'、xnを試します。こうした判定は日本語入力で実際につまずきやすい位置を練習できるため、単純なアルファベット連打よりも実用的です。',
        ],
      },
    ],
    howToTitle: '電車でタイピングの遊び方｜最初の5分で出発する手順',
    howToIntro:
      'ゲームは首都圏の特定駅から固定で始まるのではなく、収録済みの全国駅から出発点を選べます。初回は次の順番で進めると迷いません。',
    steps: [
      {
        title: 'アドベンチャーモードを選ぶ',
        description:
          '未解放の状態でも入れる基本モードです。現在地から隣接駅へ進みながら遊べる範囲を広げます。',
      },
      {
        title: '好きな出発駅を検索する',
        description:
          '漢字、読み、ローマ字の一部から候補を探し、最初の現在地にする駅を一つ選びます。',
      },
      {
        title: '路線と進行方向を決める',
        description:
          '地図上で現在地から乗れる路線を確認し、どちら側へ進むかを選択します。',
      },
      {
        title: '表示された駅名を最後まで打つ',
        description:
          '正しいキーで一文字ずつ進みます。誤入力は記録されますが、正しいキーを打つまで列車は進みません。',
      },
      {
        title: '到着後に続行または下車する',
        description:
          '駅へ着くと進捗が保存されます。次の駅へ続けるか、その駅で区切って結果を確認します。',
      },
    ],
    practiceTitle: '6つのモードを目的別に使い分ける',
    practiceParagraphs: [
      '最初はアドベンチャーで駅を解放します。山手線周回は進捗に関係なく挑戦でき、ランダムと区間指定は2駅以上の解放後、一路線完走は対象路線の全駅解放後、日本縦断は全国の収録駅を解放した後に利用できます。短時間の測定なら60秒の山手線周回、苦手駅の反復なら区間指定、長い集中練習なら一路線完走が向いています。',
      '電車でタイピングを初めて使う日は、知っている駅を起点に3〜5駅だけ進み、同じ区間をもう一度打つ方法がおすすめです。1回目は読みと入力ルールを確認し、2回目は正確率を落とさず間を短くします。知らない長い路線へいきなり挑むより、改善点が見えやすくなります。',
    ],
    comparisonTitle: '日本版と韓国版Metro Typingの違い',
    comparisonIntro:
      'どちらも駅名を正しく打つと列車が進むゲームですが、収録地域、入力方式、進め方が異なります。同じページを国名だけ置き換えたものではありません。',
    comparisonHeaders: ['比較項目', '日本版', '韓国版'],
    comparisonRows: [
      ['舞台', '日本全国602路線・8783駅', '韓国の地下鉄・都市鉄道路線'],
      ['主な入力', 'ローマ字入力・かな入力', 'ハングル入力・英語駅名入力'],
      ['基本の進行', '出発駅から駅と路線を解放する冒険型', '路線・区間・方向を選んで記録へ挑戦'],
      ['向いている人', '日本語入力、駅名、全国路線を一緒に楽しみたい人', '韓国語入力や韓国の地下鉄路線を練習したい人'],
    ],
    comparisonAfter: [
      '日本の駅名をローマ字やかなで練習したいなら、このページ上部の日本版を選びます。ハングルのリズムや韓国路線の順番を覚えたい場合は、国選択から韓国版へ戻れます。',
      '地域をまたいで遊ぶときは、同じ入力方式、同じ端末、同じモードの記録だけを比較してください。駅名の長さも必要キー数も違うため、日本版のWPMと韓国版の完走時間を単純に優劣として比べることはできません。',
    ],
    improveTitle: '駅名タイピングの記録を伸ばす実践方法',
    improveBlocks: [
      {
        title: 'WPMより先に正確率を安定させる',
        paragraphs: [
          '日本版のWPMは、確定した正打鍵数を経過分数で割った値です。スコアはWPM×正確率×正確率で計算されるため、同じ300 WPMでも正確率90%なら243、80%なら192になります。急いでミスを増やすより、止まる綴りを一つ減らす方がスコアへ効きます。',
          '結果を見るときはWPMだけでなく正確率も一緒に記録します。入力方式、端末、モード、区間を固定し、3回の平均で変化を見ると、偶然の自己ベストに振り回されません。',
        ],
      },
      {
        title: '苦手な駅を短い区間で反復する',
        paragraphs: [
          '長い駅名、拗音や促音を含む駅、似た読みが続く区間は速度が落ちやすい場所です。最初の周回で止まった駅を2〜3個だけ控え、区間指定が使えるようになったら、その駅を含む短い経路を繰り返します。',
          '電車でタイピングは、正解した駅が次の旅につながるため、練習の目的を作りやすい設計です。毎日10分なら、前半5分を同じ区間、後半5分を新しい方向へ進む時間に分けると、反復と探索の両方を続けられます。',
        ],
      },
    ],
    sourceTitle: '収録データと仕様の確認先',
    sourceParagraphs: [
      '本ページの路線数、駅数、入力ルール、モード、保存方法、スコア計算は、電車でタイピングの公開画面と運営者が公開している説明ページを確認して記載しています。数字はデータ更新や駅の統廃合で変わる可能性があるため、最新値は公式の対応路線一覧とデータ出典ページを優先してください。',
      'ゲーム内の接続や地図線形は遊びやすさのために加工されており、旅行時の乗換、運休、時刻、運賃を判断する用途には使えません。実際に移動するときは各鉄道事業者の公式情報を確認してください。',
    ],
    sourceLinks: [
      {
        href: 'https://densyatyping.com/about',
        label: 'ゲームの目的・仕組み・運営方針',
        title: '電車でタイピングの公式概要を開く',
      },
      {
        href: 'https://densyatyping.com/how-to-play',
        label: '公式の詳しい遊び方',
        title: '電車でタイピングの公式遊び方を開く',
      },
      {
        href: 'https://densyatyping.com/guide/score-and-wpm',
        label: 'スコアとWPMの計算方法',
        title: '公式のスコアとWPM解説を開く',
      },
      {
        href: 'https://densyatyping.com/credits',
        label: '鉄道データの出典と制約',
        title: '電車でタイピングのデータ出典を開く',
      },
    ],
    relatedTitle: 'ほかの国のMetro Typingと練習ガイド',
    relatedLinks: [
      {
        href: '/',
        label: '韓国のMetro Typingをプレイ',
        title: '韓国版Metro Typingのホームへ移動',
      },
      {
        href: '/tips',
        label: 'タイピング精度を上げる練習のコツ',
        title: 'Metro Typingの練習ヒントを読む',
      },
      {
        href: '/blog/china-metro-typing',
        label: '中国Metro Typingとの違いを読む',
        title: '中国Metro Typingの紹介記事を読む',
      },
    ],
    faqTitle: '電車でタイピングのよくある質問',
    faq: [
      {
        question: '電車でタイピングは無料ですか？',
        answer:
          'はい。ブラウザから無料で始められます。基本プレイのためにアプリのインストールや有料登録は必要ありません。',
      },
      {
        question: '会員登録をしなくても記録は残りますか？',
        answer:
          'ゲストの進捗、スコア、実績は利用中のブラウザのlocalStorageへ保存されます。別端末でも続けたい場合だけGoogleログインによるクラウド保存を選べます。',
      },
      {
        question: 'ローマ字は表示どおりに打つ必要がありますか？',
        answer:
          '一つの綴りだけが正解ではありません。shi・si・ci、chi・ti、kyaや分解入力など複数の一般的な入力を受け付けます。撥音や促音では次の文字に応じた入力が必要です。',
      },
      {
        question: 'どのモードから始めるのがおすすめですか？',
        answer:
          '初回は好きな駅を選べるアドベンチャーモードが基本です。短い測定は山手線周回、苦手区間の反復は区間指定、長時間の練習は一路線完走が向いています。',
      },
      {
        question: '実際の乗換や運行情報にも使えますか？',
        answer:
          '使えません。ゲーム用に加工した路線・接続データで、時刻、運賃、運休、改札、公式な乗換経路は扱いません。旅行時は鉄道事業者の公式案内を確認してください。',
      },
    ],
    playCta: '電車でタイピングを今すぐプレイ',
    playCtaTitle: 'ページ上部の日本版電車タイピングへ戻る',
    breadcrumbHome: 'ホーム',
    breadcrumbCurrent: '電車でタイピング',
  },
  zh: {
    metaTitle: '日本电车打字 - 602条线路与8783个真实车站游戏 | Metro Typing',
    metaDescription:
      '日本电车打字可免费游玩，收录602条线路和8783个真实车站，支持罗马字与假名输入。选择起点后解锁路线，挑战山手线环游、区间练习和日本纵贯模式。无需注册即可保存进度，现在开始练习。',
    ogImageAlt: '使用日本真实车站名称游玩的电车打字游戏',
    eyebrow: 'JAPAN TRAIN TYPING',
    reviewed: '页面与规则核验日期：2026年8月4日',
    h1: '日本电车打字｜602条线路与8783个真实车站游戏',
    intro: [
      '日本电车打字是一款直接在浏览器中运行的免费车站名打字游戏。正确输入当前车站名称后，列车会沿真实线路前往下一站；你可以从全国已收录车站中选择起点，通过持续输入逐步解锁车站、线路和新模式。页面上方已经嵌入游戏，不需要先阅读长篇说明，也不强制安装应用或注册账号。',
      '我们在2026年8月4日核对了游戏首页、玩法说明、计分规则和数据来源。下面的内容只描述当前公开功能，包括602条线路、8783个合并后的车站、罗马字与假名输入、6种模式、游客本地保存以及WPM与准确率计算，不使用无法验证的宣传数据。',
    ],
    facts: [
      { value: '602', label: '已收录线路', detail: '当前公开生成数据中的线路数量' },
      { value: '8,783', label: '已收录车站', detail: '按station_g_cd合并后的车站数量' },
      { value: '6', label: '游戏模式', detail: '冒险、山手线环游、区间指定等' },
    ],
    overviewTitle: '日本电车打字是什么？',
    overviewBlocks: [
      {
        title: '把真实铁路网络变成练习进度',
        paragraphs: [
          '普通打字练习通常只给出一组随机词语，日本电车打字则把“下一站”变成明确目标。首次进入冒险模式时，可以通过汉字、读音或罗马字搜索任意已收录车站作为起点，再从地图上选择线路和方向。完成一个车站后，抵达记录会被保存，之后可使用的路线范围也会扩大。',
          '602条线路和8783个车站来自公开数据经过游戏化处理后的结果，并不是实时运营数据库。页面不能查询班次、票价、停运、施工或真实换乘路径，出行时仍应以铁路运营方的官方信息为准。',
        ],
      },
      {
        title: '支持罗马字和假名两种输入',
        paragraphs: [
          '罗马字模式并不要求死记屏幕上的唯一拼写。例如“し”可接受shi、si、ci，“ち”可接受chi、ti，“きゃ”既可输入kya，也支持拆分输入。促音、拨音、长音和车站名中的分隔符都有单独判定规则。',
          '假名模式适合已经熟悉日文键盘布局的玩家。无论选择哪种输入方式，比较成绩时都应保持模式、设备和输入方式一致，因为一个音节所需按键数不同，直接比较会失真。',
        ],
      },
    ],
    howToTitle: '日本电车打字怎么玩？5步开始',
    howToIntro: '第一次进入时，使用冒险模式最容易理解完整流程。',
    steps: [
      { title: '选择冒险模式', description: '无需预先解锁即可进入，从一个车站开始扩展铁路网络。' },
      { title: '搜索起始车站', description: '通过汉字、读音或罗马字搜索全国已收录车站，选择一个作为当前位置。' },
      { title: '选择线路和方向', description: '在地图中查看当前位置可乘坐的线路，并决定前进方向。' },
      { title: '完整输入车站名', description: '每个正确按键都会推进输入位置；输错会记录为失误，修正前列车不会前进。' },
      { title: '到站后继续或下车', description: '抵达后自动保存进度，可继续下一站，也可结束本次练习查看结果。' },
    ],
    practiceTitle: '按目标选择6种游戏模式',
    practiceParagraphs: [
      '冒险模式用于解锁车站；山手线环游不受解锁进度限制，适合60秒短测；随机模式和区间指定在解锁至少2个车站后开放；完整线路模式要求先解锁该线路全部车站；日本纵贯则是完成全国解锁后的综合挑战。',
      '新手可以先选熟悉车站，只练3到5站。第一轮确认读音和输入规则，第二轮保持准确率并缩短停顿。日本电车打字的优势不在于一次跑很远，而在于能把卡住的车站转换成可重复的短区间。',
    ],
    comparisonTitle: '日本版与韩国版Metro Typing有什么区别？',
    comparisonIntro: '两者都通过输入车站名推动列车，但收录范围、输入语言和成长方式不同。',
    comparisonHeaders: ['对比项', '日本版', '韩国版'],
    comparisonRows: [
      ['地图范围', '日本全国602条线路、8783个车站', '韩国地铁与城市轨道线路'],
      ['主要输入', '罗马字、假名', '韩文、英文车站名'],
      ['核心进度', '从起点出发逐步解锁车站和线路', '选择线路、区间与方向挑战记录'],
      ['适合用户', '练习日语输入并探索日本铁路', '练习韩文输入和韩国地铁顺序'],
    ],
    comparisonAfter: [
      '想练习日本车站名时使用本页上方的日本版；想输入韩文车站名时，可通过国家选择切换回韩国版。两套游戏不是同一模板替换国家名称，而是根据不同语言输入和铁路结构设计。',
      '跨版本比较成绩时，不要直接把日本版WPM与韩国版完赛时间放在一起。车站名长度、输入法和计分口径不同，应只比较同一版本、同一模式下的连续记录。',
    ],
    improveTitle: '如何提高车站名打字成绩',
    improveBlocks: [
      {
        title: '先稳定准确率，再提高WPM',
        paragraphs: [
          '日本版WPM按“已确认的正确按键数÷经过分钟数”计算，得分则为WPM×准确率×准确率。相同300 WPM下，90%准确率得分为243，80%准确率只有192，因此盲目加速并不一定提升总分。',
          '记录成绩时同时保留WPM和准确率，并固定输入方式、设备、模式与区间。用3次平均值观察变化，比只看一次最高分更可靠。',
        ],
      },
      {
        title: '用短区间重复难读车站',
        paragraphs: [
          '包含拗音、促音、长音或相似读音的车站更容易造成停顿。先记下本轮卡住的2到3个车站，解锁区间指定后，把这些车站放在同一短路线中反复练习。',
          '每天10分钟可以拆成两段：前5分钟重复固定区间，后5分钟沿新方向解锁。这样既能形成肌肉记忆，也不会因为只练同一组词而失去探索感。',
        ],
      },
    ],
    sourceTitle: '数据、规则与可信来源',
    sourceParagraphs: [
      '本页引用的线路数、车站数、输入规则、模式、保存方式和计分公式，都来自游戏公开页面与运营方说明。数据会随线路调整而变化，最新数字应以官方的支持线路和数据来源页面为准。',
      '游戏地图和连接关系经过加工，不能替代真实换乘、时刻、票价和运营信息。实际出行请查看铁路公司的官方公告。',
    ],
    sourceLinks: [
      { href: 'https://densyatyping.com/about', label: '游戏机制与运营说明', title: '打开日本电车打字官方介绍' },
      { href: 'https://densyatyping.com/how-to-play', label: '官方玩法说明', title: '打开日本电车打字官方玩法' },
      { href: 'https://densyatyping.com/guide/score-and-wpm', label: 'WPM与得分计算', title: '打开官方WPM与得分说明' },
      { href: 'https://densyatyping.com/credits', label: '铁路数据来源与限制', title: '打开官方铁路数据来源页面' },
    ],
    relatedTitle: '其他国家版本与练习内容',
    relatedLinks: [
      { href: '/', label: '玩韩国Metro Typing', title: '返回韩国版Metro Typing首页' },
      { href: '/tips', label: '查看提高准确率的练习技巧', title: '阅读Metro Typing练习技巧' },
      { href: '/blog/china-metro-typing', label: '了解中国Metro Typing', title: '阅读中国Metro Typing介绍' },
    ],
    faqTitle: '日本电车打字常见问题',
    faq: [
      { question: '日本电车打字免费吗？', answer: '免费。可以直接在浏览器中开始，基本游玩不要求安装应用或购买会员。' },
      { question: '不登录会保存进度吗？', answer: '会。游客进度、得分和成就保存在当前浏览器的localStorage中；需要跨设备同步时才选择Google登录。' },
      { question: '罗马字必须完全按照提示输入吗？', answer: '不需要。游戏接受shi、si、ci等常见写法，也支持拗音拆分、促音、拨音和长音的多种输入。' },
      { question: '新手先玩哪个模式？', answer: '先用冒险模式选择熟悉车站。想做短时间测试时再玩山手线环游，解锁足够车站后使用区间指定重复弱项。' },
      { question: '可以查询真实列车时刻和换乘吗？', answer: '不可以。它是打字游戏，不提供实时运营、票价或官方换乘信息。' },
    ],
    playCta: '回到上方开始日本电车打字',
    playCtaTitle: '返回页面顶部的日本电车打字游戏',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '日本电车打字',
  },
  en: {
    metaTitle: 'Japan Train Typing - 8,783 Real Stations | Metro Typing',
    metaDescription:
      'Play Japan Train Typing free with 602 railway lines and 8,783 real stations. Type in romaji or kana, unlock routes, and try Yamanote Loop, segment practice, full-line, and Japan traversal modes in your browser.',
    ogImageAlt: 'Japan Train Typing with real railway station names',
    eyebrow: 'JAPAN TRAIN TYPING',
    reviewed: 'Game and documentation reviewed: August 4, 2026',
    h1: 'Japan Train Typing with 602 Lines and 8,783 Real Stations',
    intro: [
      'Japan Train Typing is a free browser game where every correctly typed station name moves your train to the next stop. The game is embedded above, so the primary task is available immediately without an app install or mandatory account. Choose a starting station, type in romaji or kana, unlock more of the railway network, and use your results to repeat difficult names.',
      'We checked the live game, how-to guide, scoring documentation, and data credits on August 4, 2026. The details below reflect the published product: 602 lines, 8,783 merged stations, six modes, local guest saves, optional cloud sync, and scoring based on WPM and accuracy.',
    ],
    facts: [
      { value: '602', label: 'railway lines', detail: 'included in the current generated dataset' },
      { value: '8,783', label: 'stations', detail: 'merged by station_g_cd' },
      { value: '6', label: 'play modes', detail: 'adventure, Yamanote loop, segments, and more' },
    ],
    overviewTitle: 'What makes Japan Train Typing different?',
    overviewBlocks: [
      {
        title: 'A real railway network becomes your practice path',
        paragraphs: [
          'Instead of clearing unrelated words, you begin at a station and choose a line and direction from the map. Completing the next station saves your arrival and expands the network you can use. Your first station is not fixed: search the published station set by kanji, reading, or romaji and start from a place you know.',
          'The 602-line and 8,783-station figures describe the current game dataset, not a live transit service. Timetables, fares, disruptions, construction, and official transfer routes are outside the game and must be checked with railway operators.',
        ],
      },
      {
        title: 'Romaji and kana input with practical alternatives',
        paragraphs: [
          'Romaji mode accepts common alternatives rather than forcing one displayed spelling. For example, し can accept shi, si, or ci; ち can accept chi or ti; and contracted sounds can use a combined or decomposed form. Sokuon, ん, long vowels, and separators have their own rules.',
          'Kana mode is available for players familiar with a Japanese keyboard layout. Compare records only under the same input method, device, route, and mode because the number of physical keys needed for a reading changes between romaji and kana.',
        ],
      },
    ],
    howToTitle: 'How to play Japan Train Typing in five steps',
    howToIntro: 'Adventure mode gives first-time players the clearest route into the game.',
    steps: [
      { title: 'Open Adventure mode', description: 'Enter before unlocking anything and grow the network from one starting point.' },
      { title: 'Search for a starting station', description: 'Use kanji, reading, or romaji to choose one station from the published nationwide set.' },
      { title: 'Choose a line and direction', description: 'Use the map to see what leaves your current station and pick the direction to travel.' },
      { title: 'Type the full station name', description: 'Correct keys advance the input. A mistake is recorded and the train waits for the correct key.' },
      { title: 'Continue or stop after arrival', description: 'Arrival saves progress. Continue to the next stop or end the session and review the result.' },
    ],
    practiceTitle: 'Choose among six modes by training goal',
    practiceParagraphs: [
      'Adventure unlocks stations. Yamanote Loop is available without progression and works as a 60-second test. Random and segment modes unlock after at least two stations; full-line mode requires every station on that line; Japan traversal appears after the nationwide set is unlocked.',
      'For a first session, start on a familiar three-to-five-station stretch. Use the first run to learn readings and input rules, then repeat it while protecting accuracy. Short repetition makes a specific hesitation visible faster than an immediate attempt at a long unfamiliar route.',
    ],
    comparisonTitle: 'Japan Train Typing vs Korea Metro Typing',
    comparisonIntro: 'Both move a train through correct station input, but their maps, scripts, and progression loops are different.',
    comparisonHeaders: ['Category', 'Japan version', 'Korea version'],
    comparisonRows: [
      ['Coverage', '602 Japanese lines and 8,783 stations', 'Korean subway and urban rail routes'],
      ['Primary input', 'Romaji and kana', 'Hangul and English station names'],
      ['Progression', 'Unlock stations and lines from a chosen origin', 'Choose a line, section, and direction to challenge a record'],
      ['Best for', 'Japanese input and nationwide rail exploration', 'Korean typing and Korean subway order'],
    ],
    comparisonAfter: [
      'Use the game above when your goal is Japanese station-name practice. Switch to Korea from the country selector when you want Hangul input or Korean route memory. The two experiences are not a country-name swap; they are built around different input systems and network structures.',
      'Do not rank a Japan WPM against a Korea completion time. Station length, accepted input, and measurement differ. Compare repeated runs inside the same version, mode, device, and input method.',
    ],
    improveTitle: 'How to improve station-name typing results',
    improveBlocks: [
      {
        title: 'Stabilize accuracy before chasing WPM',
        paragraphs: [
          'WPM is confirmed correct keystrokes divided by elapsed minutes. Score is WPM multiplied by accuracy twice. At 300 WPM, 90% accuracy produces 243 points while 80% produces 192, so uncontrolled speed can lower the result.',
          'Record WPM and accuracy together. Keep input method, device, mode, and section fixed, then compare a three-run average instead of one lucky personal best.',
        ],
      },
      {
        title: 'Repeat a short section containing difficult names',
        paragraphs: [
          'Long readings, contracted sounds, doubled consonants, and similar station names create predictable pauses. Note two or three stops that caused a stall and use segment mode to place them inside a short repeatable route.',
          'A practical ten-minute routine is five minutes on one fixed section and five minutes exploring a new direction. That keeps deliberate repetition without removing the travel and discovery loop that makes the game engaging.',
        ],
      },
    ],
    sourceTitle: 'Verified rules and data sources',
    sourceParagraphs: [
      'The figures, input behavior, modes, save rules, and score formula on this page come from the live product and documentation published by the game operator. The dataset can change as stations and lines change, so the official coverage and credits pages are the latest reference.',
      'Game connections and map geometry are processed for play. They are not official routing, timetable, fare, or disruption information. Use railway operator sources for real travel decisions.',
    ],
    sourceLinks: [
      { href: 'https://densyatyping.com/about', label: 'Game purpose and operating policy', title: 'Open the official Japan Train Typing overview' },
      { href: 'https://densyatyping.com/how-to-play', label: 'Official how-to-play guide', title: 'Open the official Japan Train Typing guide' },
      { href: 'https://densyatyping.com/guide/score-and-wpm', label: 'Score and WPM formula', title: 'Open the official score and WPM guide' },
      { href: 'https://densyatyping.com/credits', label: 'Rail data sources and limitations', title: 'Open the official rail data credits' },
    ],
    relatedTitle: 'Other countries and practice guides',
    relatedLinks: [
      { href: '/', label: 'Play Korea Metro Typing', title: 'Go to Korea Metro Typing' },
      { href: '/tips', label: 'Read accuracy and practice tips', title: 'Read Metro Typing practice tips' },
      { href: '/blog/china-metro-typing', label: 'Compare China Metro Typing', title: 'Read the China Metro Typing article' },
    ],
    faqTitle: 'Japan Train Typing FAQ',
    faq: [
      { question: 'Is Japan Train Typing free?', answer: 'Yes. It runs in a browser and basic play does not require an app purchase or paid account.' },
      { question: 'Does progress save without signing in?', answer: 'Yes. Guest progress, scores, and achievements save in the current browser localStorage. Google sign-in is optional for cloud sync across devices.' },
      { question: 'Must I type exactly one romaji spelling?', answer: 'No. Common alternatives such as shi, si, ci, chi, ti, combined sounds, and decomposed forms are accepted where documented.' },
      { question: 'Which mode should a beginner use?', answer: 'Start with Adventure on a familiar station. Use Yamanote Loop for a short test and segment mode later for targeted repetition.' },
      { question: 'Can it replace a transit planner?', answer: 'No. The game does not provide live schedules, fares, disruptions, or official transfer guidance.' },
    ],
    playCta: 'Play Japan Train Typing above',
    playCtaTitle: 'Return to the Japan Train Typing game at the top',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Japan Train Typing',
  },
  ko: {
    metaTitle: '일본 전철 타이핑 - 602개 노선 무료 역명 게임 | Metro Typing',
    metaDescription:
      '일본 전철 타이핑을 무료로 플레이하세요. 602개 노선과 8,783개 실제 역명을 로마자 또는 가나로 입력하고, 야마노테선 순환·구간 연습·전 노선 완주·일본 종단 모드에 도전할 수 있습니다.',
    ogImageAlt: '일본 실제 역명으로 플레이하는 전철 타이핑 게임',
    eyebrow: 'JAPAN TRAIN TYPING',
    reviewed: '공개 화면 및 규칙 확인: 2026년 8월 4일',
    h1: '일본 전철 타이핑｜602개 노선과 8,783개 실제 역명 게임',
    intro: [
      '일본 전철 타이핑은 실제 역명을 정확히 입력할 때마다 열차가 다음 역으로 이동하는 무료 브라우저 게임입니다. 위 게임에서 바로 시작할 수 있으며 앱 설치나 필수 회원가입이 없습니다. 출발역을 고르고 로마자 또는 가나로 역명을 입력하면서 역과 노선을 해제하고 기록을 남길 수 있습니다.',
      '2026년 8월 4일 기준 공개 게임, 플레이 방법, 점수 설명, 철도 데이터 출처를 직접 확인했습니다. 현재 안내되는 범위는 602개 노선, 통합 기준 8,783개 역, 6개 모드, 게스트 로컬 저장, 선택형 클라우드 저장, WPM과 정확도를 함께 쓰는 점수 방식입니다.',
    ],
    facts: [
      { value: '602', label: '수록 노선', detail: '현재 생성 데이터에 포함된 노선 수' },
      { value: '8,783', label: '수록 역', detail: 'station_g_cd 기준 통합 역 수' },
      { value: '6', label: '플레이 모드', detail: '어드벤처, 야마노테 순환, 구간 지정 등' },
    ],
    overviewTitle: '일본 전철 타이핑은 어떤 게임인가요?',
    overviewBlocks: [
      {
        title: '실제 철도망이 연습 진행도가 됩니다',
        paragraphs: [
          '무작위 단어를 치는 대신 현재 역에서 노선과 방향을 선택하고 다음 역명을 입력합니다. 첫 출발역은 고정되어 있지 않습니다. 한자, 읽기, 로마자로 전국 수록 역을 검색해 익숙한 곳에서 시작할 수 있고, 도착한 역은 진행도에 저장됩니다.',
          '602개 노선과 8,783개 역은 게임용으로 가공된 현재 데이터 범위입니다. 실시간 시간표, 운임, 운휴, 공사, 공식 환승 경로는 제공하지 않으므로 실제 이동에는 철도 운영사의 공식 정보를 확인해야 합니다.',
        ],
      },
      {
        title: '로마자와 가나 입력을 모두 지원합니다',
        paragraphs: [
          '로마자는 화면에 보이는 한 가지 철자만 정답으로 강제하지 않습니다. し는 shi·si·ci, ちは chi·ti, きゃ는 kya와 분해 입력을 받을 수 있습니다. 촉음, 발음 ん, 장음, 역명 구분 기호도 별도 규칙으로 처리합니다.',
          '가나 입력은 일본어 키보드 배열에 익숙한 사용자에게 맞습니다. 로마자와 가나는 한 소리에 필요한 키 수가 다르므로 기록을 비교할 때 입력 방식, 기기, 모드, 구간을 같게 유지해야 합니다.',
        ],
      },
    ],
    howToTitle: '일본 전철 타이핑 플레이 방법 5단계',
    howToIntro: '처음에는 어드벤처 모드로 전체 흐름을 익히는 것이 가장 쉽습니다.',
    steps: [
      { title: '어드벤처 모드 선택', description: '해제된 역이 없어도 들어갈 수 있고 한 출발점에서 철도망을 넓힙니다.' },
      { title: '출발역 검색', description: '한자, 읽기, 로마자로 전국 수록 역 중 하나를 현재 위치로 정합니다.' },
      { title: '노선과 방향 선택', description: '지도에서 현재 역에 연결된 노선을 보고 진행 방향을 고릅니다.' },
      { title: '역명을 끝까지 입력', description: '정확한 키는 다음 글자로 이동하고, 오타는 기록되며 올바른 키 전까지 열차가 기다립니다.' },
      { title: '도착 후 계속 또는 종료', description: '도착하면 진행도가 저장됩니다. 다음 역으로 가거나 세션을 끝내 결과를 확인합니다.' },
    ],
    practiceTitle: '목적에 맞게 6개 모드를 선택하세요',
    practiceParagraphs: [
      '어드벤처는 역 해제용입니다. 야마노테선 순환은 진행도와 관계없이 60초 기록에 도전할 수 있습니다. 랜덤과 구간 지정은 2개 이상 역을 해제한 뒤, 한 노선 완주는 해당 노선 전체 역 해제 뒤, 일본 종단은 전국 수록 역을 해제한 뒤 열립니다.',
      '첫날에는 익숙한 역에서 3~5개 구간만 진행하세요. 첫 판은 읽기와 입력 규칙을 확인하고, 두 번째 판은 정확도를 유지하면서 멈춤을 줄입니다. 긴 낯선 노선에 바로 도전하는 것보다 개선 지점이 분명합니다.',
    ],
    comparisonTitle: '일본판과 한국판 Metro Typing 차이',
    comparisonIntro: '둘 다 역명을 맞히면 열차가 움직이지만 지도 범위, 입력 문자, 진행 구조가 다릅니다.',
    comparisonHeaders: ['비교 항목', '일본판', '한국판'],
    comparisonRows: [
      ['범위', '일본 602개 노선·8,783개 역', '한국 지하철과 도시철도 노선'],
      ['주요 입력', '로마자·가나', '한글·영문 역명'],
      ['진행 방식', '출발역에서 역과 노선을 해제', '노선·구간·방향을 골라 기록 도전'],
      ['추천 대상', '일본어 입력과 일본 철도 탐색', '한글 입력과 한국 노선 순서 연습'],
    ],
    comparisonAfter: [
      '일본 역명을 연습하려면 위 일본판을 사용하고, 한글 역명과 한국 노선을 연습하려면 국가 선택에서 한국판으로 돌아가면 됩니다. 국가명만 바꾼 같은 템플릿이 아니라 각 언어 입력과 철도 구조에 맞춘 게임입니다.',
      '일본판 WPM과 한국판 완주 시간을 직접 순위처럼 비교하지 마세요. 역명 길이, 입력 방식, 측정 기준이 다르므로 같은 버전과 같은 조건의 반복 기록을 비교해야 합니다.',
    ],
    improveTitle: '역명 타이핑 기록을 높이는 방법',
    improveBlocks: [
      {
        title: 'WPM보다 정확도를 먼저 안정화하세요',
        paragraphs: [
          'WPM은 확정된 정타 수를 경과 분으로 나눈 값이고, 점수는 WPM×정확도×정확도입니다. 300 WPM에서 정확도 90%는 243점, 80%는 192점이므로 무리한 속도보다 오타를 줄이는 편이 유리합니다.',
          'WPM과 정확도를 함께 기록하고 입력 방식, 기기, 모드, 구간을 고정하세요. 한 번의 최고 기록보다 3회 평균을 보면 실제 변화가 잘 드러납니다.',
        ],
      },
      {
        title: '어려운 역이 포함된 짧은 구간을 반복하세요',
        paragraphs: [
          '긴 읽기, 촉음, 요음, 비슷한 역명이 이어지는 곳에서 멈춤이 생깁니다. 막힌 역 2~3개를 적고 구간 지정 모드가 열리면 그 역을 포함한 짧은 경로를 반복합니다.',
          '하루 10분이라면 5분은 같은 구간, 5분은 새 방향 탐색에 씁니다. 반복 학습과 여행형 진행을 함께 유지할 수 있습니다.',
        ],
      },
    ],
    sourceTitle: '확인 가능한 규칙과 데이터 출처',
    sourceParagraphs: [
      '이 페이지의 노선 수, 역 수, 입력 규칙, 모드, 저장 방식, 점수 공식은 공개 게임과 운영자가 제공한 설명 문서를 기준으로 작성했습니다. 데이터는 노선 변경에 따라 달라질 수 있으므로 최신 값은 공식 수록 범위와 크레딧 페이지를 우선합니다.',
      '게임 연결과 지도 선형은 플레이를 위해 가공된 정보입니다. 실제 환승, 시간표, 운임, 운행 장애 판단에는 사용할 수 없습니다.',
    ],
    sourceLinks: [
      { href: 'https://densyatyping.com/about', label: '게임 목적과 운영 방침', title: '일본 전철 타이핑 공식 소개 열기' },
      { href: 'https://densyatyping.com/how-to-play', label: '공식 플레이 방법', title: '일본 전철 타이핑 공식 플레이 가이드 열기' },
      { href: 'https://densyatyping.com/guide/score-and-wpm', label: '점수와 WPM 계산', title: '공식 점수 및 WPM 설명 열기' },
      { href: 'https://densyatyping.com/credits', label: '철도 데이터 출처와 제약', title: '공식 철도 데이터 출처 열기' },
    ],
    relatedTitle: '다른 국가 게임과 연습 가이드',
    relatedLinks: [
      { href: '/', label: '한국 Metro Typing 플레이', title: '한국 Metro Typing 홈으로 이동' },
      { href: '/tips', label: '정확도 향상 연습 팁', title: 'Metro Typing 연습 팁 읽기' },
      { href: '/blog/china-metro-typing', label: '중국 Metro Typing 비교', title: '중국 Metro Typing 소개 읽기' },
    ],
    faqTitle: '일본 전철 타이핑 자주 묻는 질문',
    faq: [
      { question: '일본 전철 타이핑은 무료인가요?', answer: '네. 브라우저에서 무료로 시작할 수 있고 기본 플레이에 앱 구매나 유료 계정이 필요하지 않습니다.' },
      { question: '로그인하지 않아도 진행도가 저장되나요?', answer: '네. 게스트 진행도, 점수, 업적은 현재 브라우저 localStorage에 저장됩니다. 기기 간 동기화가 필요할 때만 Google 로그인을 선택합니다.' },
      { question: '로마자를 한 가지 철자로만 입력해야 하나요?', answer: '아닙니다. shi·si·ci, chi·ti, 결합음과 분해 입력 등 문서화된 일반 입력을 여러 방식으로 받을 수 있습니다.' },
      { question: '초보자는 어떤 모드가 좋나요?', answer: '익숙한 역에서 어드벤처로 시작하세요. 짧은 측정은 야마노테 순환, 약점 반복은 구간 지정이 좋습니다.' },
      { question: '실제 시간표와 환승에도 쓸 수 있나요?', answer: '아닙니다. 실시간 운행, 운임, 공식 환승 안내를 제공하는 서비스가 아닙니다.' },
    ],
    playCta: '위에서 일본 전철 타이핑 시작하기',
    playCtaTitle: '페이지 상단 일본 전철 타이핑 게임으로 돌아가기',
    breadcrumbHome: '홈',
    breadcrumbCurrent: '일본 전철 타이핑',
  },
};

export function getJapanMetroPageCopy(locale: string): JapanMetroPageCopy {
  return COPY[locale] ?? COPY.en;
}
