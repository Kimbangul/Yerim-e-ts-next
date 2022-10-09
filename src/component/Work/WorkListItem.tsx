import Image from 'next/image';
import styled from 'styled-components';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

type WorkListItemType = {
  thumb: string;
  title: string;
  desc: string;
  category: string;
  tag: string[];
};

const WorkListItem: React.FC<WorkListItemType> = (props) => {
  return (
    <Item.Container className='WorkListItem__container'>
      <AutoHeightImageView src={props.thumb} alt={props.title} />
    </Item.Container>
  );
};

const Item = {
  Container: styled.div`
    overflow: hidden;
    span {
      border-radius: 0.8rem;
      overflow: hidden;
    }
  `,
};

export default WorkListItem;
