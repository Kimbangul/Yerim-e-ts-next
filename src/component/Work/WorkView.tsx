import { useState } from 'react';
import styled from 'styled-components';

import { workList } from 'src/data/data';

import { SectionCategoryTitle, MaxWidthContainer } from 'styles/Common';
import WorkList from 'src/component/Work/WorkList';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const WorkView: React.FC = () => {
  // PARAM state
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentWorkList = workList[currentIdx % (workList.length - 1)];

  return (
    <Work.Page className='section'>
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <Work.Container className='Work__container'>
        <Work.Text.Container className='Work__text-container'>
          <Work.Text.Title className='Work__title'>Work</Work.Text.Title>
          {/* <Work.Text.Desc className='Work__desc'>좌우로 슬라이드해서 제 작업물들을 살펴보세요.</Work.Text.Desc> */}
        </Work.Text.Container>
        <Work.Content.Container className='Work__Content'>
          <WorkList setCurrentIdx={setCurrentIdx} />
        </Work.Content.Container>
      </Work.Container>
    </Work.Page>
  );
};

// COMPONENT style
const Work = {
  Page: styled.section`
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      padding-top: 7.2rem;
      padding-bottom: 7.2rem;
    }
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      height: 6rem;
    }
  `,
  Container: styled.div``,
  Text: {
    Container: styled(MaxWidthContainer)`
      margin: 0 auto;
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.f_headColor};
      transition: font-size 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.md};
      }
    `,
  },
  Content: {
    Container: styled.div`
      display: flex;
      margin-top: 2.4rem;
    `,
  },
};

export default WorkView;
