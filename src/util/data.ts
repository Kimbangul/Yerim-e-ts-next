import { DesignListItemType, WorkType } from '@/util/type';

// PARAM link data
const link = {
  github: 'https://github.com/Kimbangul',
  velog: 'https://velog.io/@kimbangul',
  tel: 'tel: +8201077070968',
  mail: 'mailto:highcolor_12@g.hongik.ac.kr',
  resume: 'https://meadow-touch-c48.notion.site/Yerim-Park-FLEXIBLE-UI-Developer-5694713033624c6cae1ae51b129c556a',
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
      'Photoshop, Illustrator를 이용한 디자인 및 편집 작업과 XD, Figma를 이용한 UX/UI 설계와 프로토타이핑이 가능합니다.',
      'After effects를 이용한 모션그래픽 제작 및 영상 편집을 할 수 있습니다.',
    ],
    tag: ['Photoshop', 'Illustrator', 'XD', 'Figma', 'After Effects'],
  },
  develop: {
    title: 'Develop Tech.',
    content: [
      '협업을 위해 재활용과 유지보수가 쉬운 코드를 짤 수 있도록 고민하며, 여러 가능성 및 예외 상황에 대해 고려하며 개발을 진행합니다.',
      '페이지 구조와 태그의 의미를 고려하며 마크업하는 것을 지향하며 디자인 시안과 흡사하게 웹에 구현해 낼 수 있으며 반응형 웹 퍼블리싱이 가능합니다.',
      'BackEnd 시스템 및 DB를 유지보수한 경험이 있어 데이터와 보안에 대해 고려하며 개발을 할 수 있습니다.',
      '레거시 유지보수 경험이 있으며 시스템과 코드의 구조 파악을 중요하게 생각합니다.',
      '운영 업무를 통해 여러 사람과 협업한 경험이 있어 기획자, 디자이너, 백엔드와 서버, 네트워크 담당자 등 여러 직무의 사람들과 원활한 의사소통이 가능합니다.',
    ],
    tag: [
      'HTML5',
      'CSS3',
      'SCSS',
      'Styled-Component',
      'JavaScript(ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Spring',
    ],
  },
};

// PARAM designList data
const designList: DesignListItemType[] = [
  {
    title: "밴드 'Poision Infector' 앨범 커버 디자인",
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design01.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design01_2.png`,
  },
  {
    title: "'뻐끔뻐끔 뽀모도로' UXUI 기획 및 디자인",
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design02.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design02_2.png`,
  },
  {
    title: "'꿈상점' UXUI 기획 및 색채 계획",
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design03.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design03_2.png`,
  },
  {
    title: "'심연의 장송곡' 키네틱타이포 MV",
    link: 'https://youtu.be/nIhcqw48Rc0',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design04.png`,
  },
  {
    title: "교내 동아리 '가리워진 길' 공연 홍보 포스터 제작",
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design05.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design05_2.png`,
  },
  {
    title: "교내 동아리 '오키드' 홍보 포스터 제작",
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design06.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design06_2.png`,
  },
  {
    title: '게임 UI 디자인 제작',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design07.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design07_2.png`,
  },
  {
    title: '게임 UI 디자인 제작',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design08.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design08_2.png`,
  },
  {
    title: "홍익대학교 게임그래픽디자인 졸업전시 '프로젝트! 미니어처'",
    link: 'https://www.husg.net/huge21/work/%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%eb%af%b8%eb%8b%88%ec%96%b4%ec%b2%98/',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design09.png`,
  },
  {
    title: '근로장학생 디자인 작업',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design010.png`,
    detail: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/design/design010_2.png`,
  },
];

const workList: WorkType[] = [
  {
    id: 18,
    title: '대아정보시스템  홈페이지 리뉴얼',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work18.jpg`,
    category: '기업 사이트 제작',
    link: 'https://daea.vercel.app/',
    tag: ['디자인 100%', '구현 100%', 'Next.js', '반응형', 'SCSS'],
    desc: '기존 노코드 툴로 제작되었던 홈페이지를 자유롭게 커스텀 및 관리할 수 있도록 개발하는 작업을 하였습니다. 의료IT기업의 이미지에 맞게끔 기존 사이트를 더 현대적이고 깔끔하게 리디자인하고자 하였습니다.',
    duration: '2023.11 ~ 2023.12',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Figma, Next.js, SCSS, TypeScript, Node.js, Git',
  },
  {
    id: 17,
    title: '아주대의료원 산하 웹사이트 운영 및 유지보수',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work17.jpg`,
    category: '병원, 의료원 산하 웹사이트 및 내부 시스템 운영',
    link: 'https://hosp.ajoumc.or.kr/',
    tag: ['운영', '유지보수', '서브시스템 개발', '퍼블리싱'],
    desc: '아주대병원 홈페이지 담당자로 의료원 산하 병원, 의료원, 각종 센터와 CMS, 인사고과, VOC 관리자 등 내부 직원들이 사용하는 서브사이트들을 운영 및 유지보수 하였습니다.',
    duration: '2023.03 ~ ',
    section: '사이트 운영 및 유지보수',
    tool: 'Spring, JSP, ASP.NET',
  },
  {
    id: 14,
    title: 'YERIM.e',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work14.jpg`,
    category: '포트폴리오 사이트',
    link: 'https://yerim-e.com/',
    tag: ['디자인 100%', '구현 100%', '반응형', 'Next.js', 'Styled-Component'],
    desc: '감각적이고 모던한 느낌을 전달하기 위해 전반적으로 흑백의 컬러를 차용하며, 메인은 우주 컨셉으로 디자인하였습니다. TypeScript와 Styled-Component를 사용하였으며 CSS transition 및 animation 효과를 활용하여 감각적으로 모션을 부여하고자 하였습니다.',
    duration: '2022.10 ~ 2022.10',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Figma, Next.js, SCSS, TypeScript, Node.js, Git',
  },
  {
    id: 16,
    title: 'RebitX Mobile Web',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work16.jpg`,
    category: '상업용 부동산 조각투자 플랫폼 웹앱 버전 구축',
    //link: 'https://rebitx.com/mobile',
    tag: ['구현 60%', 'Next.js', 'SCSS'],
    desc: 'RebitX의 App 디자인을 토대로 모바일 Web 플랫폼을 제작하였습니다. 메인 페이지, 청약, 거래, 알림, 공지사항과 이벤트, 이용가이드 등의 게시판 페이지들의 프론트엔드 개발 작업을 주로 진행하였으며 그 외 마이페이지, 나의 정보 페이지들의 일부 데이터 바인딩 및 수정 작업을 진행하였습니다. 짧은 시간 내에 다양한 해상도의 모바일 디바이스를 대응할 수 있도록 rem 단위를 사용했습니다.',
    duration: '2023.01 ~ 2023.02',
    section: '주요 기능 및 게시판 페이지 Front-end 개발 담당',
    tool: 'Next.js, SCSS, JavaScript, Git',
  },
  {
    id: 15,
    title: 'RebitX',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work15.jpg`,
    category: '상업용 부동산 조각투자 플랫폼 구축',
    link: 'https://rebitx.com/',
    tag: ['디자인 100%', '구현 60%', 'Next.js', 'SCSS'],
    desc: '상업용 부동산 조각투자 서비스의 웹 플랫폼 구축 프로젝트에 참여하여 사용자 및 관리자 사이트 전반 디자인 및 Front-end 개발 업무를 담당하였습니다. 초기 환경을 구축하였으며 메인 웹 페이지와 모바일 데모 사이트, 청약, 거래, 로그인 페이지 UI 개발 및 데이터 바인딩 업무와 호가창 등의 차트 등을 개발하였습니다.',
    duration: '2022.10 ~ 2023.01',
    section: '사용자, 관리자 페이지 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript, Git',
  },
  {
    id: 11,
    title: 'FUNCHY',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work11.jpg`,
    category: '온라인 P2P 플랫폼 서비스 구축',
    //link: 'https://funchy.kr/',
    tag: ['디자인 40%', '구현 40%', 'Next.js', 'SCSS'],
    desc: "핀테크 기반 온라인 P2P 플랫폼 'FUNCHY'의 사용자 및 관리자 사이트 디자인 및 Front-end 개발을 담당하였습니다. 페이지 간 통일성을 맞추는 것을 우선으로, 서비스 아이덴티티 구축을 위한 컬러 선정과 더 좋은 UX/UI적 표현 방식에 대해 팀원들과 논의하며 긴밀히 소통하였습니다.",
    duration: '2022.07 ~ 2022.10',
    section: '사이트 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript, Git',
  },
  {
    id: 4,
    title: '건명테크',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work04.jpg`,
    category: '기업 사이트 제작',
    link: 'http://xn--z69au0yv6quza.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드'],
    desc: '그누보드 솔루션을 이용해 (주)건명테크의 회사 사이트를 제작하였습니다. 지나치게 무겁지 않으면서도 신뢰감을 줄 수 있는 회사의 이미지를 표현하기 위해 블루와 그린의 그라데이션 컬러를 사용하여 감각적으로 디자인하고자 하였습니다.',
    duration: '2022.01 ~ 2022.01',
    section: '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 5,
    title: 'Ripa Korea',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work05.jpg`,
    category: '기업 사이트 제작',
    link: 'http://ripa.ltd/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '코인과 서버, 클라우드 등 IT 기술을 다루는 회사의 이미지에 맞도록 블랙과 화이트의 대비, 그라데이션과 애니메이션 효과를 이용하여 세련된 느낌을 전달할 수 있도록 제작하고자 하였습니다.',
    duration: '2021.05 ~ 2021.06',
    section: '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 6,
    title: '메모리안',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work06.jpg`,
    category: '기업 사이트 제작',
    link: 'http://memoryan.com/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC + Mobile'],
    desc: '유골보석 및 성형업 관련 제품을 제작하는 기업의 사이트를 제작하였습니다. 판매 제품의 특성상, 방문 고객들이 두려움을 갖고 접근할 수 있기 때문에 무겁지 않으면서도 고급스러운 분위기가 느껴질 수 있도록 기획하였습니다.',
    duration: '2021.05 ~ 2021.06',
    section: '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 12,
    title: 'ITECH',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work12.jpg`,
    category: '기업 사이트 제작',
    link: 'http://itechate.co.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC'],
    desc: "계측장비 판매 기업 '아이텍'의 웹 사이트를 제작하였습니다. 전반적으로 블랙과 화이트 톤, 그리고 로고에 사용된 레드 컬러를 강조색으로 차용하여 기업 이미지를 각인시키고자 하였습니다.",
    duration: '2022.03 ~ 2022.03',
    section: '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    id: 8,
    title: '강민이벤트',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work13.jpg`,
    category: '업체 사이트 제작',
    link: 'http://kmevent.kr/',
    tag: ['기획 100%', '디자인 100%', '그누보드', 'PC'],
    desc: '개업 및 오픈 이벤트 전문 업체의 웹 사이트를 제작하였습니다. 이벤트를 통한 즐거움을 시각적으로 전달하기 위해 아이콘과 모션을 적극적으로 사용하고, 그라데이션 컬러를 사용하여 업체의 이미지를 구축하고자 하였습니다.',
    duration: '2021.12 ~ 2021.12',
    section: '기획, 디자인, 퍼블리싱, 고객 소통 및 응대 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
];

export { link, techList, designList, workList, blurDataUrl };
