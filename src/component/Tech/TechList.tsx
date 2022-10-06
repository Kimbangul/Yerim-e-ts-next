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

// COMPONENT tech list
const TechList: React.FC<TechListProps> = ({ techName }) => {
  return (
    <TechListCategory className='Tech__tech-list-category'>
      <TechListTitle className='Tech__tech-list-category-name'>
        {techName.title}
      </TechListTitle>
      <div className='Tech__tech-list-contents'>
        <ul className='Tech__tech-list'>
          {techName.content.map((el: string, idx: number) => {
            return (
              <TechListItem className='Tech__tech-list-item' key={`desc${idx}`}>
                {el}
              </TechListItem>
            );
          })}
        </ul>
        <ul className='Tech__tech-tag-list'>
          {techName.tag.map((el: string) => {
            return <TechTag key={el}>#{el}</TechTag>;
          })}
        </ul>
      </div>
    </TechListCategory>
  );
};

// COMPONENT style
const TechListCategory = styled.li`
  flex-basis: 50%;
  .Tech__tech {
    &-list {
      margin-top: 1.6rem;
      line-height: 1.7;
      word-break: keep-all;
      &:first-child {
        margin-top: 0;
      }
      &-contents {
        margin-top: 1.6rem;
      }
    }
    &-tag-list {
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
  }
`;

const TechListTitle = styled.h4`
  width: 32rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.f_bodyColor_3};
  font-size: ${({ theme }) => theme.fontSize.head.sm};
  font-weight: 600;
`;

const TechListItem = styled.li`
  color: ${({ theme }) => theme.color.f_bodyColor_2};
  font-size: ${({ theme }) => theme.fontSize.body.rg};
  white-space: pre-line;
  margin-top: 0.8rem;
  &:first-child {
    margin-top: 0;
  }
`;

// COMPONENT tech tag
const TechTag = styled.li`
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.color.f_bodyColor_4};
  /* background: ${({ theme }) => theme.color.secondaryDark}; */
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  border: 0.1rem solid ${({ theme }) => theme.color.f_bodyColor_6};
  border-radius: 10rem;
`;

export default TechList;
