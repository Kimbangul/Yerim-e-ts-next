import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { workList } from 'src/data/data';

import { Container, SectionCategoryTitle } from 'styles/Common';
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
          <Work.Text.Desc className='Work__desc'>작업물들</Work.Text.Desc>
        </Work.Text.Container>
        <WorkList setCurrentIdx={setCurrentIdx} />
        <Work.Desc.Container className='WorkListItem__desc-container'>
          <h4 className='WorkListItem__title'>{currentWorkList.title}</h4>
          <div className='WorkListItem__category'>
            {currentWorkList.category}
          </div>
          <ul className='WorkListItem__tag-list'>
            {currentWorkList.tag.map((el) => {
              return (
                <li className='WorkListItem__tag' key={`tag${el}`}>
                  {el}
                </li>
              );
            })}
          </ul>
          <p className='WorkListItem__desc'>{currentWorkList.desc}</p>
        </Work.Desc.Container>
      </Work.Container>
    </Work.Page>
  );
};

// COMPONENT style
const Work = {
  // Page: styled(Container)``,
  Page: styled.div``,
  Container: styled.div``,
  Text: {
    Container: styled.div`
      width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.pointPink};
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      line-height: 1.5;
      font-weight: 300;
      color: ${({ theme }) => theme.color.text};
      margin-top: 2.4rem;
    `,
  },
  Desc: {
    Container: styled.div`
      width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
    `,
  },
};

export default WorkView;
