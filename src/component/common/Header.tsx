import styled, { css } from 'styled-components';

const Container = styled.header`
  width: 7.2rem;
  height: 100%;
  position: fixed;
  color: #fff;
  background-color: ${(props) => props.theme.color.headerColor};
  z-index: 99999;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>헤더~~~</h1>
    </Container>
  );
};

export default Header;
