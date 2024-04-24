import { DesignListItemType, WorkType } from '@/util/type';

// PARAM link data
const link = {
  github: 'https://github.com/Kimbangul',
  velog: 'https://velog.io/@kimbangul',
  tel: 'tel: +8201077070968',
  mail: 'mailto:highcolor_12@g.hongik.ac.kr',
  // resume: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/pyr_resume.pdf`,
  resume: `https://meadow-touch-c48.notion.site/Yerim-Park-FLEXIBLE-Developer-5694713033624c6cae1ae51b129c556a?pvs=4`,
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
      'Photoshop, Illustrator를 이용한 디자인 및 편집 작업과 XD, Figma를 이용한 <span>UX/UI 설계와 프로토타이핑</span>이 가능합니다.',
      'After effects를 이용한 모션그래픽 제작 및 영상 편집을 할 수 있습니다.',
    ],
    tag: ['Photoshop', 'Illustrator', 'XD', 'Figma', 'After Effects'],
  },
  develop: {
    title: 'Develop Tech.',
    content: [
      '페이지 구조와 태그의 의미를 고려한 <u>시맨틱 마크업</u>을 지향하며 <span>웹 표준</span>과 <span>웹 접근성</span>에 대해 이해하고 있습니다.',
      `디자인 시안을 빠르게 웹에 구현해 낼 수 있으며 다양한 디바이스를 대응하는 반응형 <span>웹 퍼블리싱</span>이 가능합니다.`,
      'CSS Animation, Framer-motion, GSAP을 이용한 <span>애니메이션과 모션 구현</span>이 가능합니다.',
      '<span>HTML, CSS, SCSS, CSS-in-JS, JavaScript</span>를 포함하여 <span>TypeScript, React.js, Next.js</span> 환경에서도 원활한 퍼블리싱 및 프론트 개발을 수행할 수 있습니다.',
      'UX/UI 및 FrontEnd에 대한 이해도뿐만 아닌 BackEnd 직무, SQL, DB에 대한 이해도도 보유하고 있습니다.',
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
    ],
  },
  coWork: {
    title: 'Co-works.',
    content: [
      'Git, Bitbucket 등의 분산 형상관리를 활용하며 Jira, Confluence 등의 협업 툴을 사용한 경험이 있습니다.',
      'PhotoShop, Figma 등 프로토타이핑 툴에 대한 능숙한 활용이 가능합니다.',
      '협업 경험과 직무 이해도를 바탕으로 기획자, 디자이너, 백엔드와 서버, 인프라 담당자 등 여러 직군의 사람들과 <span>원활한 의사소통</span>이 가능합니다.',
    ],
    tag: ['Git', 'Bitbucket', 'Photoshop', 'Figma', 'Jira', 'Confluence'],
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
    id: 17,
    title: '아주대의료원 산하 웹사이트 운영 및 유지보수',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work17.jpg`,
    category: '병원, 의료원 산하 웹사이트 및 내부 시스템 운영',
    link: 'https://hosp.ajoumc.or.kr/',
    tag: ['운영', '유지보수', '서브시스템 개발', '퍼블리싱'],
    desc: `아주대병원 홈페이지 담당자로 의료원 산하 병원, 의료원, 각종 센터와 CMS, 인사고과, VOC 관리자 등 내부 직원들이 사용하는 서브사이트들을 운영 및 유지보수 하였습니다.\n의료원 홍보팀과 협업하여 내부 콘텐츠 퍼블리싱을 지원하였으며, 아주대학교병원 병원현황, 의과학연구소 ‘연구자원 공유 서비스', 'Cloning 제작 서비스', 장비 사용 예약신청 페이지 등의 신규 페이지 개발 및 비회원 예약조회 시 본인인증, CMS 엑셀 다운로드 등의 기능 개발을 수행하였습니다.`,
    duration: '2023.03 ~ 진행중',
    section: '사이트 운영 및 유지보수',
    tool: 'Spring, JSP, ASP.NET, HTML, CSS, JavaScript, SQL',
  },
  {
    id: 18,
    title: '대아정보시스템  홈페이지 리뉴얼',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work18.jpg`,
    category: '기업 사이트 제작',
    link: 'https://daea.vercel.app/',
    tag: ['디자인 100%', '구현 100%', 'Next.js', '반응형', 'SCSS'],
    desc: '기존 노코드 툴로 제작되었던 홈페이지를 자유롭게 커스텀 및 관리할 수 있도록 개발하는 작업을 하였습니다. 의료IT기업의 이미지에 맞게끔 기존 사이트를 더 현대적이고 깔끔하게 리디자인하고자 하였습니다.\nInterSection Observer API로 스크롤 애니메이션을 구현하였으며 모바일 환경에서도 이용이 용이하도록 반응형 웹을 구축하였습니다.\n리뉴얼 후 검색엔진 노출 순위의 증가로 페이지 방문수 증대에 기여하였습니다.',
    duration: '2023.11 ~ 2023.12',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Next.js, SCSS, TypeScript, Recoil, Node.js, Git',
  },
  {
    id: 14,
    title: 'YERIM.e',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work14.jpg`,
    category: '포트폴리오 사이트',
    link: 'https://yerim-e.com/',
    github: 'https://github.com/Kimbangul/Yerim-e-ts-next',
    tag: ['디자인 100%', '구현 100%', '반응형', 'Next.js', 'Styled-Component', 'Framer-motion'],
    desc: '감각적이고 모던한 느낌을 전달하기 위해 전반적으로 흑백의 컬러를 차용하며, 메인은 우주 컨셉으로 디자인하였습니다. TypeScript와 Styled-Component를 사용하였으며 CSS transition 및 animation 효과를 활용하여 감각적으로 모션을 부여하고자 하였습니다.\n\n2024년 4월에 Next.js 14버전으로 리뉴얼을 진행하였으며, 프로젝트 경량화, 이미지 최적화, lazy load 구현 등 최적화 작업을 진행했습니다.\n\nFramer-motion과 CSS Animation을 이용하여 동적 효과를 부여하고자 하였습니다.',
    duration: '2022.10 ~ 2022.10(1차), 2024.04 ~ 2024.04(리뉴얼)',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Figma, Next.js, Styled-component, TypeScript, Node.js, Git',
  },
  {
    id: 16,
    title: 'RebitX Mobile Web',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work16.jpg`,
    category: '상업용 부동산 조각투자 플랫폼 웹앱 버전 구축',
    link: 'https://rebit-x.vercel.app/mobile',
    notion: 'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
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
    notion: 'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
    tag: ['디자인 100%', '구현 60%', 'Next.js', 'SCSS'],
    desc: '상업용 부동산 조각투자 서비스의 웹 플랫폼 구축 프로젝트에 참여하여 사용자 및 관리자 사이트 전반 디자인 및 Front-end 개발 업무를 담당하였습니다.\n 프론트엔드 초기 개발환경 세팅과, 전역 상태관리 라이브러리 MobX를 도입하였으며 SCSS 스타일 가이드 명세화, 버튼이나 모달 등의 공통 컴포넌트 구축으로 커뮤니케이션 리소스를 줄여 빠르고 효율적인 작업에 기여하고자 하였습니다.',
    duration: '2022.10 ~ 2023.01',
    section: '사용자, 관리자 페이지 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript, Git',
  },
  {
    id: 11,
    title: 'FUNCHY',
    thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work11.jpg`,
    category: '온라인 P2P 플랫폼 서비스 구축',
    link: 'https://funchy.vercel.app/',
    notion: 'https://meadow-touch-c48.notion.site/FUNCHY-P2P-00f2f5c02e5e403f831814c23bb2274b',
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
