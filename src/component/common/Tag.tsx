import styled from 'styled-components';

type TagType = {
  [key: string]: any;
  children: React.ReactNode;
};

// COMPONENT main component
const Tag: React.FC<TagType> = (props) => {
  return <TagItem>#{props.children}</TagItem>;
};

// COMPONENT style
const TagItem = styled.li`
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.color.text_4};
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  border: 0.1rem solid ${({ theme }) => theme.color.text_6};
  border-radius: 10rem;
`;

export default Tag;
