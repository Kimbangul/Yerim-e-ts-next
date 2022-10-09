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

type designListType = {
  title: string;
  link: string | false;
  thumb: string;
  detail: string | false;
};

const designList: designListType[] = [
  {
    title: "밴드 'Poision Infector' 앨범 커버 디자인",
    link: false,
    thumb: DESIGN01.src,
    detail: DESIGN01_2.src,
  },
  {
    title: "'뻐끔뻐끔 뽀모도로' UXUI 기획 및 디자인",
    link: false,
    thumb: DESIGN02.src,
    detail: DESIGN02_2.src,
  },
  {
    title: "'꿈상점' UXUI 기획 및 색채 계획",
    link: false,
    thumb: DESIGN03.src,
    detail: DESIGN03_2.src,
  },
  {
    title: "'심연의 장송곡' 키네틱타이포 MV",
    link: 'https://youtu.be/nIhcqw48Rc0',
    thumb: DESIGN04.src,
    detail: false,
  },
  {
    title: "교내 동아리 '가리워진 길' 공연 홍보 포스터 제작",
    link: false,
    thumb: DESIGN05.src,
    detail: DESIGN05_2.src,
  },
  {
    title: "교내 동아리 '오키드' 홍보 포스터 제작",
    link: false,
    thumb: DESIGN06.src,
    detail: DESIGN06_2.src,
  },
  {
    title: '게임 UI 디자인 제작',
    link: false,
    thumb: DESIGN07.src,
    detail: DESIGN07_2.src,
  },
  {
    title: '게임 UI 디자인 제작',
    link: false,
    thumb: DESIGN08.src,
    detail: DESIGN08_2.src,
  },
  {
    title: "홍익대학교 게임그래픽디자인 졸업전시 '프로젝트! 미니어처'",
    link: 'https://www.husg.net/huge21/work/%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%eb%af%b8%eb%8b%88%ec%96%b4%ec%b2%98/',
    thumb: DESIGN09.src,
    detail: false,
  },
  {
    title: '근로장학생 디자인 작업',
    link: false,
    thumb: DESIGN010.src,
    detail: DESIGN010_2.src,
  },
];

export { techList, designList };
