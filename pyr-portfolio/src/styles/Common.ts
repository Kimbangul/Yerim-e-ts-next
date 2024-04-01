import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

// COMPONENT fullpage Page
const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 7.2rem;
  /* overflow: hidden; */
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.3s;
  @media (${({ theme }) => theme.windowSize['lt-s']}) {
    padding-bottom: 7.2rem;
  }
  /* FUNCTION mb */
  @media (${({ theme }) => theme.windowSize['mb-m']}) {
    height: 6rem;
  }
`;

const MaxWidthContainer = styled.div`
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
const SectionCategoryTitle = styled.h2`
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  text-indent: -99999;
  pointer-events: none;
`;

// COMPONENT button
const Button = styled.a<{ width?: string; $bgColor?: string }>`
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

  @media (${({ theme }) => theme.windowSize['mb-l']}) {
    width: 100%;
    min-width: unset;
  }
`;

// COMPONENT profile image container
const ProfileImgContainer = styled.div`
  width: 34rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  flex-shrink: 0;

  @media (max-width: 460px) {
    width: 100%;
    height: auto;
  }
`;

//COMPONENT title word
const WordEffectGlow = styled.span<{ $delay?: string }>`
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

export { Page, SectionCategoryTitle, MaxWidthContainer, Button, ProfileImgContainer, WordEffectGlow };
