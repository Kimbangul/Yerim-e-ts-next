import { useState } from 'react';
import styled, { css } from 'styled-components';

import { designList } from 'src/data/data';
import {
  Container,
  SectionCategoryTitle,
  MaxWidthContainer,
} from 'styles/Common';
import DesignListItem from 'src/component/Design/DesignListItem';

const DesignView: React.FC = () => {
  // PARAM state
  const [focusItem, setFocusItem] = useState('');

  // FUNCTION 아이템에 hover시 실행
  const onMouseEnterDesignItem = (title: string) => {
    setFocusItem(title);
    return;
  };
  const onMouseOutDesginItem = () => {
    setFocusItem('');
    return;
  };

  return (
    <Design.Page className='section'>
      <SectionCategoryTitle>Design</SectionCategoryTitle>
      <Design.Container className='Design__container'>
        <Design.List className='Design__list'>
          {[...Array(10)].map((el, idx) => {
            return (
              <DesignListItem
                key={`design${idx}`}
                idx={idx}
                title={designList[idx].title}
                thumb={designList[idx].thumb}
                detail={designList[idx].detail}
                link={designList[idx].link}
                onMouseEnter={onMouseEnterDesignItem.bind(
                  this,
                  designList[idx].title
                )}
                onMouseOut={onMouseOutDesginItem}
              />
            );
          })}
        </Design.List>
        <Design.Desc.Text className='Design__desc'>
          저의 작업물들을 만나보세요!
          {focusItem !== '' && (
            <Design.Desc.Title>{focusItem}</Design.Desc.Title>
          )}
        </Design.Desc.Text>
      </Design.Container>
    </Design.Page>
  );
};

const Design = {
  Page: styled(Container)`
    .fp-overflow {
      overflow-x: visible !important;
      overflow-y: visible !important;
      /* FUNCTION pc*/
      @media (max-width: 1150px) {
        width: 100%;
      }
    }
  `,
  Container: styled(MaxWidthContainer)``,
  List: styled.ul`
    width: 100%;
    display: flex;

    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5.6rem 2.4rem;
    transition: gap 0.3s;

    /* FUNCTION pc*/
    @media (max-width: 1150px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      gap: 0;
      grid-gap: 3.6rem 2.4rem;
    }
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      grid-template-columns: 1fr 1fr;
    }
    @media (${({ theme }) => theme.windowSize['mb-s']}) {
      grid-template-columns: 1fr;
    }
  `,
  Desc: {
    Text: styled.p`
      text-align: center;
      color: ${({ theme }) => theme.color.text_2};
      font-size: ${({ theme }) => theme.fontSize.head.xs};
      margin-top: 5.6rem;
      position: relative;
    `,
    Title: styled.span`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 300;
      color: ${({ theme }) => theme.color.text_4};
      position: absolute;
      margin-top: 0.8rem;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    `,
  },
};

export default DesignView;
