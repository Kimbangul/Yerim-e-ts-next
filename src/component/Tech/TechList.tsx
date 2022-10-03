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

// COMPONENT tech tag
const TechTag = styled.li`
  padding: 0.6rem 1.2rem;
  color: ${({ theme }) => theme.color.f_bodyColor_3};
  background: ${({ theme }) => theme.color.secondaryDark};
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  border-radius: 10rem;
`;

// COMPONENT tech list
const TechList: React.FC<TechListProps> = ({ techName }) => {
  return (
    <li className='Tech__tech-list-category'>
      <h4 className='Tech__tech-list-category-name'>{techName.title}</h4>
      <ul className='Tech__tech-list'>
        {techName.content.map((el: string, idx: number) => {
          return (
            <li className='Tech__tech-list-item' key={`desc${idx}`}>
              {el}
            </li>
          );
        })}
      </ul>
      <ul className='Tech__tech-tag-list'>
        {techName.tag.map((el: string) => {
          return <TechTag key={el}>{el}</TechTag>;
        })}
      </ul>
    </li>
  );
};

export default TechList;
