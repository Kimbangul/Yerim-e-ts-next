'use client';
import Main from '@/component/layout/main/MainStyle';
import { SectionCategoryTitle } from '@/styles/Common';
import MainVideo from '@/component/layout/main/MainVideo';
import MainParticle from '@/component/layout/main/MainParticle';
import Lottie from 'react-lottie-player';

// import lottieJson from '/public/lottie/code.json';

const charJson = require('/public/lottie/space2.json');
const lottieJson = require('/public/lottie/space.json');

const MainView = ({ imgObj }: { imgObj: { [key: string]: JSX.Element } }) => {
  return (
    <Main.Page className="section">
      {/* <MainVideo /> */}
      <MainParticle />
      <Main.Container className="Main__container">
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <Main.Text.Container className="Main__text-container">
          <Main.Text.Lottie>
            <Lottie loop animationData={charJson} play />
          </Main.Text.Lottie>
          <Main.Text.Title className="Main__title">
            {'YERIM.e'.split('').map((el, idx) => (
              <Main.Text.Word key={el + idx} $delay={`${0.1 * idx}s`}>
                {el}
              </Main.Text.Word>
            ))}
          </Main.Text.Title>
          <Main.Text.Desc className="Main__desc">UI Developer Portfolio</Main.Text.Desc>
        </Main.Text.Container>
      </Main.Container>
      <Main.Image.Container className="Main__img">
        <Lottie loop animationData={lottieJson} play />
      </Main.Image.Container>
      {/* <Main.Image.Container className="Main__img">
        <Main.Image.Inner>{imgObj.moon}</Main.Image.Inner>
      </Main.Image.Container> */}
      <Main.ScrollDown.Container className="Main__scroll-down-container">
        <Main.ScrollDown.Icon></Main.ScrollDown.Icon>
        <Main.ScrollDown.Text>Scroll Down</Main.ScrollDown.Text>
      </Main.ScrollDown.Container>
    </Main.Page>
  );
};

export default MainView;
