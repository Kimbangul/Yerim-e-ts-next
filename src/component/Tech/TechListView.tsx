import styled from 'styled-components';

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
            return <TechList.Tag.Item key={el}>#{el}</TechList.Tag.Item>;
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
  `,
  Item: styled.li`
    color: ${({ theme }) => theme.color.text_2};
    font-size: ${({ theme }) => theme.fontSize.body.rg};
    white-space: pre-line;
    margin-top: 0.8rem;
    &:first-child {
      margin-top: 0;
    }
  `,
  Tag: {
    Item: styled.li`
      padding: 0.4rem 1.2rem;
      color: ${({ theme }) => theme.color.text_4};
      font-size: ${({ theme }) => theme.fontSize.body.sm};
      border: 0.1rem solid ${({ theme }) => theme.color.text_6};
      border-radius: 10rem;
    `,
    List: styled.ul`
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
    `,
  },
};

export default TechListView;
