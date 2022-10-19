import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import { link } from 'src/data/data';
import { onClickLinkBtn } from 'utils/utils';
import {
  Container,
  SectionCategoryTitle,
  Button,
  ProfileImgContainer,
  MaxWidthContainer,
} from 'styles/Common';

import PROFILE from 'src/assets/image/contact/profile.jpg';

const ContactView: React.FC = () => {
  // PARAM link data
  const linkData = [
    {
      text: 'Mail',
      icon: faEnvelope,
      link: link.mail,
      linkOption: '_self',
    },
    {
      text: 'Tel',
      icon: faPhone,
      link: link.tel,
      linkOption: '_self',
    },
    {
      text: 'Github',
      icon: faGithub,
      link: link.github,
      linkOption: '_blank',
    },
  ];

  return (
    <Contact.Page className='section'>
      <SectionCategoryTitle>Contact</SectionCategoryTitle>
      <Contact.Container className='Contact__container'>
        <ProfileImgContainer className='Contact__profile-img'>
          <AutoHeightImageView
            src={PROFILE.src}
            alt='profile image'
            placeholder='blur'
          />
        </ProfileImgContainer>
        <Contact.Text.Container className='Contact__text-container'>
          <Contact.Text.Blockquote className='Contact__blockquote'>
            A genius cannot win over one who tries, <br />
            and one who tries cannot win one who enjoys.
          </Contact.Text.Blockquote>
          <Contact.Text.Desc className='Contact__desc'>
            즐기는 자를 이길 수 있는 사람은 없습니다. <br />
            저에게는 웹을 만들어 나가는 업무가 즐거운 일입니다. 그리고 좋아하는
            일을 잘 해내고 싶은 욕심이 있습니다. <br />
            좋아하는 일을 즐기며 잘 해내는, 그런{' '}
            <Contact.Text.Point>멋진 사람</Contact.Text.Point>이 되고 싶습니다.{' '}
            <br /> <br />
            오늘보다 내일 더 멋진 사람이 되도록 노력하는,
            <br />웹 개발자 <Contact.Text.Point>박예림</Contact.Text.Point>
            입니다.
            <br />
            포트폴리오를 봐주셔서 감사합니다 :&#41;
          </Contact.Text.Desc>
          <Contact.Button.Container className='Contact__button-wrap'>
            {linkData.map((el) => {
              return (
                <Contact.Button.Item
                  key={el.text}
                  className='Contact__button'
                  bgColor='secondaryBlue'
                  onClick={onClickLinkBtn.bind(this, el.link, el.linkOption)}
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

// COMPONENT style
const Contact = {
  Page: styled(Container)`
    flex-direction: column;
    .Contact__profile-img {
      opacity: 0;
      transition: opacity 0.3s 0.3s;
    }
    /* FUNCTION pc */
    @media (${(props) => props.theme.windowSize['lt-s']}) {
      padding-bottom: 7.2rem;
    }
    .fp-overflow {
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        width: 100%;
      }
    }
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      .Contact__profile-img {
        display: none;
      }
    }

    /* FUNCTION section animation */
    &.active {
      .Contact__profile-img {
        opacity: 1;
      }
      .Contact__blockquote {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 0.8s;
      }
      .Contact__desc {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 1.4s;
      }
      .Contact__button {
        opacity: 1;
        &:nth-child(1) {
          transition: all 0.3s, opacity 0.3s 2s;
        }
        &:nth-child(2) {
          transition: all 0.3s, opacity 0.3s 2.2s;
        }
        &:nth-child(3) {
          transition: all 0.3s, opacity 0.3s 2.4s;
        }
      }
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        .Contact__blockquote {
          opacity: 1;
          transition: font-size 0.3s, opacity 0.3s 0.3s;
        }
        .Contact__desc {
          opacity: 1;
          transition: font-size 0.3s, opacity 0.3s 0.9s;
        }
        .Contact__button {
          opacity: 1;
          &:nth-child(1) {
            transition: all 0.3s, opacity 0.3s 1.2s;
          }
          &:nth-child(2) {
            transition: all 0.3s, opacity 0.3s 1.4s;
          }
          &:nth-child(3) {
            transition: all 0.3s, opacity 0.3s 1.6s;
          }
        }
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    display: flex;
    gap: 5.6rem;
    /* FUNCTION pc */
    @media (${({ theme }) => theme.windowSize['lt-m']}) {
      align-items: center;
    }
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  Text: {
    Container: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    Blockquote: styled.blockquote`
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      color: ${({ theme }) => theme.color.text_head};
      font-weight: 600;
      opacity: 0;
      transition: font-size 0.3s, opacity 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xs};
      }
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      color: ${({ theme }) => theme.color.text_4};
      margin-top: 2.4rem;
      word-break: keep-all;
      line-height: 1.8;
      opacity: 0;
      transition: font-size 0.3s, opacity 0.3s;
      /* FUNCTION mb */
      @media (${(props) => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
    `,
    Point: styled.span`
      color: ${({ theme }) => theme.color.point};
      font-weight: 500;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
      gap: 1.6rem;
      @media (${(props) => props.theme.windowSize['lt-s']}) {
        flex-direction: column;
      }
    `,
    Item: styled(Button)`
      display: flex;
      align-items: center;
      gap: 1.2rem;
      opacity: 0;
      transition: opacity 0.3s;
      svg {
        width: ${({ theme }) => theme.fontSize.head.xs};
        /* margin-left: calc(${({ theme }) => theme.fontSize.head.sm} / -2); */
      }
    `,
  },
};

export default ContactView;
