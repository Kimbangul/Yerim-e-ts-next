import styled from 'styled-components';

import { WorkType } from 'src/data/data';
import Tag from 'src/component/common/Tag';

// PARAM type
type WorkDescType = {
  [key: string]: any;
  list: WorkType;
};
// COMPONENT main component
const WorkDesc: React.FC<WorkDescType> = (props) => {
  return (
    <Desc.Container className='WorkListItem__desc-container'>
      <Desc.Title className='WorkListItem__title'>
        {props.list.title}
      </Desc.Title>
      <Desc.Category className='WorkListItem__category'>
        {props.list.category}
      </Desc.Category>
      <Desc.TagList className='WorkListItem__tag-list'>
        {props.list.tag.map((el: string) => {
          return (
            <Tag className='WorkListItem__tag' key={`tag${el}`}>
              {el}
            </Tag>
          );
        })}
      </Desc.TagList>
      <Desc.Desc className='WorkListItem__desc'>{props.list.desc}</Desc.Desc>
    </Desc.Container>
  );
};

// COMPONENT style
const Desc = {
  Container: styled.div`
    /* width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); */
  `,
  Title: styled.h4`
    font-size: ${({ theme }) => theme.fontSize.head.rg};
    font-weight: 700;
    color: ${({ theme }) => theme.color.f_headColor};
  `,
  Category: styled.div`
    font-size: ${({ theme }) => theme.fontSize.body.lg};
    color: ${({ theme }) => theme.color.text_2};
  `,
  TagList: styled.ul`
    display: flex;
    margin-top: 2.4rem;
    flex-wrap: wrap;
    gap: 0.8rem;
  `,
  Desc: styled.p`
    margin-top: 2.4rem;
    font-size: ${({ theme }) => theme.fontSize.body.rg};
    color: ${({ theme }) => theme.color.text_4};
    line-height: 1.8;
  `,
};

export default WorkDesc;
