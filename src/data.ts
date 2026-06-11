export interface ProgramItem {
  id: string;
  numString: string;
  title: string;
  story: string;
  image: string;
  imageAfter?: string; // Used for "Before & After" in rehab program
  slides?: string[];    // Supports multi-image sliding
  therapistImage?: string; // Physical therapist image separated
  slingImage?: string;     // Sling rehab image separated
  rehabStory?: {
    step1: { title: string; image: string; desc: string };
    step2: { title: string; image: string; desc: string };
    step3: { title: string; beforeImage: string; afterImage: string; desc: string };
  };
  iconName: string;
}

export interface AchievementItem {
  id: string;
  text: string;
}

// Dynamic asset URL resolver in Vite
const getAssetUrl = (name: string) => {
  return new URL(`./${name}`, import.meta.url).href;
};

export const BRAND_STORY = {
  heroHeader: "“한 번만 더 우시면 한국에 안 올 거예요”",
  paragraphs: [
    "군대 전역 후 영어 한마디 못한 채 처음 비행기를 타고 떠난 캐나다.",
    "그곳에서 열정으로 12년을 달리며 직장 생활과 사업을 일구었고, 그곳은 제 삶의 터전이 되었습니다.",
    "1년에 한 번 한국에 들어올 때마다, 다시 떠날 때면 어머니는 늘 눈물을 보이셨습니다.",
    "어머니가 우시는 게 너무 싫었던 저는 \"한 번만 더 우시면 한국에 안 올 거예요\"라는 철없는 막내의 말을 전했습니다.",
    "다시 캐나다로 돌아가는 날, 공항 리무진버스 앞에서 마지막 인사를 하려는데 어머니가 갑자기 화장실을 다녀오겠다며 급히 자리를 뜨셨습니다.",
    "잠시 후, 환하게 미소 지으며 \"잘 가라, 밥 잘 챙겨 먹고 아프지 마라\" 외치며 서둘러 뛰어오시던 어머니.",
    "그리고 가까이 다가오신 어머니의 눈 밑에 붙어 있던... '작은 두루마리 휴지 한 조각'.",
    "몇 년이 지난 지금도 그 마음을 글로 다 표현하기는 힘듭니다.",
    "하지만 확실한 건, 당신의 볼에 붙어 있던 젖은 휴지 한 조각이 지금 굿데이케어센터의 시작이자 이유라는 점입니다.",
    "부모님을 멀리서 바라보며 애틋해 하던 아들의 마음으로, 이제 저희가 어르신들을 정성껏 모시겠습니다."
  ],
  ceoPhoto: getAssetUrl('대표님사진.jpg') // Heartwarming center opening/representative photo
};

export const VALUE_STORY = {
  bridgeLines: [
    "“우리 부모님... 언제 이렇게 늙으셨지?”",
    "언제나 큰 산 같았던 우리 엄마, 아빠...",
    "점점 작아지시는 부모님의 뒷모습을 보며 가슴 아파했을 자녀분들의 마음을 잘 압니다.",
    "그 애틋한 마음을 그대로 이어받아, 저희가 또 하나의 가족이 되어 드리겠습니다."
  ],
  mainHeader: "굿데이케어센터의 자랑은 바로 '선생님들'입니다.",
  subCopy: "어르신 한 분 한 분을 내 부모님처럼, 진심 어린 미소와 전문적인 케어로 함께하는 최고의 돌봄 전문가들이 굿데이의 자랑입니다.",
  teachersPhoto: getAssetUrl('존경하는선생님들.jpg') // Team of Angels profile
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "prog-01",
    numString: "01",
    title: "매달 어르신이 드시고 싶은 특식 제공",
    story: "“오늘 점심은 뭐가 나올까?” 매달 어르신들의 선호조사를 적극 반영해 입맛 돋우는 행복한 특식을 선물합니다.",
    image: getAssetUrl('선호도조사.png'),
    iconName: "Utensils"
  },
  {
    id: "prog-02",
    numString: "02",
    title: "김치마저 직접 담그겠다는 조리원 선생님들",
    story: "내 부모님이 드실 밥상이기에 완제품 반찬은 쓰지 않습니다. 김치 한 포기까지 사랑으로 직접 담가 대접합니다.",
    image: getAssetUrl('조리원사진.jpg'), // Dedication scene
    iconName: "ChefHat"
  },
  {
    id: "prog-03",
    numString: "03",
    title: "시행착오 끝에 완성한 재미있는 재활 슬링 운동",
    story: "8년 전, 물리치료사 선생님을 고용해, 어르신 한분당 3시간씩 혹독하게 재활을 시켜드렸던 때가 있었습니다.\n\n운동과 재활만이 가장 중요한줄 알았죠.\n\n그런데 어르신들이 나오시지 않는 것입니다. 이유는 운동이 너무 힘들었다고 하더라고요.\n\n아.. 어르신을 위한다는 생각하나로 눈높이를 맞추지 못했구나.\n\n지금은 쉽고 재미있게 바꾼 뒤, 서로 앞자리에서 운동하시겠다며 아침부터 지팡이와 가방으로 '자리찜'을 하실 정도입니다.\n\n효과는 어떨까요? 해당 사례로 공단 우수사례까지 표창 받은 바 있습니다.",
    image: getAssetUrl('비포.png'), // BEFORE walking treatment
    imageAfter: getAssetUrl('에프터.png'),    // AFTER joyful sling rehab
    therapistImage: getAssetUrl('물리치료사 선생님.jpg'),
    slingImage: getAssetUrl('슬링운동.jpg'),
    iconName: "Activity"
  },
  {
    id: "prog-04",
    numString: "04",
    title: "추억이 공존하는 40평 자연 테라스 텃밭",
    story: "흙을 만지며 자녀들을 키워내셨던 그 시절의 따뜻한 추억이 머무는 곳입니다. 상추를 수확하는 날이면, 탁 트인 야외에서 다 함께 신나는 쌈&고기 파티를 엽니다.",
    image: getAssetUrl('텃밭테라스.jpg'),
    slides: [getAssetUrl('텃밭테라스.jpg'), getAssetUrl('삼겹살.jpg'), getAssetUrl('삼겹살1.jpg')], // 3-stage visual narrative
    iconName: "Sprout"
  },
  {
    id: "prog-05",
    numString: "05",
    title: "목욕실에서 피어나는 우리들만의 비밀 이야기",
    story: "정기적인 이미용으로 예쁘게 단장하는 날! 따뜻한 샤워실에서 선생님과 손잡고 도란도란 나누는 정겨운 대화 속에 어르신과의 사랑이 더 깊어집니다.",
    image: getAssetUrl('샤워.jpg'),
    iconName: "Bath"
  },
  {
    id: "prog-06",
    numString: "06",
    title: "주말도 적적하지 않게, 매주 토요 노래교실",
    story: "주말이라고 집에서 적적하게 계시지 않도록 마이크를 쥐어드립니다. 박수 치고 노래 부르며 일주일 치 스트레스를 시원하게 날리는 시간입니다.",
    image: getAssetUrl('노래교실.jpg'),
    slides: [getAssetUrl('노래교실.jpg'), getAssetUrl('노래교실2.jpg')],
    iconName: "Music"
  },
  {
    id: "prog-07",
    numString: "07",
    title: "직원 선생님들이 직접 준비하는 사랑 가득 마당극",
    story: "외부 강사의 뻔한 공연 대신, 우리 선생님들이 직접 대본을 쓰고 분장을 하며 온몸을 던져 어르신들께 배꼽 빠지는 웃음을 선물합니다.",
    image: getAssetUrl('마당극.jpg'),
    slides: [getAssetUrl('마당극.jpg'), getAssetUrl('마당극1.jpg')],
    iconName: "Theater"
  },
  {
    id: "prog-08",
    numString: "08",
    title: "감사함을 전하는 어버이날 카네이션 축제",
    story: "“나를 키워주셔서 감사합니다.” 자녀분들의 애틋한 마음을 대신 담아, 어르신 한 분 한 분의 가슴에 가장 붉고 예쁜 카네이션을 정성껏 달아드립니다.",
    image: getAssetUrl('어버이날.jpg'),
    slides: [getAssetUrl('어버이날.jpg'), getAssetUrl('어버이날1.jpg'), getAssetUrl('어버이날2.jpg')],
    iconName: "Gift"
  },
  {
    id: "prog-09",
    numString: "09",
    title: "잔칫날 버금가는 풍성한 생신잔치",
    story: "일 년 중 어르신이 가장 행복해야 하는 날이기에, 옛날 동네 잔칫날 부럽지 않을 만큼 상다리가 부러지게 풍성한 생일상을 차려드립니다.",
    image: getAssetUrl('생신잔치.jpg'),
    slides: [getAssetUrl('생신잔치.jpg'), getAssetUrl('생신잔치1.jpg')],
    iconName: "Sparkles"
  },
  {
    id: "prog-10",
    numString: "10",
    title: "삶에 활력을 불어넣는 다채로운 축제와 나들이",
    story: "웅변대회에서 목청껏 소리 지르고, 체육대회와 노래자랑에서 활력을 찾으며, 계절마다 떠나는 나들이를 통해 어르신의 마음에 쉼 없는 청춘을 채워드립니다.",
    image: getAssetUrl('나들이.jpg'),
    slides: [getAssetUrl('나들이.jpg'), getAssetUrl('운동회.jpg'), getAssetUrl('운동회1.jpg')],
    iconName: "Compass"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: "ach-1", text: "장기요양 기관 평가 A등급 (최우수 등급) 획득" },
  { id: "ach-2", text: "장기요양 우수 종사자 선정" },
  { id: "ach-3", text: "장기요양 서비스 우수사례 우수상 수상" },
  { id: "ach-4", text: "요양보호사 UCC 영상 공모전 입상" },
  { id: "ach-5", text: "국내 최초 운동재활 시설 도입" },
  { id: "ach-6", text: "어르신 라이프 밸런스 프로그램 자체 개발" }
];

export const ANSIM_MODAL_CONTENT = {
  triggerText: "“우리 부모님도 잘 적응하실 수 있을까요?” (감동 후기 보기)",
  title: "“낯선 곳인데, 우리 부모님이 잘 적응하실 수 있을까요?”",
  summary: "등록 전, 보호자님들의 무거운 세 가지 걱정(잘 적응할까 / 미리 체험해 볼까 / 강제 등록당하지 않을까)을 잘 알고 있습니다. 부담스러운 그 마음, 저희는 100% 이해합니다. 굿데이는 절대 그런 센터가 아닙니다.",
  miracleTitle: "한 뼘의 감동 스토리 (선생님의 '30일의 기적')",
  miracleStory: "치매를 앓고 계신 어르신들은 환경 변화에 무척 예민하십니다. 새로 오신 한 어르신의 보호자님도 “낯선 환경에 적응 못 하실까 봐 밤잠을 설치셨다”며 걱정하셨습니다. 그 마음을 알기에, 저희 선생님은 귀찮거나 번거로울 법도 한 일인데도 한 달 동안 매일 특별한 동행을 시작했습니다. “어머님, 강제로 계시지 않아도 돼요. 매일 딱 1시간만 놀다 가세요.” 선생님은 매일 보호자님과 어르신의 손을 잡고 센터 안을 거닐며, 이곳이 안전하고 즐거운 놀이터라는 것을 가슴으로 기억하실 수 있게 도와드렸습니다. 한 달이 지난 지금, 그 어르신은 아침마다 아들 손을 흔들며 가장 먼저 셔틀버스에 오르십니다. 보호자님께서는 “매일 1시간씩 함께 머물러 준 그 정성에 눈물이 났다”며 감동의 마음을 전해주셨습니다.",
  guardianReviews: [
    getAssetUrl('가족보호자후기.jpg'),
    getAssetUrl('가족보호자후기2.jpg'),
    getAssetUrl('가족보호자후기3.jpg')
  ],
  promises: [
    {
      title: "정말 편하게 둘러보고 상담받으세요.",
      desc: "상담이나 무료 체험을 한다고 해서 등록을 절대 강요하지 않습니다."
    },
    {
      title: "어르신의 속도에 맞추어 기다립니다.",
      desc: "적응이 어려운 분들을 위해 보호자님과 함께 공간을 익히는 '점진적 적응 프로그램'을 운영합니다."
    },
    {
      title: "우리는 오직 '가족 보호자님들의 평온한 일상'을 위해 존재합니다.",
      desc: "걱정 마시고 편하게 문을 두드려주세요."
    }
  ],
  closeButtonText: "닫고 무료 하루 체험 문의하기"
};

export const CONTACT_INFO = {
  phone: "1588-4647",
  phoneLabel: "📞 지금 바로 친절 상담 받기 (대표번호: 1588-4647)",
  mapUrl: "https://map.naver.com/p/entry/place/1997867562",
  mapLabel: "📍 굿데이케어센터 오시는 길 (네이버 지도 보기)",
  blogUrl: "https://blog.naver.com/marpedaycare/222629775545",
  blogLabel: "📝 대전 주간보호센터, 모르면 손해 보는 업계 비밀 칼럼",
  anniversaryPhoto: getAssetUrl('주년행사선물.jpg'),
  logoPhoto: getAssetUrl('로고.png')
};

export const YOUTUBE_VIDEOS = [
  { id: "yt-1", title: "생신잔치 이야기", url: "https://www.youtube.com/watch?v=EspphLZL85E", tag: "행사" },
  { id: "yt-2", title: "가족보호자님과 함께한 하루", url: "https://www.youtube.com/watch?v=8v71F3GtXKU", tag: "일상" },
  { id: "yt-3", title: "즐거운 나들이", url: "https://www.youtube.com/watch?v=hj-m7g64XCE", tag: "야외활동" },
  { id: "yt-4", title: "쉬는시간 이야기", url: "https://www.youtube.com/watch?v=8tQvbNpuTHM", tag: "소통" },
  { id: "yt-5", title: "운동은 어떻게?", url: "https://www.youtube.com/watch?v=M89tXB5QSU0", tag: "재활" },
  { id: "yt-6", title: "요양보호사의 하루", url: "https://www.youtube.com/watch?v=v_Qv-TcjjLU", tag: "정성" }
];
