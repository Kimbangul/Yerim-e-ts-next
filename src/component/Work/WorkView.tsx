import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { workList } from 'src/data/data';

import {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
} from 'styles/Common';
import WorkList from 'src/component/Work/WorkList';
import WorkDesc from 'src/component/Work/WorkDesc';

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
        </Work.Text.Container>
        <Work.Content.Container className='Work__Content'>
          <WorkList setCurrentIdx={setCurrentIdx} />
          {/* <WorkDesc list={currentWorkList} /> */}
        </Work.Content.Container>
      </Work.Container>
    </Work.Page>
  );
};

// COMPONENT style
const Work = {
  Page: styled.div``,
  Container: styled.div``,
  Text: {
    Container: styled(MaxWidthContainer)`
      margin: 0 auto;
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      line-height: 1.5;
      font-weight: 300;
      color: ${({ theme }) => theme.color.text};
      margin-top: 2.4rem;
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
