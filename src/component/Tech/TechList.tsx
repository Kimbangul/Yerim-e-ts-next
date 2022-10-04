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

const TechListCategory = styled.li`
  margin-top: 4.8rem;
  &:first-child {
    margin-top: 0;
  }
  .Tech__tech {
    &-list {
      margin-top: 1.6rem;
      line-height: 1.7;
    }
    &-tag-list {
      display: flex;
      margin-top: 1.6rem;
    }
  }
`;

const TechListTitle = styled.h4`
  color: ${({ theme }) => theme.color.f_bodyColor_3};
  font-size: ${({ theme }) => theme.fontSize.head.sm};
  font-weight: 600;
`;

const TechListItem = styled.li`
  color: ${({ theme }) => theme.color.f_bodyColor_2};
  font-size: ${({ theme }) => theme.fontSize.body.rg};
`;

// COMPONENT tech tag
const TechTag = styled.li`
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.color.f_bodyColor_3};
  background: ${({ theme }) => theme.color.secondaryDark};
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  border-radius: 10rem;
  margin-right: 0.8rem;
`;

// COMPONENT tech list
const TechList: React.FC<TechListProps> = ({ techName }) => {
  return (
    <TechListCategory className='Tech__tech-list-category'>
      <TechListTitle className='Tech__tech-list-category-name'>
        {techName.title}
      </TechListTitle>
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
          return <TechTag key={el}>{el}</TechTag>;
        })}
      </ul>
    </TechListCategory>
  );
};

export default TechList;
