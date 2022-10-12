import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { blurDataUrl, link } from 'src/data/data';
import { onClickLinkBtn } from 'utils/utils';
import {
  Container,
  SectionCategoryTitle,
  Button,
  ProfileImgContainer,
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
        <ProfileImgContainer>
          <Image
            src={PROFILE.src}
            alt='profile image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </ProfileImgContainer>
        <Contact.Text.Container className='Contact__text-container'>
          <Contact.Text.Blockquote className='Contact__blockquote'>
            A genius cannot win over one who tries, <br />
            and one who tries cannot win one who enjoys.
          </Contact.Text.Blockquote>
          <Contact.Text.Desc className='Contact__desc'>
            즐기는 자를 이길 수 있는 사람은 없습니다. <br />
            저에게는 퍼블리싱 업무가 즐거운 일입니다. 그리고 좋아하는 일을 잘
            해내고 싶은 욕심이 있습니다. <br />
            좋아하는 일을 즐기며 잘 해내는, 그런 멋진 사람이 되고 싶습니다.{' '}
            <br /> <br />
            오늘보다 내일 더 멋진 사람이 되도록 노력하는,
            <br />
            웹 퍼블리셔 박예림입니다.
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
  `,
  Container: styled.div`
    width: ${({ theme }) => theme.maxWidth};
    display: flex;
    gap: 5.6rem;
  `,
  Text: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    Blockquote: styled.blockquote`
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      color: ${({ theme }) => theme.color.f_headColor};
      font-weight: 600;
      margin-top: 2.4rem;
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      color: ${({ theme }) => theme.color.text_4};
      margin-top: 2.4rem;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
    `,
    Item: styled(Button)`
      margin-right: 1.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      svg {
        width: ${({ theme }) => theme.fontSize.head.xs};
        /* margin-left: calc(${({ theme }) => theme.fontSize.head.sm} / -2); */
      }
      &:last-child {
        margin-left: 0;
      }
    `,
  },
};

export default ContactView;
