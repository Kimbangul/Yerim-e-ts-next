import styled from 'styled-components';

import { link } from 'src/data/data';
import { onClickLinkBtn } from 'utils/utils';
import {
  Container,
  SectionCategoryTitle,
  Button,
  ProfileImgContainer,
  MaxWidthContainer,
} from 'styles/Common';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

import PROFILE from 'public/image/about/profile.jpg';

const AboutView = () => {
  return (
    <About.Page className='section'>
      <SectionCategoryTitle>About me</SectionCategoryTitle>
      <About.Container className='About__container'>
        <ProfileImgContainer className='About__profile-img'>
          <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/about/profile.jpg`}
            alt='profile image'
            placeholder='blur'
          />
        </ProfileImgContainer>
        <About.Text.Container className='About__text-container'>
          <About.Text.Title.Text className='About__title'>
            <About.Text.Title.Light className='About__title--light'>
              be
            </About.Text.Title.Light>{' '}
            flexible.
          </About.Text.Title.Text>
          <About.Text.Desc.Text className='About__desc'>
            안녕하세요, 웹 UI 개발자 박예림입니다. <br />
            흥미로운 것은 오래 기억됩니다. 저는 사람들의 기억에 남는 웹을 만드는
            것이 목표입니다. <br />
            CSS와 Javascript를 이용해 모션을 주고 동적인 화면을 구사하는 것에
            관심이 많으며, <br />
            협업과 유지보수에 좋은 코드를 짜기 위해 꾸준히 공부하고 있습니다.
            <br />
            이용자에게 멋진 사용자 경험을 제공하고, 웹을 통해 상품이나 브랜드의
            가치를 높이는 것이 제 일이라고 생각합니다. <br /> <br />웹 개발은
            혼자 하는 일이 아닌 만큼 사람들 간의{' '}
            <About.Text.Desc.Point className='About__desc--point'>
              약속, 그리고 소통
            </About.Text.Desc.Point>
            이 중요하다고 생각합니다. <br />
            유연한 소통을 할 수 있도록, 항상 경청하고 열린 자세로 임하며 성장해
            나가는{' '}
            <About.Text.Desc.Point className='About__desc--point'>
              flexible
            </About.Text.Desc.Point>
            한 사람이 되겠습니다.
          </About.Text.Desc.Text>
          <About.Button.Container className='About__button-wrap'>
            <About.Button.Button
              className='About__button'
              bgColor='secondaryBlue'
              onClick={onClickLinkBtn.bind(this, link.resume, '_blank')}
            >
              이력 & 경력 보기
            </About.Button.Button>
          </About.Button.Container>
        </About.Text.Container>
      </About.Container>
    </About.Page>
  );
};

const About = {
  Page: styled(Container)`
    .fp-overflow {
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        width: 100%;
      }
    }
    .About__profile-img {
      opacity: 0;
      transition: opacity 0.3s 0.3s;
    }
    /* FUNCTION section animation */
    &.active {
      .About__profile-img {
        opacity: 1;
      }
      .About__title {
        opacity: 1;
        transition: font-size 0.3s, margin 0.3s, opacity 0.3s 0.8s;
      }
      .About__desc {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 1.4s;
      }
      .About__button-wrap {
        opacity: 1;
        transition: opacity 0.3s 2s;
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
    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
      align-items: flex-start;
    }
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      gap: 0;
    }
  `,
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.text_head};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    `,
    Title: {
      Text: styled.h3`
        font-size: ${({ theme }) => theme.fontSize.head.xl};
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.text_head};
        opacity: 0;
        transition: font-size 0.3s, margin 0.3s, opacity 0.3s;

        /* FUNCTION mb */
        @media (${({ theme }) => theme.windowSize['mb-l']}) {
          margin-top: 3.2rem;
          font-size: ${({ theme }) => theme.fontSize.head.md};
        }
      `,
      Light: styled.span`
        font-weight: 300;
      `,
    },
    Desc: {
      Text: styled.p`
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 1.8;
        font-weight: 400;
        color: ${({ theme }) => theme.color.text_4};
        margin-top: 2.4rem;
        word-break: keep-all;
        opacity: 0;
        transition: font-size 0.3s, opacity 0.3s;
        @media (${(props) => props.theme.windowSize['mb-m']}) {
          font-size: ${({ theme }) => theme.fontSize.body.rg};
        }
      `,
      Point: styled.span`
        color: ${({ theme }) => theme.color.point};
        font-weight: 500;
      `,
    },
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
      gap: 1.6rem;
      opacity: 0;
      transition: opacity 0.3s;

      @media (${(props) => props.theme.windowSize['lt-s']}) {
        flex-direction: column;
      }
    `,
    Button: styled(Button)`
      @media (${(props) => props.theme.windowSize['lt-s']}) {
        margin-right: 0;
      }
    `,
  },
};

export default AboutView;
