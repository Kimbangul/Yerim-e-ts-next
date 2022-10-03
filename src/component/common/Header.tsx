import Link from 'next/link';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
      transition: padding 0.3s;

      @media (${({ theme }) => theme.windowSize['lt-m']}) {
        padding: 0 40px;
      }
    }
    &__logo {
      path {
        transition: fill 0.3s;
      }
      &:hover {
        path {
          fill: ${({ theme }) => theme.color.pointPink};
        }
      }
    }
    &__social {
      display: flex;
      align-items: center;
      &-item {
        a {
          width: 2.4rem;
          margin: 0 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSize.body.lg};
          color: ${({ theme }) => theme.color.f_bodyColor};
          transition: color 0.3s;
          &:hover {
            color: ${({ theme }) => theme.color.pointPink};
          }
        }
        &--sound-only {
          visibility: hidden;
          font-size: 0;
          width: 0;
          height: 0;
          position: absolute;
          pointer-events: none;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <div className='Header__inner'>
        <h1 className='Header__logo'>
          <Link href='/'>
            <a>
              <LOGO />
            </a>
          </Link>
        </h1>
        <ul className='Header__social'>
          <li className='Header__social-item'>
            <Link href='https://github.com/Kimbangul' target='_blank'>
              <a>
                <span className='Header__social-item--sound-only'>GIthub</span>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </li>
          <li className='Header__social-item'>
            <Link href='mailto:highcolor_12@g.hongik.ac.kr' target='_blank'>
              <a>
                <span className='Header__social-item--sound-only'>Mail</span>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
