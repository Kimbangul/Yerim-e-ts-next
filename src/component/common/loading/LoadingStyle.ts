import styled, { css } from 'styled-components';
import { LoadingStylePropType } from '@/component/common/loading/LoadingType';

const DotCommonStyle = css`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.point};
  transform-origin: center;
`;

const Loading = {
  Container: styled.div<LoadingStylePropType>`
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Dot: styled.div`
    @keyframes dot-flashing {
      0% {
        background-color: ${({ theme }) => theme.color.point};
      }
      50%,
      100% {
        background-color: ${({ theme }) => theme.color.point40};
      }
    }
    position: relative;
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;
    ${DotCommonStyle}

    &::after,
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      ${DotCommonStyle}
    }

    &::before {
      left: -2rem;
      animation: dot-flashing 1s infinite alternate;
      animation-delay: 0s;
    }

    &::after {
      left: 2rem;
      animation: dot-flashing 1s infinite alternate;
      animation-delay: 1s;
    }
  `,
};

export default Loading;
