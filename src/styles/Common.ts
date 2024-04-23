import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

// COMPONENT fullpage Page
export const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0;
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.3s;
`;

export const MaxWidthContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  transition: padding 0.3s;
  /* FUNCTION pc */
  @media (${({ theme }) => theme.windowSize['lt-m']}) {
    width: 100%;
    padding: 0 6rem;
  }
  @media (${({ theme }) => theme.windowSize['lt-s']}) {
    width: 100%;
  }
  /* FUNCTION mb */
  @media (${({ theme }) => theme.windowSize['mb-m']}) {
    padding: 0 3rem;
  }
  /* FUNCTION mb */
  @media (${props => props.theme.windowSize['mb-s']}) {
    padding: 0 2rem;
  }
`;

// COMPONENT section title - sound only
export const SectionCategoryTitle = styled.h2`
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  text-indent: -99999;
  pointer-events: none;
`;

// COMPONENT button
export const Button = styled(motion.a)<{ width?: string; $bgColor?: string }>`
  font-family: 'Pretendard', 'sans-serif';
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-weight: 700;
  cursor: pointer;
  min-width: ${props => (props.width ? props.width : '18rem')};
  padding: 0 4.8rem;
  height: 5.6rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.color.point40};
  color: ${({ theme }) => theme.color.point};
  transition: width 0.3s, background 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.main};
  }

  ${({ $bgColor }) => css`
    background-color: ${$bgColor}40;
    color: ${$bgColor};

    &:hover {
      background-color: ${$bgColor};
    }
  `}

  @media (${({ theme }) => theme.windowSize['mb-l']}) {
    width: 100%;
    min-width: unset;
  }
`;

// COMPONENT profile image container
export const ProfileImgContainer = styled(motion.div)`
  width: 34rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  img {
    border-radius: 0.8rem;
  }

  @media (max-width: 460px) {
    width: 100%;
    height: auto;
  }
`;

//COMPONENT title word
export const WordEffectGlow = styled.span<{ $delay?: string }>`
  @keyframes anime_textup {
    0% {
      top: 0;
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 0rem;
    }
    20% {
      /* top: -0.8rem; */
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 2rem;
    }
    40% {
      top: 0;
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 0rem;
    }
    60% {
      top: 0;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }
  position: relative;
  animation: anime_textup 6s infinite;
  animation-delay: ${props => (props.$delay ? props.$delay : '0s')};
`;

export const SectionTitleAni = ($wordLength: number, $duration?: string) => {
  const animateTiming = 100 / $wordLength;
  return css`
    @keyframes titleWordAni-${$wordLength} {
      0% {
        top: 0;
      }
      ${animateTiming + '%'} {
        top: -0.4rem;
      }
      ${2 * animateTiming + '%'} {
        top: 0;
      }
      100% {
        top: 0;
      }
    }
    position: relative;
    animation: titleWordAni-${$wordLength} ${$duration ? $duration : `${0.3 * $wordLength}s`} infinite;
    ${Array($wordLength)
      .fill('')
      .map(
        (_, index) => `&:nth-of-type(${index + 1}){
      animation-delay: ${0.3 * index}s;
    }`
      )
      .join('')}
  `;
};

// COMPONENT skeleton shimmer
export const Shimmer = (delay: string) => css`
  @keyframes shimmer {
    100% {
      transform: translateX(70%);
    }
  }

  & {
    position: relative;
    overflow: hidden;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    animation: shimmer ${delay} infinite;
    content: '';
  }
`;
