import styled from 'styled-components';

import Tag from 'src/component/common/Tag';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import { onClickLinkBtn } from 'utils/utils';
import { Container, MaxWidthContainer, Button } from 'styles/Common';
import { workList, WorkType, blurDataUrl } from 'src/data/data';

// PARAM type
type DetailType = {
  data: WorkType;
};

// COMPONENT main component
const DetailView: React.FC<DetailType> = ({ data }) => {
  // FUNCTION get image url
  const getImageUrl = () => {
    const fileNameLength = data.id.toString().length;
    if (fileNameLength < 2) {
      return `image/work/work0${data.id}`;
    } else {
      return `image/work/work${data.id}`;
    }
  };
  console.log(getImageUrl());
  return (
    <Detail.Container as='article' className='Detail'>
      <Detail.Inner>
        <Detail.Image.Container className='Detail__image-container'>
          <AutoHeightImageView
            src={`image/work/work01.jpg`}
            alt={data.title}
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </Detail.Image.Container>
        <h2 className='Detail__title'>{data.title}</h2>
        <h3 className='Detail__category'>{data.category}</h3>
        <ul className='Detail__tag-list'>
          {data.tag.map((el) => {
            return (
              <Tag key={el} className='Detail__tag-item'>
                {el}
              </Tag>
            );
          })}
        </ul>
        <p className='Detail__desc'>{data.desc}</p>
        <div className='Detail__button-wrap'>
          {data.link ? (
            <Button onClick={onClickLinkBtn.bind(this, data.link, '_blank')}>
              사이트 바로가기
            </Button>
          ) : null}
          {data.github ? (
            <Button onClick={onClickLinkBtn.bind(this, data.github, '_blank')}>
              Github 바로가기
            </Button>
          ) : null}
        </div>
      </Detail.Inner>
    </Detail.Container>
  );
};

// COMPONENT style
const Detail = {
  Container: styled(Container)``,
  Inner: styled(MaxWidthContainer)``,
  Tag: {
    List: styled.ul`
      display: flex;
    `,
  },
  Image: {
    Container: styled.div`
      position: relative;
    `,
  },
};

export default DetailView;
