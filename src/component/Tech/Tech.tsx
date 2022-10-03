import styled from 'styled-components';
import { Container, SectionCategoryTitle } from 'styles/Common';

import { techList } from 'src/data/data';

import TechList from 'src/component/Tech/TechList';

const TechContainer = styled(Container)`
  background: ${({ theme }) => theme.color.mainColor};
  .Tech {
    &__container {
      display: flex;
    }
    &__text-container {
      color: ${({ theme }) => theme.color.f_headColor};
    }
    &__tech-list-container {
      margin-left: 4.8rem;
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

const Tech: React.FC = () => {
  return (
    <TechContainer className='section'>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <div className='Tech__container'>
        <div className='Tech__text-container'>
          <h3 className='Tech__title'>Tech Stack</h3>
          <p className='Tech__desc'>저는 이런 것 들을 할 수 있어요!</p>
        </div>
        <ul className='Tech__tech-list-container'>
          <TechList techName={techList.design} />
          <TechList techName={techList.develop} />
        </ul>
      </div>
    </TechContainer>
  );
};

export default Tech;
