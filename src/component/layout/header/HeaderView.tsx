'use client';
import React from 'react';

import LOGO from '/public/image/logo.svg';
import LOGO_MB from '/public/image/logo_mb.svg';

import Header from '@/component/layout/header/HeaderStyle';
import { HeadComponentPropType } from '@/component/layout/header/type';

const HeaderView: React.FC<HeadComponentPropType> = ({ isOpen, onClickMbMenuBtn, socialList }) => {
  return (
    <Header.Container>
      <Header.Title>YERIM.e :: UI Developer 박예림 포트폴리오</Header.Title>
      <Header.Inner className="Header__inner">
        {/* LOGO */}
        <Header.Logo className="Header__logo">
          <a href="/">
            <LOGO />
          </a>
        </Header.Logo>
        {/* Menu */}
        <Header.Mb.Menu href="#" $isOpen={isOpen} onClick={onClickMbMenuBtn}>
          Menu
          <Header.Mb.MenuInner>
            <Header.Mb.MenuBar className="Header__mb-menu-bar" />
            <Header.Mb.MenuBar className="Header__mb-menu-bar" />
            <Header.Mb.MenuBar className="Header__mb-menu-bar" />
          </Header.Mb.MenuInner>
        </Header.Mb.Menu>
        <Header.Social.List $isOpen={isOpen} className="Header__social">
          {socialList.map((el, idx) => (
            <Header.Social.Item className="Header__social-item" key={`social-${el.title}`}>
              <a href={el.href} target="_blank" rel="noreferrer">
                <Header.Social.SoundOnly className="Header__social-item--sound-only">
                  {el.title}
                </Header.Social.SoundOnly>
                {el.icon}
              </a>
            </Header.Social.Item>
          ))}
        </Header.Social.List>
      </Header.Inner>
    </Header.Container>
  );
};

export default HeaderView;
