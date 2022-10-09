import styled from 'styled-components';

import { Container, SectionCategoryTitle } from 'styles/Common';
import WorkList from 'src/component/Work/WorkList';
import WorkListItem from 'src/component/Work/WorkListItem';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const WorkView: React.FC = () => {
  return (
    <Work.Page className='section'>
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <Work.Container className='Work__container'>
        <Work.Text.Container className='Work__text-container'>
          <Work.Text.Title className='Work__title'>Work</Work.Text.Title>
          <Work.Text.Desc className='Work__desc'>작업물들</Work.Text.Desc>
        </Work.Text.Container>
        <WorkList />
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
};

export default WorkView;
