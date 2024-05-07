'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contact from '@/component/layout/contact/ContactStyle';
import { ProfileImgContainer, SectionCategoryTitle } from '@/styles/Common';
import { ContactViewPropType } from '@/component/layout/contact/type';
import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import {
  animateEaseUpText,
  animateEaseUpTextTransition,
  animateProfileImg,
  animateSpringButton,
  animateSpringUpContainer,
} from '@/styles/motion';
import MotionText, { motionTextContainerOption } from '@/component/common/motion/MotionText';

const ContactView: React.FC<ContactViewPropType> = ({ linkData }) => {
  return (
    <Contact.Page
      className="section"
      variants={animateSpringUpContainer(1)}
      whileInView="active"
      initial="initial"
      transition={{ duration: 0, staggerChildren: 0.3 }}
    >
      <SectionCategoryTitle>Contact</SectionCategoryTitle>
      <Contact.Container className="Contact__container">
        <ProfileImgContainer
          className="Contact__profile-img"
          variants={animateProfileImg}
          transition={{
            opacity: { ease: 'linear', duration: 0.35, delay: 0.35 },
            transform: { type: 'linear', duration: 0.45, delay: 0.35 },
          }}
        >
          <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/contact/profile.webp`}
            alt="profile image"
            placeholder="blur"
            sizes="(max-width: 460px) 90vw, (max-width: 768px) 60vw, (max-width: 1440px) 34rem, (min-width: 1441px) 38rem"
          />
        </ProfileImgContainer>
        <Contact.Text.Container className="Contact__text-container">
          <Contact.Text.Blockquote
            className="Contact__blockquote"
            {...motionTextContainerOption}
            transition={{ duration: 0, delay: 0.1, staggerChildren: 0.01 }}
          >
            <MotionText text={`A genius cannot win over one who tries,`} transition={{ duration: 0.1 }} />
            <br />
            <MotionText text={`and one who tries cannot win one who enjoys.`} transition={{ duration: 0.1 }} />
          </Contact.Text.Blockquote>
          <Contact.Text.Desc
            className="Contact__desc"
            variants={animateEaseUpText}
            transition={animateEaseUpTextTransition}
          >
            즐기는 자를 이길 수 있는 사람은 없습니다. <br />
            저에게는 플랫폼을 만들고, 개발을 통해 문제를 해결하는 업무가 즐겁습니다. <br />
            그리고 좋아하는 일을 잘 해내고 싶은 욕심이 있습니다. <br />
            좋아하는 일을 즐기며 잘 해내는, 그런 <Contact.Text.Point>멋진 사람</Contact.Text.Point>이 되고 싶습니다.{' '}
            <br /> <br />
            오늘보다 내일 더 멋진 사람이 되도록 노력하는,
            <br />
            UI 개발자 <Contact.Text.Point>박예림</Contact.Text.Point>
            입니다.
            <br />
            포트폴리오를 봐주셔서 감사합니다 :&#41;
          </Contact.Text.Desc>
          <Contact.Button.Container className="Contact__button-wrap">
            {linkData.map((el, idx) => {
              return (
                <Contact.Button.Item
                  href={el.link}
                  key={el.text}
                  className="Contact__button"
                  $bgColor="secondaryBlue"
                  variants={animateSpringButton}
                  initial="initial"
                  whileInView={{ ...animateSpringButton.active, transition: { delay: 0.2 * (idx + 1) } }}
                  whileHover="hover"
                  whileTap="hover"
                  title={el.title}
                >
                  <FontAwesomeIcon icon={el.icon} />
                  {el.text}
                </Contact.Button.Item>
              );
            })}
          </Contact.Button.Container>
        </Contact.Text.Container>
      </Contact.Container>
    </Contact.Page>
  );
};

export default ContactView;
