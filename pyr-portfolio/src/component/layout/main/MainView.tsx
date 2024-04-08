'use client';
import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';
import Main from '@/component/layout/main/MainStyle';
import { SectionCategoryTitle } from '@/styles/Common';
import { blurDataUrl } from '@/util/data';
import MainVideo from '@/component/layout/main/MainVideo';
import MainParticle from '@/component/layout/main/MainParticle';

// import Main from '@/component/layout/main/MainStyle.module.scss';

// const MainView = ({ imgObj }: { imgObj: { [key: string]: JSX.Element } }) => {
const MainView = () => {
  return (
    // <section className={`${Main.page} section`}>
    //   <div className={Main.container}>
    //     <div className={Main.text_container}>
    //       <h2 className={Main.text_title}>
    //         {'YERIM.e'.split('').map((el, idx) => (
    //           <span className={Main.text_word} key={el + idx} data-delay={`${0.1 * idx}s`}>
    //             {el}
    //           </span>
    //         ))}
    //       </h2>
    //       <p className={Main.text_desc}>Web Developer Portfolio</p>
    //     </div>
    //   </div>

    //   <div className={`${Main.image_container} img-container`}>
    //     <div className={Main.image_inner}>
    //       <AutoHeightImageView
    //         src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`}
    //         alt="main image"
    //         placeholder="blur"
    //         blurDataURL={blurDataUrl}
    //       />
    //     </div>
    //   </div>
    // </section>
    <Main.Page className="section">
      {/* TODO */}
      <MainVideo />
      <MainParticle />
      <Main.Container className="Main__container">
        <SectionCategoryTitle>Main</SectionCategoryTitle>
        <Main.Text.Container className="Main__text-container">
          <Main.Text.Title className="Main__title">
            {'YERIM.e'.split('').map((el, idx) => (
              <Main.Text.Word key={el + idx} $delay={`${0.1 * idx}s`}>
                {el}
              </Main.Text.Word>
            ))}
          </Main.Text.Title>
          <Main.Text.Desc className="Main__desc">Web Developer Portfolio</Main.Text.Desc>
        </Main.Text.Container>
      </Main.Container>
      <Main.Image.Container className="Main__img">
        <Main.Image.Inner>
          <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`}
            alt="main image"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
          {/* {imgObj.moon} */}
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
