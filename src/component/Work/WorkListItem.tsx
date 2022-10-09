import Image from 'next/image';
import styled from 'styled-components';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import WORK04 from 'src/assets/image/work/work04.jpg';

type WorkListItemType = {
  thumb: string;
  title: string;
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
    border-radius: 0.8rem;
    overflow: hidden;
  `,
};

export default WorkListItem;
