import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Container, SectionCategoryTitle } from 'styles/Common';

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

const DesignListItem = styled.li<{ duration: number }>`
  border-radius: 0.4rem;
  cursor: pointer;
  flex-basis: calc(20% - 3.2rem);
  &:hover {
    img {
      transform: scale(1.12);
      filter: saturate(1);
    }
  }

  a {
    width: 18rem;
    height: 18rem;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    img {
      border-radius: 0.8rem;
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0);
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
            return (
              <DesignListItem key={`design${idx}`} duration={idx}>
                <a
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    return;
                  }}
                >
                  <Image
                    alt={'design'}
                    layout='fill'
                    objectFit='cover'
                    src={require(`src/assets/image/design/design0${
                      idx + 1
                    }.png`)}
                  />
                </a>
              </DesignListItem>
            );
          })}
        </ul>
        <p className='Design__desc'>저의 작업물들을 만나보세요!</p>
      </div>
    </DesignContainer>
  );
};

export default Design;
