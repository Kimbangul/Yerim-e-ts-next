import { useState } from 'react';
import styled, { css } from 'styled-components';

import { designList } from 'src/data/data';
import { Container, SectionCategoryTitle } from 'styles/Common';
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
      overflow-x: visible;
      overflow-y: visible;
    }
  `,
  Container: styled.div`
    width: ${({ theme }) => theme.maxWidth};
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4.8rem 1.6rem;
    justify-content: center;
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
      color: ${({ theme }) => theme.color.text_4};
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      position: absolute;
      margin-top: 0.4rem;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    `,
  },
};

export default DesignView;
