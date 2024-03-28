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
            안녕하세요, 프론트엔드 개발자 박예림입니다.<br />
            저는 멋진 디자인과 상호작용을 웹과 모바일 등의 플랫폼에 구현하고 <About.LineBreak.Pc />문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다.<br />
            기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, <About.LineBreak.Pc />그리고 개발을 통해 더 많은 사람들의 문제를 해결하는 것이 목표입니다. <br /><br />
            개발은 혼자 하는 일이 아니라고 생각하며 동료와의 의사소통과 협력에 가치를 두고 있습니다. <br />
            그리고 이를 통해 개개인의 합보다 더 큰 시너지를 만들 수 있다고 믿고 있습니다.<br />
            시너지를 만들 수 있도록, 항상 경청하고 열린 자세로 임하며 성장해나가는 <About.Text.Desc.Point className='About__desc--point'>flexible</About.Text.Desc.Point>한 사람이 되겠습니다.
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
  LineBreak: {
    Pc: styled.br`      
      /* FUNCTION tablet size */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
          display: none;
      }
    `,
    Mb: styled.br`
      display: none;
       /* FUNCTION tablet size */
       @media (${({ theme }) => theme.windowSize['lt-s']}) {
          display: block;
      }
    `
  }
};

export default AboutView;
