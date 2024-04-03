'use client';

import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import { Item } from '@/component/layout/design/DesignStyle';
import { DesignItemPropType } from '@/component/layout/design/type';

import { blurDataUrl } from '@/util/data';

// FUNCTION 클릭 시 팝업 핸들러
const onClickItem = (link: string | undefined, detail: string | undefined) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  if (link) {
    window.open(link);
  } else {
    // setIsOpenModal(detail ? detail : false);
  }
};

const DesignItem: React.FC<DesignItemPropType> = ({ idx, title, link, detail, thumb, onMouseEnter, onMouseOut }) => {
  return (
    <>
      <Item.Container $duration={idx}>
        <Item.Link href="#" onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} onClick={onClickItem(link, detail)}>
          <Item.Hover className="DesignListItem__title">{title}</Item.Hover>
          <AutoHeightImageView alt={title} src={thumb} placeholder="blur" blurDataURL={blurDataUrl} />
        </Item.Link>
      </Item.Container>
    </>
  );
};

export default DesignItem;
