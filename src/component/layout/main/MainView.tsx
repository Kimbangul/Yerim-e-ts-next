'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import Main from '@/component/layout/main/MainStyle';
import MainParticle from '@/component/layout/main/MainParticle';
import { animateSpringUpContainer } from '@/styles/motion';
import { MainViewPropType } from '@/component/layout/main/type';

const titleTextAni = {
  parents: animateSpringUpContainer(0.05),
  child: {
    initial: { scale: 0.65 },
    active: { scale: 1 },
  },
};

const opacityAni = {
  initial: { opacity: 0 },
  active: { opacity: 1, transition: { delay: 0.8 } },
};

const MainView: React.FC<MainViewPropType> = ({ imgObj }) => {
  return (
    <Main.Page className="section">
      <MainParticle />
      <Main.Container className="Main__container">
        <Main.Text.Container className="Main__text-container">
          <Main.Text.Lottie
            initial={{ scale: 1 }}
            drag
            dragElastic={0.2}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
            whileTap={{ scale: [null, 0.95, 1], transition: { duration: 0.2, times: [0, 0.7, 1] } }}
          >
            <Lottie loop animationData={imgObj.char} play />
          </Main.Text.Lottie>
          <Main.Text.Title
            className="Main__title"
            variants={titleTextAni.parents}
            initial="initial"
            whileInView="active"
          >
            {'YERIM.e'.split('').map((el, idx) => (
              <Main.Text.Word
                variants={titleTextAni.child}
                key={el + idx}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                {el}
              </Main.Text.Word>
            ))}
          </Main.Text.Title>
          <Main.Text.Desc className="Main__desc">UI Developer Portfolio</Main.Text.Desc>
        </Main.Text.Container>
      </Main.Container>
      <Main.Image.Container
        className="Main__img"
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
      >
        <Lottie loop animationData={imgObj.lottie} play />
      </Main.Image.Container>
      <Main.ScrollDown.Container
        className="Main__scroll-down-container"
        variants={opacityAni}
        initial="initial"
        whileInView="active"
        transition={{
          duration: 0.3,
        }}
      >
        <Main.ScrollDown.Icon></Main.ScrollDown.Icon>
        <Main.ScrollDown.Text>Scroll Down</Main.ScrollDown.Text>
      </Main.ScrollDown.Container>
    </Main.Page>
  );
};

export default MainView;
