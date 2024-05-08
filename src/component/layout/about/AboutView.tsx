'use client';
import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import MotionText, { motionTextContainerOption } from '@/component/common/motion/MotionText';
import About from '@/component/layout/about/AboutStyle';
import { ProfileImgContainer, SectionCategoryTitle } from '@/styles/Common';
import {
  animateSpringButton,
  animateProfileImg,
  animateEaseUpText,
  animateSpringUpContainer,
  animateEaseUpTextTransition,
} from '@/styles/motion';
import Lottie from 'react-lottie-player';

const lottieJson = require('/public/lottie/rocket.json');

const AboutView: React.FC<{ link: string }> = ({ link }) => {
  return (
    <About.Page
      className="section"
      variants={animateSpringUpContainer(1)}
      whileInView="active"
      initial="initial"
      transition={{ delay: 0.35, type: 'linear', when: 'beforeChildren', delayChildren: 0, staggerChildren: 0.2 }}
    >
      <SectionCategoryTitle>About me</SectionCategoryTitle>
      <About.Container className="About__container">
        <ProfileImgContainer
          className="About__profile-img"
          variants={animateProfileImg}
          initial="initial"
          whileInView="active"
          transition={{
            opacity: { ease: 'linear', duration: 0.35, delay: 0.35 },
            transform: { type: 'linear', duration: 0.45, delay: 0.35 },
          }}
        >
          <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/about/profile.webp`}
            alt="profile image"
            placeholder="blur"
            sizes="(max-width: 460px) 90vw, (max-width: 768px) 60vw, (max-width: 1440px) 34rem, (min-width: 1441px) 38rem"
          />
          <About.Lottie>
            <Lottie loop animationData={lottieJson} play />
          </About.Lottie>
        </ProfileImgContainer>
        <About.Text.Container
          className="About__text-container"
          variants={animateSpringUpContainer(1)}
          whileInView="active"
          initial="initial"
          transition={{ delay: 0.6, type: 'linear', when: 'beforeChildren', delayChildren: 0, staggerChildren: 1 }}
        >
          <About.Text.Title.Text className="About__title" {...motionTextContainerOption}>
            <MotionText text="be" className="About__title--light" /> <MotionText text="flexible." />
          </About.Text.Title.Text>
          <About.Text.Desc.Text variants={animateEaseUpText} transition={animateEaseUpTextTransition}>
            안녕하세요, 프론트엔드 및 UI 개발자 박예림입니다.
            <br />
            저는 견고한 마크업을 바탕으로, 서비스에 멋진 UI와 인터랙션을 구현하고 <About.LineBreak.Pc />
            문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다.
            <br />
            기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, <About.LineBreak.Pc />
            그리고 개발을 통해 더 많은 사람들의 문제를 해결하는 것이 목표입니다.
          </About.Text.Desc.Text>
          <br />
          <br />
          <About.Text.Desc.Text variants={animateEaseUpText}>
            개발 업무는 혼자 이루어지지 않는 것을 인지하며 동료와의 의사소통과 협력에 가치를 두고 있습니다. <br />
            그리고 이를 통해 개개인의 합보다 더 큰 시너지를 만들 수 있다고 믿고 있습니다.
            <br />
            시너지를 만들 수 있도록, 항상 경청하고 열린 자세로 임하며 성장해나가는{' '}
            <About.Text.Desc.Point className="About__desc--point">flexible</About.Text.Desc.Point>한 사람이 되겠습니다.
          </About.Text.Desc.Text>
          <About.Button.Container className="About__button-wrap">
            <About.Button.Button
              className="About__button"
              $bgColor="secondaryBlue"
              href={link}
              target="_blank"
              variants={animateSpringButton}
              whileHover="hover"
              whileTap="hover"
            >
              이력 & 경력 보기
            </About.Button.Button>
          </About.Button.Container>
        </About.Text.Container>
      </About.Container>
    </About.Page>
  );
};

export default AboutView;
