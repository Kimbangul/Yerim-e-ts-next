import styled from 'styled-components';
import Image from 'next/image';
import {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
} from 'styles/Common';

import { techList, blurDataUrl } from 'src/data/data';

import TechList from 'src/component/Tech/TechListView';

import TECH_DESIGN from 'src/assets/image/tech/tech_design.jpg';

const TechView: React.FC = () => {
  return (
    <Tech.Page className='section'>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <Tech.Container className='Tech__container'>
        <Tech.Img.Container className='Tech__img-container'>
          <Image
            src={TECH_DESIGN.src}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={blurDataUrl}
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
    /* padding: 0; */
    padding-top: 0;
  `,
  Container: styled(MaxWidthContainer)`
    padding-top: 10.4rem;
    padding-bottom: 7.2rem;
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
      color: ${({ theme }) => theme.color.f_headColor};
      /* color: ${({ theme }) => theme.color.text_3}; */
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
