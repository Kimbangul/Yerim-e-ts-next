import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import {
  Container,
  SectionCategoryTitle,
  Button,
  ProfileImgContainer,
} from 'styles/Common';

import PROFILE from 'src/assets/image/about/profile.jpg';

const AboutView = () => {
  return (
    <About.Page className='section'>
      <SectionCategoryTitle>About me</SectionCategoryTitle>
      <About.Container className='About__container'>
        <ProfileImgContainer>
          <Image
            src={PROFILE.src}
            alt='profile image'
            layout='fill'
            objectFit='cover'
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
            안녕하세요, 웹 퍼블리셔 박예림입니다. <br />
            흥미로운 것은 오래 기억됩니다. 저는 사람들의 기억에 남는 웹을 만드는
            것이 목표입니다. <br />
            특히 CSS와 Javascript를 이용해 모션을 주고, 동적인 화면을 구사하는
            것에 관심이 많습니다. <br />
            보는 사람들에게 하여금 브랜드를 기억시키고 가치를 높이는 것이 제
            일이라고 생각합니다. <br /> <br />
            개발에도 관심이 많아, 프로그래밍 스터디에 꾸준히 참여하며 추후
            원활한
            <br />
            협업을 위한 발판을 마련중입니다. 웹 개발은 혼자 하는 일이 아닌 만큼
            <br />
            사람들 간의{' '}
            <About.Text.Desc.Point className='About__desc--point'>
              약속, 그리고 소통
            </About.Text.Desc.Point>
            이 중요하다고 생각합니다. <br />
            유연한 소통을 할 수 있도록, 항상 경청하고 열린 자세로 임하는{' '}
            <About.Text.Desc.Point className='About__desc--point'>
              flexible
            </About.Text.Desc.Point>
            한 사람이 되겠습니다.
          </About.Text.Desc.Text>
          <About.Button.Container className='About__button-wrap'>
            <About.Button.Button
              className='About__button'
              bgColor='secondaryBlue'
            >
              <Link href='https://meadow-touch-c48.notion.site/fefaf8401a0f489b8c3e111db4e263ba'>
                <a target='_blank' rel='noreferrer'>
                  이력서 보기
                </a>
              </Link>
            </About.Button.Button>
            <About.Button.Button
              className='About__button'
              bgColor='secondaryPurple'
            >
              이력서 보기
            </About.Button.Button>
          </About.Button.Container>
        </About.Text.Container>
      </About.Container>
    </About.Page>
  );
};

const About = {
  Page: styled(Container)``,
  Container: styled.div`
    width: ${({ theme }) => theme.maxWidth};
    display: flex;
    gap: 5.6rem;
  `,
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.f_headColor};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    Title: {
      Text: styled.h3`
        font-size: ${({ theme }) => theme.fontSize.head.xl};
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.pointPink};
        margin-top: 2.4rem;
      `,
      Light: styled.span`
        font-weight: 300;
      `,
    },
    Desc: {
      Text: styled.p`
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 1.5;
        font-weight: 300;
        color: ${({ theme }) => theme.color.textColor};
        margin-top: 2.4rem;
      `,
      Point: styled.span`
        color: ${({ theme }) => theme.color.pointPink};
      `,
    },
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
    `,
    Button: styled(Button)`
      margin-right: 1.6rem;
      &:last-child {
        margin-right: 0;
      }
    `,
  },
};

export default AboutView;
