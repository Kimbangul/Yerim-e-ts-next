'use client';

import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import { ModalContext } from '@/component/common/modal/ModalProvider';
import { Item } from '@/component/layout/design/DesignStyle';
import { DesignItemPropType } from '@/component/layout/design/type';

import { blurDataUrl } from '@/util/data';
import { useContext } from 'react';

const DesignItem: React.FC<DesignItemPropType> = ({ idx, title, link, detail, thumb, onMouseEnter, onMouseOut }) => {
  const { setIsOpenModal } = useContext(ModalContext);

  // FUNCTION 클릭 시 팝업 핸들러
  const onClickItem = (link: string | undefined, detail: string | undefined) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (link) {
      window.open(link);
    } else {
      setIsOpenModal(detail ? detail : false);
    }
  };

  return (
    <>
      <Item.Container $duration={idx}>
        <Item.Link href="#" onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} onClick={onClickItem(link, detail)}>
          <Item.Hover className="DesignListItem__title">{title}</Item.Hover>
          <AutoHeightImageView
            alt={title}
            src={thumb}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, (max-width: 1200px) 25vw, (min-width: 1201px) 240px"
          />
        </Item.Link>
      </Item.Container>
    </>
  );
};

export default DesignItem;
