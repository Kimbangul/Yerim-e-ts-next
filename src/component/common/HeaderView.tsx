import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { MaxWidthContainer } from 'styles/Common';
import LOGO from 'src/assets/image/logo.svg';
import LOGO_MB from 'src/assets/image/logo_mb.svg';

const HeaderView: React.FC = () => {
  return (
    <Header.Container>
      <Header.Inner className='Header__inner'>
        <Header.Logo className='Header__logo'>
          <Link href='/'>
            <a>
              <LOGO />
            </a>
          </Link>
        </Header.Logo>
        <Header.Mb.Logo className='Header__logo--mb'>
          <Link href='/'>
            <a>
              <LOGO_MB />
            </a>
          </Link>
        </Header.Mb.Logo>
        <Header.Mb.Menu href='#'>
          Menu
          <Header.Mb.MenuBar />
          <Header.Mb.MenuBar />
          <Header.Mb.MenuBar />
        </Header.Mb.Menu>
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
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      display: none;
    }
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

      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        display: none;
      }
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
    SoundOnly: styled.span`
      visibility: hidden;
      font-size: 0;
      width: 0;
      height: 0;
      position: absolute;
      pointer-events: none;
    `,
  },
  Mb: {
    Logo: styled.h1`
      display: none;
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        display: block;
      }
      path {
        transition: fill 0.3s;
      }
      &:hover {
        path {
          fill: ${({ theme }) => theme.color.point};
        }
      }
    `,
    Menu: styled.a`
      display: none;
      background: transparent;
      border: none;
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      font-size: 0;
      text-indent: -99999;
      &::after {
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
      }
    `,
    MenuBar: styled.span`
      display: inline-block;
      width: 100%;
      height: 0.1rem;
      background: #fff;
      &:nth-child(2) {
        width: 70%;
      }
      &:nth-child(3) {
        width: 100%;
      }
    `,
  },
};

export default HeaderView;
