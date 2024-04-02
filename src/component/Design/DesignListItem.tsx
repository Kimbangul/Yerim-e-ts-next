import { useContext } from 'react';
import styled from 'styled-components';

import { ModalContext } from 'src/utils/ModalContext';

import { blurDataUrl } from 'src/data/data';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

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
  // // PARAM state
  const { setIsOpenModal } = useContext(ModalContext);

  // FUNCTION 클릭 시 팝업 핸들러
  const onClickItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.link) {
      window.open(props.link);
    } else {
      setIsOpenModal(props.detail ? props.detail : false);
    }
    return;
  };

  return (
    <>
      <Item.Container $duration={props.idx}>
        <Item.Link
          href='#'
          onMouseEnter={props.onMouseEnter}
          onMouseOut={props.onMouseOut}
          onClick={(e) => {
            onClickItem(e);
          }}
        >
          <Item.Hover className='DesignListItem__title'>{props.title}</Item.Hover>
          <AutoHeightImageView alt={props.title} src={props.thumb} placeholder='blur' blurDataURL={blurDataUrl} />
        </Item.Link>
      </Item.Container>
    </>
  );
};

// COMPONENT style
const Item = {
  Container: styled.li<{ $duration: number }>`
    width: 100%;
    border-radius: 0.4rem;
    cursor: pointer;
    flex-basis: calc(20% - 3.2rem);
    .DesignListItem__title {
      opacity: 0;
    }
    &:hover {
      img {
        transform: scale(1.12);
        filter: saturate(1);
      }
    }
  `,
  Hover: styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    z-index: 3;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.text};
    padding: 2.4rem;
    text-align: center;
    pointer-events: none;
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
