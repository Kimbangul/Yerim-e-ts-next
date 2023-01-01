import styled from 'styled-components';
import theme from 'styles/Theme';

// FUNCTION prop color type
const handleColorType = (color: string) => {
  switch (color) {
    case 'mainColor':
      return theme.color.main;
    default:
      return theme.color.point;
  }
};

// COMPONENT section container
const Container = styled.section`
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
  @media (${(props) => props.theme.windowSize['mb-s']}) {
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
const Button = styled.a<{ width?: string; bgColor?: string }>`
  font-family: 'Pretendard', 'sans-serif';
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-weight: 700;
  cursor: pointer;
  min-width: ${(props) => (props.width ? props.width : '18rem')};
  padding: 0 4.8rem;
  height: 5.6rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.color.point40};
  /* border: 0.2rem solid ${(props) => props.theme.color.point}; */

  /* background-color: ${(props) =>
    props.bgColor
      ? handleColorType(props.bgColor)
      : props.theme.color.pointPink}; */
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

export {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
  Button,
  ProfileImgContainer,
};
