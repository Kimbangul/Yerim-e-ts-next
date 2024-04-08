'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import VELOG_24 from '/public/icon/velog_24.svg';

import HeaderView from '@/component/layout/header/HeaderView';
import { socialItem } from '@/component/layout/header/type';
import { link } from '@/util/data';

const HeaderContainer = () => {
  // PARAM state
  const [isOpenMbMenu, setIsOpenMbMenu] = useState(false);

  // PARAM 소셜 메뉴 파라미터
  const socialList: socialItem[] = [
    { title: 'Github', href: link.github, icon: <FontAwesomeIcon icon={faGithub} /> },
    { title: 'Mail', href: link.mail, icon: <FontAwesomeIcon icon={faEnvelope} /> },
    { title: 'Velog', href: link.velog, icon: <VELOG_24 /> },
  ];

  // FUNCTION 메뉴 버튼 클릭시 실행
  const onClickMbMenuBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpenMbMenu(!isOpenMbMenu);
  };

  return <HeaderView isOpen={isOpenMbMenu} onClickMbMenuBtn={onClickMbMenuBtn} socialList={socialList} />;
};

export default HeaderContainer;
