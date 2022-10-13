import { useState } from 'react';
import styled from 'styled-components';

import { blurDataUrl } from 'src/data/data';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import DesignModal from 'src/component/Design/DesignModal';

// PARAM type
type DesignListItemProps = {
  idx: number;
  thumb: string;
  detail?: string;
  link?: string;
  title: string;
  onMouseEnter: () => void;
  onMouseOut: () => void;
};

const DesignListItem: React.FC<DesignListItemProps> = (props) => {
  // PARAM state
  const [isOpenModal, setIsOpenModal] = useState(false);

  // FUNCTION 클릭 시 팝업 핸들러
  const onClickItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.link) {
      window.open(props.link);
    } else {
      setIsOpenModal(true);
    }
    return;
  };

  return (
    <>
      <Item.Container duration={props.idx}>
        <Item.Link
          href='#'
          onMouseEnter={props.onMouseEnter}
          onMouseOut={props.onMouseOut}
          onClick={(e) => {
            onClickItem(e);
          }}
        >
          <AutoHeightImageView
            alt={props.title}
            src={props.thumb}
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </Item.Link>
      </Item.Container>
      {isOpenModal && props.detail && (
        <DesignModal
          modalImg={props.detail && props.detail}
          handleCloseModal={() => setIsOpenModal(false)}
        />
      )}
    </>
  );
};

// COMPONENT style
const Item = {
  Container: styled.li<{ duration: number }>`
    width: 100%;
    border-radius: 0.4rem;
    cursor: pointer;
    flex-basis: calc(20% - 3.2rem);
    &:hover {
      img {
        transform: scale(1.12);
        filter: saturate(1);
      }
    }
  `,
  Link: styled.a`
    @keyframes up-down-ani {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(1rem);
      }
    }
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 0.8rem;
    box-shadow: 0rem 0rem 24rem rgba(0, 0, 0, 0.2);
    animation: up-down-ani 1.7s ease-in-out 0s infinite alternate both;

    img {
      border-radius: 0.8rem;
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0);
    }
  `,
};
export default DesignListItem;
