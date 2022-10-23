// PARAM work image
import WORK01 from 'public/image/work/work01.jpg';
import WORK02 from 'public/image/work/work02.jpg';
import WORK03 from 'public/image/work/work03.jpg';
import WORK04 from 'public/image/work/work04.jpg';
import WORK05 from 'public/image/work/work05.jpg';
import WORK06 from 'public/image/work/work06.jpg';
import WORK07 from 'public/image/work/work07.jpg';
import WORK08 from 'public/image/work/work08.jpg';
import WORK09 from 'public/image/work/work09.jpg';
import WORK10 from 'public/image/work/work10.jpg';
import WORK11 from 'public/image/work/work11.jpg';
import WORK12 from 'public/image/work/work12.jpg';
import WORK13 from 'public/image/work/work13.jpg';
import WORK14 from 'public/image/work/work14.jpg';

// PARAM design image
import DESIGN01 from 'public/image/design/design01.png';
import DESIGN01_2 from 'public/image/design/design01_2.png';
import DESIGN02 from 'public/image/design/design02.png';
import DESIGN02_2 from 'public/image/design/design02_2.png';
import DESIGN03 from 'public/image/design/design03.png';
import DESIGN03_2 from 'public/image/design/design03_2.png';
import DESIGN04 from 'public/image/design/design04.png';
import DESIGN05 from 'public/image/design/design05.png';
import DESIGN05_2 from 'public/image/design/design05_2.png';
import DESIGN06 from 'public/image/design/design06.png';
import DESIGN06_2 from 'public/image/design/design06_2.png';
import DESIGN07 from 'public/image/design/design07.png';
import DESIGN07_2 from 'public/image/design/design07_2.png';
import DESIGN08 from 'public/image/design/design08.png';
import DESIGN08_2 from 'public/image/design/design08_2.png';
import DESIGN09 from 'public/image/design/design09.png';
import DESIGN010 from 'public/image/design/design010.png';
import DESIGN010_2 from 'public/image/design/design010_2.png';

// PARAM link data
const link = {
  github: 'https://github.com/Kimbangul',
  tel: 'tel: +8201077070968',
  mail: 'mailto:highcolor_12@g.hongik.ac.kr',
  resume:
    'https://meadow-touch-c48.notion.site/fefaf8401a0f489b8c3e111db4e263ba',
};

// PARAM image placeholder blur data
const blurDataUrl =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNUqgcAAMkAo/sGMSwAAAAASUVORK5CYII=';

// PARAM techList data
const techList = {
  design: {
    title: 'Design Tech.',
    content: [
      '디자인 가이드를 세우고, 그에 따라 통일성 있고 일관적인 UI를 제작하여 재활용이 가능하고 빠른 개발이 가능하도록 하는 것을 지향하고 있습니다.',
      '레이아웃 배치, 컬러 사용 시 사용자 입장에서의 사용성을 고려하며 불편함이 없도록 디자인하고자 노력합니다.',
      '여러 사람의 의견을 반영하고 더 나은 결과물을 만들기 위해, 여러 시안을 가지고 팀원들과 논의하여 최종 결과물을 도출합니다.',
      'Photoshop, Illustrator를 이용한 디자인 및 편집 작업이 가능합니다.',
      'XD, Figma를 이용한 UX/UI 설계와 프로토타이핑이 가능합니다.',
      'After effects를 이용한 모션그래픽 제작 및 영상 편집을 할 수 있습니다.',
    ],
    tag: ['Photoshop', 'Illustrator', 'XD', 'Figma', 'After Effects'],
  },
  develop: {
    title: 'Develop Tech.',
    content: [
      '협업을 위해 재활용과 유지보수가 쉬운 코드를 짤 수 있도록 더 좋은 방법에 대해 끊임없이 생각하며, 여러 가능성 및 예외 상황에 대해 고려하며 개발을 진행합니다.',
      'CSS, SCSS 등을 통해 디자인 결과물과 흡사하게 웹에 구현해 낼 수 있으며 반응형 웹 퍼블리싱이 가능합니다.',
      '표준과 웹 접근성 준수, SEO 최적화를 위해 페이지 구조와 태그의 의미를 고려하며 마크업하는 것을 지향합니다.',
    ],
    tag: [
      'HTML5',
      'CSS3',
      'SCSS',
      'Styled-Component',
      'Javascript(ES6+)',
      'JQuery',
      'React.js',
      'Next.js',
      'Vue.js',
      'PHP',
    ],
  },
};

// PARAM designList type
type DesignListType = {
  title: string;
  link?: string;
  thumb: string;
  detail?: string;
};

// PARAM designList data
const designList: DesignListType[] = [
  {
    title: "밴드 'Poision Infector' 앨범 커버 디자인",
    thumb: DESIGN01.src,
    detail: DESIGN01_2.src,
  },
  {
    title: "'뻐끔뻐끔 뽀모도로' UXUI 기획 및 디자인",
    thumb: DESIGN02.src,
    detail: DESIGN02_2.src,
  },
  {
    title: "'꿈상점' UXUI 기획 및 색채 계획",
    thumb: DESIGN03.src,
    detail: DESIGN03_2.src,
  },
  {
    title: "'심연의 장송곡' 키네틱타이포 MV",
    link: 'https://youtu.be/nIhcqw48Rc0',
    thumb: DESIGN04.src,
  },
  {
    title: "교내 동아리 '가리워진 길' 공연 홍보 포스터 제작",
    thumb: DESIGN05.src,
    detail: DESIGN05_2.src,
  },
  {
    title: "교내 동아리 '오키드' 홍보 포스터 제작",
    thumb: DESIGN06.src,
    detail: DESIGN06_2.src,
  },
  {
    title: '게임 UI 디자인 제작',
    thumb: DESIGN07.src,
    detail: DESIGN07_2.src,
  },
  {
    title: '게임 UI 디자인 제작',
    thumb: DESIGN08.src,
    detail: DESIGN08_2.src,
  },
  {
    title: "홍익대학교 게임그래픽디자인 졸업전시 '프로젝트! 미니어처'",
    link: 'https://www.husg.net/huge21/work/%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%eb%af%b8%eb%8b%88%ec%96%b4%ec%b2%98/',
    thumb: DESIGN09.src,
  },
  {
    title: '근로장학생 디자인 작업',
    thumb: DESIGN010.src,
    detail: DESIGN010_2.src,
  },
];

// PARAM workList type
export type WorkType = {
  id: number;
  title: string;
  thumb: string;
  category: string;
  link?: string;
  tag: string[];
  github?: string;
  desc: string;
  duration: string;
  section: string;
  tool: string;
};

const workList: WorkType[] = [
  {
    id: 14,
    title: 'YERIM.e',
    thumb: WORK14.src,
    category: '포트폴리오 사이트',
    link: 'https://yerim-e.com/',
    tag: ['디자인 100%', '구현 100%', 'Next.js', 'Styled-Component'],
    desc: '감각적이고 모던한 느낌을 전달하기 위해 전반적으로 흑백의 컬러를 차용하며, 메인은 우주 컨셉으로 디자인하였습니다. TypeScript와 Styled-Component를 사용하였으며 CSS transition 및 animation 효과를 활용하여 감각적으로 모션을 부여하고자 하였습니다.',
    duration: '2022.10 ~ 2022.10',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Figma, Next.js, SCSS, TypeScript, Git',
  },
  {
    id: 11,
    title: 'FUNCHY',
    thumb: WORK11.src,
    category: '온라인 P2P 플랫폼 서비스 구축',
    link: 'https://funchy.kr/',
    tag: ['디자인 40%', '구현 40%', 'Next.js', 'SCSS'],
    desc: "핀테크 기반 온라인 P2P 플랫폼 'FUNCHY'의 사용자 및 관리자 사이트 디자인 및 Front-end 개발을 담당하였습니다. 페이지 간 통일성을 맞추는 것을 우선으로, 서비스 아이덴티티 구축을 위한 컬러 선정과 더 좋은 UX/UI적 표현 방식에 대해 팀원들과 논의하며 긴밀히 소통하였습니다.",
    duration: '2022.07 ~ 2022.10',
    section: '사이트 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript, Git',
  },
  {
    id: 4,
    title: '건명테크',
    thumb: WORK04.src,
    category: '기업 사이트 제작',
    link: 'http://xn--z69au0yv6quza.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드'],
    desc: '그누보드 솔루션을 이용해 (주)건명테크의 회사 사이트를 제작하였습니다. 지나치게 무겁지 않으면서도 신뢰감을 줄 수 있는 회사의 이미지를 표현하기 위해 블루와 그린의 그라데이션 컬러를 사용하여 감각적으로 디자인하고자 하였습니다.',
    duration: '2022.01 ~ 2022.01',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 5,
    title: 'Ripa Korea',
    thumb: WORK05.src,
    category: '기업 사이트 제작',
    link: 'http://ripa.ltd/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '코인과 서버, 클라우드 등 IT 기술을 다루는 회사의 이미지에 맞도록 블랙과 화이트의 대비, 그라데이션과 애니메이션 효과를 이용하여 세련된 느낌을 전달할 수 있도록 제작하고자 하였습니다.',
    duration: '2021.05 ~ 2021.06',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 6,
    title: '메모리안',
    thumb: WORK06.src,
    category: '기업 사이트 제작',
    link: 'http://memoryan.com/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '유골보석 및 성형업 관련 제품을 제작하는 기업의 사이트를 제작하였습니다. 판매 제품의 특성상, 방문 고객들이 두려움을 갖고 접근할 수 있기 때문에 무겁지 않으면서도 고급스러운 분위기가 느껴질 수 있도록 기획하였습니다.',
    duration: '2021.05 ~ 2021.06',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 12,
    title: 'ITECH',
    thumb: WORK12.src,
    category: '기업 사이트 제작',
    link: 'http://itechate.co.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC'],
    desc: "계측장비 판매 기업 '아이텍'의 웹 사이트를 제작하였습니다. 전반적으로 블랙과 화이트 톤, 그리고 로고에 사용된 레드 컬러를 강조색으로 차용하여 기업 이미지를 각인시키고자 하였습니다.",
    duration: '2022.03 ~ 2022.03',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 8,
    title: '강민이벤트',
    thumb: WORK13.src,
    category: '업체 사이트 제작',
    link: 'http://kmevent.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC'],
    desc: '개업 및 오픈 이벤트 전문 업체의 웹 사이트를 제작하였습니다. 이벤트를 통한 즐거움을 시각적으로 전달하기 위해 아이콘과 모션을 적극적으로 사용하고, 그라데이션 컬러를 사용하여 업체의 이미지를 구축하고자 하였습니다.',
    duration: '2021.12 ~ 2021.12',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 7,
    title: '가마통옛날닭강정',
    thumb: WORK07.src,
    category: '프랜차이즈 사이트 제작',
    link: 'http://xn--939a49fr4bd77anic.com/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: "닭강정, 치킨 등의 메뉴를 판매하는 프랜차이즈 홈페이지의 사이트를 제작했습니다. 메뉴와 창업문의 강조를 원하셨던 고객사의 요청을 반영하며, 난색 계열의 컬러와 폰트로 '옛날 닭강정'의 느낌을 전달하고자 하였습니다.",
    duration: '2022.02 ~ 2022.04',
    section:
      '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  // {
  //   id: 8,
  //   title: '부속114',
  //   thumb: WORK08.src,
  //   category: '쇼핑몰 사이트 제작',
  //   link: 'https://busok114.kr/',
  //   tag: ['기획 100%', '디자인 100%', 'CAFE24', 'CSS'],
  //   desc: "부속 및 부품 판매 업체 '서울전자' 의 인터넷 쇼핑몰 '부속114' 제작을 담당하였습니다. ",
  //   duration: '2022.03 ~ 2022.04',
  //   section:
  //     '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
  //   tool: 'HTML, CSS, JQuery, Adobe PhotoShop, Cafe24',
  // },
  {
    id: 9,
    title: 'Import-H',
    thumb: WORK09.src,
    category: '사이드 팀 프로젝트',
    tag: ['기획 20%', '디자인 100%', 'React', 'Styled-component', '반응형'],
    github: 'https://github.com/import-H/frontend',
    desc: '학교 프로그래밍 소모임 활동으로 프론트엔드, 백엔드로 나누어 스터디 커뮤니티 사이트 제작을 진행하였습니다. React.js와 관련 라이브러리를 이용하여 제작하였습니다.',
    duration: '2022.01 ~ 2022.03',
    section: '메인 및 서브 페이지 디자인 및 퍼블리싱 담당',
    tool: 'React.js, Styled-component, Figma, Photoshop, Illustrator, Visual Studio Code',
  },
  {
    id: 10,
    title: 'To-do App',
    thumb: WORK10.src,
    category: '사이드 팀 프로젝트',
    tag: ['기획 70%', '디자인 90%', '구현 20%', '반응형', 'CSS', 'React'],
    github: 'https://github.com/Coding-matzip/To-do',
    desc: '학교 프로그래밍 소모임 활동으로 프론트엔드, 백엔드로 나뉘어 Todo 앱을 제작했습니다. 처음 다뤄 보는 React라 미숙한 점이 많았으나, 팀 프로젝트를 진행하며 배운 점도 많았고 프론트엔드 라이브러리를 공부해야겠다는 계기를 만들어 준 뜻 깊었던 작업이었습니다.',
    duration: '2022.06 ~ 2021.07',
    section:
      'Single Page Application, 전반적인 디자인 및 퍼블리싱 담당, 검색 등 일부 기능 개발',
    tool: 'React.js, CSS, Figma, Illustrator, Visual Studio Code',
  },
  // {
  //   id: 1,
  //   title: '알까기를 시작하는 트레이너를 위한 안내서',
  //   thumb: WORK01.src,
  //   category: '창작 웹사이트',
  //   link: 'https://kimbangul.github.io/interaction-lab/',
  //   tag: ['기획 100%', '디자인 100%', '반응형', 'CSS'],
  //   desc: `게임 \'포켓몬스터\' 시리즈의 시스템 중 하나인 	\'알까기\' 에 대한 내용을 소개하는 사이트입니다.
  //   캐주얼한 일러스트를 활용한 인포그래픽 스타일을 디자인 컨셉으로 삼고, 애니메이션을 적극 활용하여 전반적으로 동적인 느낌이 들도록 기획하였습니다.
  //   \n포켓몬스터 시리즈의 대표 캐릭터인 '피카츄' 의 컬러에서 따와 옐로 컬러를 주 색상으로 선정했습니다.
  //   `,
  //   duration: '2021.05 ~ 2021.06',
  //   section: '메인 페이지, 마이크로 웹사이트',
  //   tool: 'HTML, CSS, JQuery, Adobe XD, Photoshop, Illustrator',
  // },
  {
    id: 2,
    title: 'ORION',
    thumb: WORK02.src,
    category: '오리온 사이트 리디자인',
    link: 'https://kimbangul.github.io/orion/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'SCSS'],
    desc: `기존 사이트의 메인 페이지는 단순히 제품만 나열되어 있을 뿐, 회사에 대한 정보나 제품 상세 설명이 부족하여 브랜드의 가치를 부각시키지 못하고 있습니다. 
    또한, 모바일 환경의 사용자를 고려하지 않고 고정폭 레이아웃을 사용하기도 하였습니다. 
    애니메이션이 거의 없어 지나치게 정적인 느낌이 들며, 디자인적으로도 '오래된 웹사이트'라는 느낌이 들어 리뉴얼을 하기로 하였습니다. 
    
    웹페이지를 통한 브랜드의 가치 부각을 중점으로 삼고 디자인을 진행했습니다. 회사의 슬로건과 비전을 풀페이지 메인 슬라이드로 배치하여, 고객과 투자자에게 신뢰감을 심어주고자 하였습니다. 기존 사이트의 정보 부족 문제를 해결하기 위해, 대표 제품인 '초코파이'를 테마로 한 섹션과 신제품을 소개하는 섹션을 제작했습니다. \n
    모던하면서도 지나치게 경직된 느낌을 주지 않게끔, 애니메이션과 drop-shadow 그리고 border-radius 등을 적극 활용하였으며 다양한 환경에서 접속하는 이용자들을 위해 반응형으로 제작하였습니다.`,
    duration: '2021.02 ~ 2021.03',
    section: '메인 페이지',
    tool: 'HTML, CSS, JQuery, Figma, Photoshop, Illustrator',
  },
  {
    id: 3,
    title: 'Haagendazs',
    thumb: WORK03.src,
    category: '하겐다즈 사이트 리디자인',
    link: 'https://kimbangul.github.io/haagendazs/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'SCSS'],
    desc: `기존 사이트는 구조적으로 메뉴 구성이 정리되지 않았고, 메인 페이지에 소개되는 제품들의 이미지를 클릭해도 구매 페이지 링크로 연결되지 않아 접근성이 떨어지는 문제가 있었습니다.
    또한 메인 페이지에 있는 제품들이 신상품인지 베스트셀러 제품인지를 알 수 없으며 창업 관련 내용이 없는 등 정보의 부재도 보였습니다.
    UX적으로도 상단 메뉴 구성이 양 끝단으로 나뉘어 있고, 지나치게 여백이 부족해 영역의 시작과 끝을 구분하기 어렵습니다.
    서체와 폰트 크기가 조정되지 않아 정리되지 않은 느낌을 주기도 합니다.

    문제점을 개선하기 위해 큰 카테고리를 나누어 메뉴 구조를 정리하고, 메인 페이지 구조를 신상품/인기 제품/SNS/창업 문의 등으로 나누어 배치하였습니다. 또한 접근성을 위해 링크를 연결해주었습니다.
강렬한 원색을 많이 사용하기보다는 전체적으로 은은한 배색을 활용하여 브랜드의 이미지에 맞춰 고급지면서도 트렌디한 느낌으로 리디자인하고자 하였습니다.
    `,
    duration: '2021.01 ~ 2021.02',
    section: '메인 페이지',
    tool: 'HTML, CSS, JQuery, Figma, Photoshop, Illustrator',
  },
];

export { link, techList, designList, workList, blurDataUrl };
