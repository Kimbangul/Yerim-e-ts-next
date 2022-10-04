import styled, { css } from 'styled-components';
import { Container, SectionCategoryTitle, Button } from 'styles/Common';

const AboutContainer = styled(Container)`
  /* background: ${({ theme }) => theme.color.mainColor}; */
  .About {
    &__text-container {
      color: ${({ theme }) => theme.color.f_headColor};
    }
    &__title {
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      text-transform: uppercase;
      color: ${({ theme }) => theme.color.pointPink};
      &--light {
        font-weight: 300;
      }
    }
    &__desc {
      font-size: ${({ theme }) => theme.fontSize.body.md};
      line-height: 1.5;
      font-weight: 300;
      color: ${({ theme }) => theme.color.f_bodyColor};
      margin-top: 2.4rem;
      &--point {
        color: ${({ theme }) => theme.color.pointPink};
      }
    }
    &__button {
      margin-right: 1.6rem;
      &:last-child {
        margin-right: 0;
      }
      &-wrap {
        display: flex;
        margin-top: 4.8rem;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer className='section'>
      <SectionCategoryTitle>About me</SectionCategoryTitle>
      <div className='About__container'>
        <div className='About__text-container'>
          <h3 className='About__title'>
            <span className='About__title--light'>be</span> flexible.
          </h3>
          <p className='About__desc'>
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
            <span className='About__desc--point'>약속, 그리고 소통</span>이
            중요하다고 생각합니다. <br />
            유연한 소통을 할 수 있도록, 항상 경청하고 열린 자세로 임하는{' '}
            <span className='About__desc--point'>flexible</span>한 사람이
            되겠습니다.
          </p>
        </div>
        <div className='About__button-wrap'>
          <Button className='About__button' bgColor='secondaryBlue'>
            이력서 보기
          </Button>
          <Button className='About__button' bgColor='secondaryPurple'>
            이력서 보기
          </Button>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
