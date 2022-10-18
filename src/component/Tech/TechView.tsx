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
          <Tech.Text.Title className='Tech__title'>
            <Tech.Text.Word className='Tech__title-word'>T</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>e</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>c</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>h</Tech.Text.Word>{' '}
            <Tech.Text.Word className='Tech__title-word'>S</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>t</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>a</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>c</Tech.Text.Word>
            <Tech.Text.Word className='Tech__title-word'>k</Tech.Text.Word>
            {/* Tech Stack */}
          </Tech.Text.Title>
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
    transition: opacity 0.3s;
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
        opacity: 0;
        transition: opacity 0.3s;
        @media (${({ theme }) => theme.windowSize['mb-m']}) {
          opacity: 1;
        }
      }
    }
    /* FUNCTION section animation */
    &.active {
      &::after {
        opacity: 1;
        transition: opacity 0.3s 0.3s;
      }
      .Tech__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    padding-top: 10.4rem;
    padding-bottom: 7.2rem;
    position: relative;
    z-index: 1;
    transition: margin 0.3s, opacity 0.3s;
    opacity: 0;
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      padding-top: 32rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding-top: 34rem;
      opacity: 1;
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
    Word: styled.span`
      @keyframes titleWordAni {
        0% {
          top: 0;
        }
        20% {
          top: -0.4rem;
        }
        40% {
          top: 0;
        }
        60% {
          top: 0;
        }
        80% {
          top: 0;
        }
        100% {
          top: 0;
        }
      }
      position: relative;
      animation: titleWordAni 3s infinite;
      &:nth-of-type(1) {
        animation-delay: 0.3s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.6s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.9s;
      }
      &:nth-of-type(4) {
        animation-delay: 1.2s;
      }
      &:nth-of-type(5) {
        animation-delay: 1.5s;
      }
      &:nth-of-type(6) {
        animation-delay: 1.8s;
      }
      &:nth-of-type(7) {
        animation-delay: 2.1s;
      }
      &:nth-of-type(8) {
        animation-delay: 2.4s;
      }
      &:nth-of-type(9) {
        animation-delay: 2.7s;
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
