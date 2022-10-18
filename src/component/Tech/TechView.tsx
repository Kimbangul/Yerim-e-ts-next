import styled from 'styled-components';
import Image from 'next/image';
import {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
} from 'styles/Common';

import { techList } from 'src/data/data';

import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import TechList from 'src/component/Tech/TechListView';

import TECH_DESIGN from 'src/assets/image/tech/tech_design.jpg';

const TechView: React.FC = () => {
  return (
    <Tech.Page className='section'>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <Tech.Container className='Tech__container'>
        <Tech.Img.Container className='Tech__img-container'>
          <AutoHeightImageView
            src={TECH_DESIGN.src}
            alt=''
            placeholder='blur'
          />
        </Tech.Img.Container>
        <Tech.Text.Container className='Tech__text-container'>
          <Tech.Text.Title className='Tech__title'>Tech Stack</Tech.Text.Title>
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
    padding-top: 0;
    background-color: ${(props) => props.theme.color.secondBg};
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${TECH_DESIGN.src});
        background-repeat: no-repeat;
        filter: contrast(0.5) grayscale(1) brightness(0.55);
        background-position: center top;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    padding-top: 10.4rem;
    padding-bottom: 7.2rem;
    position: relative;
    z-index: 1;
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      padding-top: 32rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding-top: 34rem;
    }
  `,
  Img: {
    Container: styled.div`
      width: 100%;
      margin-top: 3.2rem;
      position: relative;
      filter: contrast(0.5) grayscale(1) brightness(0.55);
      border-radius: 0.4rem;
      overflow: hidden;
      transition: margin 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        display: none;
      }
    `,
  },
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.text_head};
      transform: translateY(-50%);
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.md};
      }
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

export default TechView;
