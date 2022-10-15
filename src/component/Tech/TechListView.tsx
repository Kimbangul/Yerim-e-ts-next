import styled from 'styled-components';

import Tag from 'src/component/common/Tag';

// PARAM type
type TechTypeParams = {
  title: string;
  content: string[];
  tag: string[];
};
type TechListProps = {
  techName: TechTypeParams;
};

// COMPONENT main component
const TechListView: React.FC<TechListProps> = ({ techName }) => {
  return (
    <TechList.Category className='Tech__tech-list-category'>
      <TechList.Title className='Tech__tech-list-category-name'>
        {techName.title}
      </TechList.Title>
      <TechList.Contents.Container className='Tech__tech-list-contents'>
        <TechList.Contents.List className='Tech__tech-list'>
          {techName.content.map((el: string, idx: number) => {
            return (
              <TechList.Item
                className='Tech__tech-list-item'
                key={`desc${idx}`}
              >
                {el}
              </TechList.Item>
            );
          })}
        </TechList.Contents.List>
        <TechList.Tag.List className='Tech__tech-tag-list'>
          {techName.tag.map((el: string) => {
            return <Tag key={el}>{el}</Tag>;
          })}
        </TechList.Tag.List>
      </TechList.Contents.Container>
    </TechList.Category>
  );
};

// COMPONENT style
const TechList = {
  Category: styled.li`
    flex-basis: 50%;
  `,
  Contents: {
    Container: styled.div`
      margin-top: 1.6rem;
    `,
    List: styled.ul`
      margin-top: 1.6rem;
      line-height: 1.7;
      word-break: keep-all;
      &:first-child {
        margin-top: 0;
      }
    `,
  },
  Title: styled.h4`
    width: 32rem;
    color: ${({ theme }) => theme.color.text_3};
    font-size: ${({ theme }) => theme.fontSize.head.sm};
    font-weight: 600;
    transition: font-size 0.3s;

    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.head.xs};
    }
  `,
  Item: styled.li`
    font-size: ${({ theme }) => theme.fontSize.body.md};
    line-height: 2;
    font-weight: 300;
    color: ${({ theme }) => theme.color.text_4};
    white-space: pre-line;
    transition: font-size 0.3s;
    /* FUNCTION mb */
    @media (${(props) => props.theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.rg};
    }
    &:first-child {
      margin-top: 0;
    }
  `,
  Tag: {
    List: styled.ul`
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
    `,
  },
};

export default TechListView;
