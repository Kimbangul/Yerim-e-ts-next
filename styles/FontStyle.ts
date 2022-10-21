import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  src: url(/fonts/Pretendard-Light.otf) format("opentype");
}
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Pretendard-Regular.otf) format("opentype");
}
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/Pretendard-Medium.otf) format("opentype");
}
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  src: url(/fonts/Pretendard-SemiBold.otf) format("opentype");
}
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  src: url(/fonts/Pretendard-Bold.otf) format("opentype");
}
@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  src: url(/fonts/Pretendard-ExtraBold.otf) format("opentype");
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Poppins-Regular.ttf) format("truetype");
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/Poppins-Medium.ttf) format("truetype");
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url(/fonts/Poppins-Bold.ttf) format("truetype");
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url(/fonts/Poppins-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: url(/fonts/Poppins-Black.ttf) format("truetype");
}
`;

export default FontStyles;
