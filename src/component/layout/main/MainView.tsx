'use client';
import Lottie from 'react-lottie-player';
import Main from '@/component/layout/main/MainStyle';
import { SectionCategoryTitle } from '@/styles/Common';
import MainParticle from '@/component/layout/main/MainParticle';
import { animateSpringUpContainer } from '@/styles/motion';

const charJson = require('/public/lottie/space2.json');
const lottieJson = require('/public/lottie/space.json');

const titleTextAni = {
  parents: animateSpringUpContainer(0.05),
  child: {
    initial: { scaleY: 0.65 },
    active: { scaleY: 1 },
  },
};

const MainView = () => {
  return (
    <Main.Page className="section">
      <MainParticle />
      <Main.Container className="Main__container">
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <Main.Text.Container className="Main__text-container">
          <Main.Text.Lottie>
            <Lottie loop animationData={charJson} play />
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
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ mode: 'linear', duration: 0.7, delay: 0.3 }}
      >
        <Lottie loop animationData={lottieJson} play />
      </Main.Image.Container>
      <Main.ScrollDown.Container className="Main__scroll-down-container">
        <Main.ScrollDown.Icon></Main.ScrollDown.Icon>
        <Main.ScrollDown.Text>Scroll Down</Main.ScrollDown.Text>
      </Main.ScrollDown.Container>
    </Main.Page>
  );
};

export default MainView;
