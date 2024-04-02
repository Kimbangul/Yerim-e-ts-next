'use client';
import styled from 'styled-components';

export type TagType = {
  [key: string]: any;
  children: React.ReactNode;
};

// COMPONENT main component
const Tag: React.FC<TagType> = props => {
  return <TagItem>#{props.children}</TagItem>;
};

// COMPONENT style
const TagItem = styled.li`
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.color.point};
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  border: 0.2rem solid ${({ theme }) => theme.color.point40};
  border-radius: 10rem;
`;

export default Tag;
