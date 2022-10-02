import Link from 'next/link';
import styled, { css } from 'styled-components';

import LOGO from 'src/assets/image/logo.svg';

const Container = styled.header`
  width: 100%;
  height: 7.2rem;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  background: transparent;
  z-index: 99999;
  transition: background-color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.color.headerColor};
  }

  .Header {
    &__inner {
      width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <div className='Header__inner'>
        <h1>
          <Link href='/'>
            <a>
              <LOGO />
            </a>
          </Link>
        </h1>
      </div>
    </Container>
  );
};

export default Header;
