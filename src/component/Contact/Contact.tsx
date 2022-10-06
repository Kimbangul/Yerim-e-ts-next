import Image from 'next/image';
import styled from 'styled-components';

import {
  Container,
  SectionCategoryTitle,
  Button,
  ProfileImgContainer,
} from 'styles/Common';

import PROFILE from 'src/assets/image/contact/profile.jpg';

const Contact: React.FC = () => {
  return (
    <ContactContainer className='section'>
      <SectionCategoryTitle>Contact</SectionCategoryTitle>
      <div className='Contact__container'>
        <ProfileImgContainer>
          <Image
            src={PROFILE.src}
            alt='profile image'
            layout='fill'
            objectFit='cover'
          />
        </ProfileImgContainer>
        <div className='Contact__text-container'>
          <blockquote className='Contact__blockquote'>
            A genius cannot win over one who tries, <br />
            and one who tries cannot win one who enjoys.
          </blockquote>
          <p className='Contact__desc'>
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
          </p>
          <div className='Contact__button-wrap'>
            <Button className='Contact__button' bgColor='secondaryBlue'>
              Mail
            </Button>
            <Button className='Contact__button' bgColor='secondaryBlue'>
              Tel
            </Button>
            <Button className='Contact__button' bgColor='secondaryBlue'>
              Github
            </Button>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

// COMPONENT style
const ContactContainer = styled(Container)`
  flex-direction: column;
  .Contact {
    &__container {
      width: ${({ theme }) => theme.maxWidth};
      display: flex;
      /* justify-content: space-between; */
      gap: 5.6rem;
    }
    &__text-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__blockquote {
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      color: ${({ theme }) => theme.color.f_bodyColor};
      font-weight: 600;
      margin-top: 2.4rem;
    }
    &__desc {
      font-size: ${({ theme }) => theme.fontSize.body.md};
      color: ${({ theme }) => theme.color.f_bodyColor_4};
      margin-top: 2.4rem;
    }
    &__button {
      margin-right: 1.6rem;
      &:last-child {
        margin-left: 0;
      }
      &-wrap {
        display: flex;
        margin-top: 4.8rem;
      }
    }
  }
`;

export default Contact;
