import styled from 'styled-components';
import Image from 'next/image';
import { Container, SectionCategoryTitle } from 'styles/Common';

import { techList } from 'src/data/data';

import TechList from 'src/component/Tech/TechList';

import TECH_DESIGN from 'src/assets/image/tech/tech_design.jpg';

const Tech: React.FC = () => {
  return (
    <TechContainer className='section'>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <div className='Tech__container'>
        <div className='Tech__img-container'>
          <Image src={TECH_DESIGN.src} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className='Tech__text-container'>
          <h3 className='Tech__title'>Tech Stack</h3>
          {/* <p className='Tech__desc'>저는 이런 것 들을 할 수 있어요!</p> */}
        </div>

        <ul className='Tech__tech-list-container'>
          <TechList techName={techList.design} />
          <TechList techName={techList.develop} />
        </ul>
      </div>
    </TechContainer>
  );
};

const TechContainer = styled(Container)`
  padding: 0;
  /* background: ${({ theme }) => theme.color.mainColor}; */
  .Tech {
    &__container {
      padding: 10.4rem 0 7.2rem 0;
      width: ${({ theme }) => theme.maxWidth};
    }
    &__text-container {
      color: ${({ theme }) => theme.color.f_headColor};
      transform: translateY(-50%);
    }
    &__img-container {
      width: 100%;
      height: 24rem;
      margin-top: 3.2rem;
      position: relative;
      filter: contrast(0.5) grayscale(1) brightness(0.55);
      border-radius: 0.4rem;
      overflow: hidden;
    }
    &__tech-list-container {
      /* display: flex;
      align-items: flex-start;
      gap: 48px;
      flex: 1 0 0; */
      display: flex;
      flex-direction: column;
      gap: 8rem;
    }
    &__title {
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.f_bodyColor_3};
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

export default Tech;
