import { useState } from 'react';
import styled from 'styled-components';

import { SectionCategoryTitle, MaxWidthContainer } from 'src/styles/Common';
import WorkList from 'src/component/Work/WorkList';

const WorkView: React.FC = () => {
  // PARAM state
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <Work.Page className='section'>
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <Work.Container className='Work__container'>
        <Work.Text.Container className='Work__text-container'>
          <Work.Text.Title className='Work__title'>
            {
              'Work'.split('').map((el,idx)=> 
              <Work.Text.Word key={el+idx}>{el}</Work.Text.Word>
              )
            }
          </Work.Text.Title>
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
    /* FUNCTION section animation */
    &.active {
      .Work__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled.div`
    opacity: 0;
    transition: opacity 0.3s;
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      opacity: 1;
    }
  `,
  Text: {
    Container: styled(MaxWidthContainer)`
      margin: 0 auto;
      color: ${({ theme }) => theme.color.text_head};
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
      animation: titleWordAni 1.8s infinite;
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
