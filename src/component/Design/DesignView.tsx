import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Container, SectionCategoryTitle } from 'styles/Common';
import DesignListItem from 'src/component/Design/DesignListItem';

const DesignView: React.FC = () => {
  return (
    <Design.Page className='section'>
      <SectionCategoryTitle>Design</SectionCategoryTitle>
      <Design.Container className='Design__container'>
        <Design.List className='Design__list'>
          {[...Array(10)].map((el, idx) => {
            return <DesignListItem key={`design${idx}`} idx={idx} />;
          })}
        </Design.List>
        <Design.Desc className='Design__desc'>
          저의 작업물들을 만나보세요!
        </Design.Desc>
      </Design.Container>
    </Design.Page>
  );
};

const Design = {
  Page: styled(Container)``,
  Container: styled.div`
    width: ${({ theme }) => theme.maxWidth};
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4.8rem 1.6rem;
    justify-content: center;
  `,
  Desc: styled.p`
    text-align: center;
    color: ${({ theme }) => theme.color.text_2};
    font-size: ${({ theme }) => theme.fontSize.head.xs};
    margin-top: 5.6rem;
  `,
};

export default DesignView;
