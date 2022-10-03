import styled, { css } from 'styled-components';
import theme from 'styles/Theme';

// FUNCTION prop color type
const handleColorType = (color: string) => {
  switch (color) {
    case 'mainColor':
      return theme.color.mainColor;
    case 'secondaryBlue':
      return theme.color.secondaryBlue;
    case 'secondaryPurple':
      return theme.color.secondaryPurple;
    case 'secondaryPink':
      return theme.color.secondaryPink;
    case 'pointPink':
      return theme.color.pointPink;
    default:
      return theme.color.secondaryPink;
  }
};

// COMPONENT section container
const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding};
  padding-top: 7.2rem;
  overflow: hidden;
  background: ${({ theme }) => theme.color.mainColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Button = styled.button<{ width?: string; bgColor?: string }>`
  font-family: 'Pretendard', 'sans-serif';
  font-size: ${({ theme }) => theme.fontSize.body.rg};
  font-weight: 400;
  cursor: pointer;
  min-width: ${(props) => (props.width ? props.width : '18rem')};
  padding: 0 1.6rem;
  height: 4.4rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor
      ? handleColorType(props.bgColor)
      : props.theme.color.pointPink};
  color: ${({ theme }) => theme.color.f_bodyColor_2};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.pointPink};
    color: ${({ theme }) => theme.color.mainColor};
  }
`;

export { Container, SectionCategoryTitle, Button };
