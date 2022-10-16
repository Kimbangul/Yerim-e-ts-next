import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { MaxWidthContainer } from 'styles/Common';
import LOGO from '../../../src/assets/image/logo.svg';

const HeaderView: React.FC = () => {
  return (
    <Header.Container>
      <Header.Inner className='Header__inner'>
        <Header.Logo className='Header__logo'>
          <Link href='/'>
            <a>
              <LOGO preserveAspectRatio='none' />
            </a>
          </Link>
        </Header.Logo>
        <Header.Social.List className='Header__social'>
          <Header.Social.Item className='Header__social-item'>
            <Link href='https://github.com/Kimbangul'>
              <a target='_blank' rel='noreferrer'>
                <Header.Social.SoundOnly className='Header__social-item--sound-only'>
                  Github
                </Header.Social.SoundOnly>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </Header.Social.Item>
          <Header.Social.Item className='Header__social-item'>
            <Link href='mailto:highcolor_12@g.hongik.ac.kr'>
              <a target='_blank' rel='noreferrer'>
                <Header.Social.SoundOnly className='Header__social-item--sound-only'>
                  Mail
                </Header.Social.SoundOnly>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Link>
          </Header.Social.Item>
        </Header.Social.List>
      </Header.Inner>
    </Header.Container>
  );
};

const Header = {
  Container: styled.header`
    width: 100%;
    height: 7.2rem;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    background: transparent;
    z-index: 99999;
    transition: background-color 0.3s, height 0.3s;
    &:hover {
      background: ${({ theme }) => theme.color.header};
    }
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      height: 6rem;
    }
  `,
  Inner: styled(MaxWidthContainer)`
    margin: 0 auto;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.h1`
    path {
      transition: fill 0.3s;
    }
    &:hover {
      path {
        fill: ${({ theme }) => theme.color.point};
      }
    }
  `,
  Social: {
    List: styled.ul`
      display: flex;
      align-items: center;
      transform: translateX(1.2rem);
    `,
    Item: styled.li`
      a {
        width: 2.4rem;
        margin: 0 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.body.lg};
        color: ${({ theme }) => theme.color.text};
        transition: color 0.3s;
        &:hover {
          color: ${({ theme }) => theme.color.point};
        }
      }
    `,
    Link: styled.a`
      width: 2.4rem;
      margin: 0 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.body.lg};
      color: ${({ theme }) => theme.color.f_bodyColor};
      transition: color 0.3s;
      &:hover {
        color: ${({ theme }) => theme.color.point};
      }
    `,
    SoundOnly: styled.span`
      visibility: hidden;
      font-size: 0;
      width: 0;
      height: 0;
      position: absolute;
      pointer-events: none;
    `,
  },
};

export default HeaderView;
