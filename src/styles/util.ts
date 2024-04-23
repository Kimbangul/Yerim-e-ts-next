import styled, {css} from 'styled-components';
import theme from '@/styles/theme';

// FUNCTION prop color type
export const handleColorType = (color: string) => {
  switch (color) {
    case 'mainColor':
      return theme.color.main;
    default:
      return theme.color.point;
  }
};

// FUNCTION 스크린리더 처리용 함수
export const makeSoundOnly = () => {  
  return css`
    visibility: hidden;
    font-size: 0;
    width: 0;
    height: 0;
    position: absolute;
    pointer-events: none;
  `
}

