import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Container, SectionCategoryTitle } from 'styles/Common';
import DesignListItem from 'src/component/Design/DesignListItem';

const DesignContainer = styled(Container)`
  .Design {
    &__container {
      width: ${({ theme }) => theme.maxWidth};
    }
    &__list {
      @keyframes up-down-ani {
        0% {
          transform: translateY(0);
        }

        100% {
          transform: translateY(1rem);
        }
      }
      display: flex;
      flex-wrap: wrap;
      gap: 4.8rem 1.6rem;
      justify-content: center;
      animation: up-down-ani 1.7s ease-in-out 0s infinite alternate both;
    }
    &__desc {
      text-align: center;
      color: ${({ theme }) => theme.color.f_bodyColor};
      font-size: ${({ theme }) => theme.fontSize.body.md};
    }
  }
`;

const Design: React.FC = () => {
  return (
    <DesignContainer className='section'>
      <SectionCategoryTitle>Design</SectionCategoryTitle>
      <div className='Design__container'>
        <ul className='Design__list'>
          {[...Array(10)].map((el, idx) => {
            return <DesignListItem key={`design${idx}`} idx={idx} />;
          })}
        </ul>
        <p className='Design__desc'>저의 작업물들을 만나보세요!</p>
      </div>
    </DesignContainer>
  );
};

export default Design;
