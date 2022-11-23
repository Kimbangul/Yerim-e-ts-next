import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { link } from 'src/data/data';
import { MaxWidthContainer } from 'styles/Common';
import LOGO from 'public/image/logo.svg';
import LOGO_MB from 'public/image/logo_mb.svg';
import VELOG_24 from 'public/icon/velog_24.svg';

// PARAM type
type HeadComponentPropType = {
  [key: string]: any;
  isOpen: boolean;
};

const HeaderView: React.FC = () => {
  // PARAM state
  const [isOpenMbMenu, setIsOpenMbMenu] = useState(false);

  // FUNCTION mobile menu click
  const onClickMbMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpenMbMenu(!isOpenMbMenu);
    return;
  };

  return (
    <Header.Container>
      <Header.Title>
        YERIM.e :: UI 개발자, 웹 퍼블리셔 박예림 포트폴리오
      </Header.Title>
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
        <Header.Mb.Menu href='#' isOpen={isOpenMbMenu} onClick={onClickMbMenu}>
          Menu
          <Header.Mb.MenuInner>
            <Header.Mb.MenuBar className='Header__mb-menu-bar' />
            <Header.Mb.MenuBar className='Header__mb-menu-bar' />
            <Header.Mb.MenuBar className='Header__mb-menu-bar' />
          </Header.Mb.MenuInner>
        </Header.Mb.Menu>
        <Header.Social.List isOpen={isOpenMbMenu} className='Header__social'>
          <Header.Social.Item className='Header__social-item'>
            <Link href={link.github}>
              <a target='_blank' rel='noreferrer'>
                <Header.Social.SoundOnly className='Header__social-item--sound-only'>
                  Github
                </Header.Social.SoundOnly>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </Header.Social.Item>
          <Header.Social.Item className='Header__social-item'>
            <Link href={link.mail}>
              <a target='_blank' rel='noreferrer'>
                <Header.Social.SoundOnly className='Header__social-item--sound-only'>
                  Mail
                </Header.Social.SoundOnly>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Link>
          </Header.Social.Item>
          <Header.Social.Item className='Header__social-item'>
            <Link href={link.velog}>
              <a target='_blank' rel='noreferrer'>
                <Header.Social.SoundOnly className='Header__social-item--sound-only'>
                  Velog
                </Header.Social.SoundOnly>
                <VELOG_24 />
              </a>
            </Link>
          </Header.Social.Item>
        </Header.Social.List>
      </Header.Inner>
    </Header.Container>
  );
};

const Header = {
  Title: styled.h1`
    position: absolute;
    text-indent: -99999;
    font-size: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  `,
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
  Logo: styled.div`
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
    List: styled.ul<HeadComponentPropType>`
      display: flex;
      align-items: center;
      transform: translateX(1.2rem);
      transition: right 0.3s;

      @keyframes list-ani {
        0% {
          transform: scale(0);
        }
        80% {
          transform: scale(1.2);
        }
        95% {
          transform: scale(1);
        }
      }

      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        display: flex;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        flex-direction: column;
        transform: none;
        top: calc(100% + 0.8rem);
        right: 3rem;
        gap: 2.4rem;
        transition: opacity 0.3s, visibility 0s 0.3s;
        ${(props) =>
          props.isOpen &&
          css`
            visibility: visible;
            opacity: 1;
            transition: opacity 0.3s, visibility 0s;
            .Header__social-item {
              animation: list-ani 0.3s;
            }
          `};
      }
      @media (${({ theme }) => theme.windowSize['mb-s']}) {
        right: 2rem;
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
        &:hover {
          path {
            fill: ${({ theme }) => theme.color.point};
          }
        }
        @media (${({ theme }) => theme.windowSize['mb-m']}) {
          margin: 0;
        }
        svg {
          width: 100%;
          height: 100%;
          path {
            transition: fill 0.3s;
            fill: ${({ theme }) => theme.color.text};
          }
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
    Menu: styled.a<HeadComponentPropType>`
      display: none;
      background: transparent;
      border: none;
      width: 2.4rem;
      height: 2.4rem;
      font-size: 0;
      text-indent: -99999;
      padding: 0.2rem 0;
      &::after {
      }
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        display: block;
      }
      ${(props) =>
        props.isOpen &&
        css`
          .Header__mb-menu-bar {
            position: absolute;
            transition: all 0.3s, transform 0.3s 0.3s;
            &:nth-child(1) {
              top: 50%;
              right: 0;
              transform: rotate(-45deg);
            }
            &:nth-child(3) {
              top: 50%;
              right: 0;
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              opacity: 0;
            }
          }
        `};
    `,
    MenuInner: styled.div`
      width: 100%;
      height: 100%;
      position: relative;
    `,
    MenuBar: styled.span`
      display: inline-block;
      width: 100%;
      height: 0.1rem;
      background: #fff;
      transition: all 0.3s 0.3s, transform 0.3s;
      position: absolute;
      right: 0;
      top: 0;
      &:nth-child(2) {
        width: 70%;
        top: calc(50% - 0.05rem);
      }
      &:nth-child(3) {
        width: 100%;
        top: calc(100% - 0.1rem);
      }
    `,
  },
};

export default HeaderView;
