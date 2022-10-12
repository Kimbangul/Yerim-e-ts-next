// PARAM work image
import WORK01 from 'src/assets/image/work/work01.jpg';
import WORK02 from 'src/assets/image/work/work02.jpg';
import WORK03 from 'src/assets/image/work/work03.jpg';
import WORK04 from 'src/assets/image/work/work04.jpg';
import WORK05 from 'src/assets/image/work/work05.jpg';
import WORK06 from 'src/assets/image/work/work06.jpg';
import WORK07 from 'src/assets/image/work/work07.jpg';
import WORK08 from 'src/assets/image/work/work08.jpg';
import WORK09 from 'src/assets/image/work/work09.jpg';
import WORK10 from 'src/assets/image/work/work10.jpg';
import WORK11 from 'src/assets/image/work/work11.jpg';
// PARAM design image
import DESIGN01 from 'src/assets/image/design/design01.png';
import DESIGN01_2 from 'src/assets/image/design/design01_2.png';
import DESIGN02 from 'src/assets/image/design/design02.png';
import DESIGN02_2 from 'src/assets/image/design/design02_2.png';
import DESIGN03 from 'src/assets/image/design/design03.png';
import DESIGN03_2 from 'src/assets/image/design/design03_2.png';
import DESIGN04 from 'src/assets/image/design/design04.png';
import DESIGN05 from 'src/assets/image/design/design05.png';
import DESIGN05_2 from 'src/assets/image/design/design05_2.png';
import DESIGN06 from 'src/assets/image/design/design06.png';
import DESIGN06_2 from 'src/assets/image/design/design06_2.png';
import DESIGN07 from 'src/assets/image/design/design07.png';
import DESIGN07_2 from 'src/assets/image/design/design07_2.png';
import DESIGN08 from 'src/assets/image/design/design08.png';
import DESIGN08_2 from 'src/assets/image/design/design08_2.png';
import DESIGN09 from 'src/assets/image/design/design09.png';
import DESIGN010 from 'src/assets/image/design/design010.png';
import DESIGN010_2 from 'src/assets/image/design/design010_2.png';

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
type WorkType = {
  title: string;
  thumb: string;
  category: string;
  link?: string;
  tag: string[];
  github?: string;
  desc: string;
};

const workList: WorkType[] = [
  {
    title: '알까기를 시작하는 트레이너를 위한 안내서',
    thumb: WORK01.src,
    category: '창작 웹사이트',
    link: 'https://kimbangul.github.io/interaction-lab/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'CSS'],
    desc: '게임 &#39;포켓몬스터&#39; 시리즈의 시스템 중 하나인 	&#39;알까기&#39; 에 대한 내용을 소개하는 사이트입니다. 디자인 컨셉은 캐릭터 일러스트를 이용한 인포그래픽 스타일로, 인터랙티브하고 동적인 웹 구현에 중점을 두었습니다.',
  },
  {
    title: 'ORION',
    thumb: WORK02.src,
    category: '오리온 사이트 리디자인',
    link: 'https://kimbangul.github.io/orion/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'SCSS'],
    desc: '기존 오리온 사이트를 분석해 구조적, 디자인적 문제점을 찾아 개선하고 회사와 제품의 가치를 방문자에게 더욱 어필할 수 있도록 현대적으로 디자인하고자 하였습니다.',
  },
  {
    title: 'Haagendazs',
    thumb: WORK03.src,
    category: '오리온 사이트 리디자인',
    link: 'https://kimbangul.github.io/haagendazs/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'SCSS'],
    desc: '기존 하겐다즈 사이트를 분석해 구조적, 디자인적 문제점을 찾아 개선하고 브랜드의 이미지에 맞춰 고급지면서도 트렌디한 느낌으로 디자인하고자 하였습니다.',
  },
  {
    title: '건명테크',
    thumb: WORK04.src,
    category: '기업 사이트 제작',
    link: 'http://xn--z69au0yv6quza.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드'],
    desc: '그누보드 솔루션을 이용해 (주)건명테크의 회사 사이트를 제작하였습니다. 지나치게 무겁지 않으면서도 신뢰감을 줄 수 있는 회사의 이미지를 표현하기 위해 블루와 그린의 그라데이션 컬러를 사용하여 감각적으로 디자인하고자 하였습니다.',
  },
  {
    title: 'Ripa Korea',
    thumb: WORK05.src,
    category: '기업 사이트 제작',
    link: 'http://ripa.ltd/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '코인과 서버, 클라우드 등 IT 기술을 다루는 회사의 이미지에 맞도록 블랙과 화이트의 대비, 그라데이션과 애니메이션 효과를 이용하여 세련된 느낌을 전달할 수 있도록 제작하고자 하였습니다.',
  },
  {
    title: '메모리안',
    thumb: WORK06.src,
    category: '기업 사이트 제작',
    link: 'http://memoryan.com/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '유골보석 및 성형업 관련 제품을 제작하는 기업의 사이트를 제작하였습니다. 판매 제품의 특성상, 방문 고객들이 두려움을 갖고 접근할 수 있기 때문에 무겁지 않으면서도 고급스러운 분위기가 느껴질 수 있도록 기획하였습니다.',
  },
  {
    title: '가마통옛날닭강정',
    thumb: WORK07.src,
    category: '프랜차이즈 사이트 제작',
    link: 'http://xn--939a49fr4bd77anic.com/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '',
  },
  {
    title: '부속114',
    thumb: WORK08.src,
    category: '쇼핑몰 사이트 제작',
    link: 'https://busok114.kr/',
    tag: ['기획 100%', '디자인 100%', 'CAFE24', 'CSS'],
    desc: '',
  },
  {
    title: 'Import-H',
    thumb: WORK09.src,
    category: '사이드 팀 프로젝트',
    tag: ['기획 20%', '디자인 100%', 'React', 'Styled-component', '반응형'],
    github: 'https://github.com/import-H/frontend',
    desc: '학교 프로그래밍 소모임 활동으로 프론트엔드, 백엔드로 나누어 스터디 커뮤니티 사이트 제작을 진행하였습니다. React.js와 관련 라이브러리를 이용하여 제작하였습니다.',
  },
  {
    title: 'To-do App',
    thumb: WORK10.src,
    category: '오리온 사이트 리디자인',
    tag: ['기획 70%', '디자인 90%', '구현 20%', '반응형', 'CSS', 'React'],
    github: 'https://github.com/Coding-matzip/To-do',
    desc: '학교 프로그래밍 소모임 활동으로 프론트엔드, 백엔드로 나뉘어 Todo 앱을 제작했습니다. 처음 다뤄 보는 React라 미숙한 점이 많았으나, 팀 프로젝트를 진행하며 배운 점도 많았고 프론트엔드 라이브러리를 공부해야겠다는 계기를 만들어 준 뜻 깊었던 작업이었습니다.',
  },
  {
    title: 'FUNCHY',
    thumb: WORK11.src,
    category: '오리온 사이트 리디자인',
    link: 'https://kimbangul.github.io/interaction-lab/',
    tag: ['기획 100%', '디자인 100%', '반응형', 'CSS'],
    desc: '',
  },
];

export { link, techList, designList, workList, blurDataUrl };
export type { WorkType };
