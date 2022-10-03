import { createGlobalStyle } from 'styled-components';

import PretendardThin from 'src/assets/fonts/Pretendard-Thin.otf';
import PretendardLight from 'src/assets/fonts/Pretendard-Light.otf';
import PretendardRegular from 'src/assets/fonts/Pretendard-Regular.otf';
import PretendardMedium from 'src/assets/fonts/Pretendard-Medium.otf';
import PretendardSemiBold from 'src/assets/fonts/Pretendard-SemiBold.otf';
import PretendardBold from 'src/assets/fonts/Pretendard-Bold.otf';
import PretendardExtraBold from 'src/assets/fonts/Pretendard-ExtraBold.otf';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  src: url(fonts/Pretendard-Light.otf) format("opentype");
}

  @font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  src: url(fonts/Pretendard-Regular.otf) format("opentype");
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  src: url(fonts/Pretendard-Medium.otf) format("opentype");
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  src: url(fonts/Pretendard-SemiBold.otf) format("opentype");
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  src: url(fonts/Pretendard-Bold.otf) format("opentype");
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  src: url(fonts/Pretendard-ExtraBold.otf) format("opentype");
}
`;

export default FontStyles;
