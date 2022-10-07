import styled from 'styled-components';
import Image from 'next/image';
import { Container, SectionCategoryTitle } from 'styles/Common';

import { techList } from 'src/data/data';

import TechList from 'src/component/Tech/TechListView';

import TECH_DESIGN from 'src/assets/image/tech/tech_design.jpg';

const TechView: React.FC = () => {
  return (
    <Tech.Page className='section'>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <Tech.Container className='Tech__container'>
        <Tech.Img.Container className='Tech__img-container'>
          <Image src={TECH_DESIGN.src} alt='' layout='fill' objectFit='cover' />
        </Tech.Img.Container>
        <Tech.Text.Container className='Tech__text-container'>
          <Tech.Text.Title className='Tech__title'>Tech Stack</Tech.Text.Title>
          {/* <p className='Tech__desc'>저는 이런 것 들을 할 수 있어요!</p> */}
        </Tech.Text.Container>

        <Tech.List.Container className='Tech__tech-list-container'>
          <TechList techName={techList.design} />
          <TechList techName={techList.develop} />
        </Tech.List.Container>
      </Tech.Container>
    </Tech.Page>
  );
};

const Tech = {
  Page: styled(Container)`
    padding: 0;
  `,
  Container: styled.div`
    padding: 10.4rem 0 7.2rem 0;
    width: ${({ theme }) => theme.maxWidth};
  `,
  Img: {
    Container: styled.div`
      width: 100%;
      height: 24rem;
      margin-top: 3.2rem;
      position: relative;
      filter: contrast(0.5) grayscale(1) brightness(0.55);
      border-radius: 0.4rem;
      overflow: hidden;
    `,
  },
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.f_headColor};
      transform: translateY(-50%);
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.text_3};
    `,
  },
  List: {
    Container: styled.ul`
      display: flex;
      flex-direction: column;
      gap: 8rem;
    `,
  },
};
// const TechContainer = styled(Container)`
//   padding: 0;
//   /* background: ${({ theme }) => theme.color.mainColor}; */
//   .Tech {
//     &__container {
//       padding: 10.4rem 0 7.2rem 0;
//       width: ${({ theme }) => theme.maxWidth};
//     }
//     &__text-container {
//       color: ${({ theme }) => theme.color.f_headColor};
//       transform: translateY(-50%);
//     }
//     &__img-container {
//       width: 100%;
//       height: 24rem;
//       margin-top: 3.2rem;
//       position: relative;
//       filter: contrast(0.5) grayscale(1) brightness(0.55);
//       border-radius: 0.4rem;
//       overflow: hidden;
//     }
//     &__tech-list-container {
//       /* display: flex;
//       align-items: flex-start;
//       gap: 48px;
//       flex: 1 0 0; */
//       display: flex;
//       flex-direction: column;
//       gap: 8rem;
//     }
//     &__title {
//       font-size: ${({ theme }) => theme.fontSize.head.xl};
//       color: ${({ theme }) => theme.color.f_bodyColor_3};
//       &--light {
//         font-weight: 300;
//       }
//     }
//     &__desc {
//       font-size: ${({ theme }) => theme.fontSize.body.md};
//       line-height: 1.5;
//       font-weight: 300;
//       color: ${({ theme }) => theme.color.f_bodyColor};
//       margin-top: 2.4rem;
//       &--point {
//         color: ${({ theme }) => theme.color.pointPink};
//       }
//     }
//     &__button {
//       margin-right: 1.6rem;
//       &:last-child {
//         margin-right: 0;
//       }
//       &-wrap {
//         display: flex;
//         margin-top: 4.8rem;
//       }
//     }
//   }
// `;

export default TechView;
