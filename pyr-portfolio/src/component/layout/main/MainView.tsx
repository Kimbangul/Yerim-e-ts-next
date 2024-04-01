'use client';
import Main from '@/component/layout/main/MainStyle';
import { SectionCategoryTitle } from '@/styles/Common';

const MainView = () => {
  return (
    <Main.Page className="section">
      {/* TODO */}
      {/* <MainVideo />
      <MainParticle /> */}
      <Main.Container className="Main__container">
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <Main.Text.Container className="Main__text-container">
          <Main.Text.Title className="Main__title">
            {'YERIM.e'.split('').map((el, idx) => (
              <Main.Text.Word key={el + idx} delay={`${0.1 * idx}s`}>
                {el}
              </Main.Text.Word>
            ))}
          </Main.Text.Title>
          <Main.Text.Desc className="Main__desc">Web Developer Portfolio</Main.Text.Desc>
        </Main.Text.Container>
      </Main.Container>
      <Main.Image.Container className="Main__img">
        <Main.Image.Inner>
          {/* <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`}
            alt='main image'
            placeholder='blur'
            blurDataURL={blurDataUrl}
          /> */}
        </Main.Image.Inner>
      </Main.Image.Container>
      <Main.ScrollDown.Container className="Main__scroll-down-container">
        <Main.ScrollDown.Icon></Main.ScrollDown.Icon>
        <Main.ScrollDown.Text>Scroll Down</Main.ScrollDown.Text>
      </Main.ScrollDown.Container>
    </Main.Page>
  );
};

export default MainView;
