import { useState } from 'react';

import Image from 'next/image';
import styled, { css } from 'styled-components';
import DesignModal from 'src/component/Design/DesignModal';
import JSXStyle from 'styled-jsx/style';

const Item = styled.li<{ duration: number }>`
  border-radius: 0.4rem;
  cursor: pointer;
  flex-basis: calc(20% - 3.2rem);
  &:hover {
    img {
      transform: scale(1.12);
      filter: saturate(1);
    }
  }

  a {
    width: 18rem;
    height: 18rem;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    img {
      border-radius: 0.8rem;
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0);
    }
  }
`;
// PARAM type
type DesignListItemProps = {
  idx: number;
};

const DesignListItem: React.FC<DesignListItemProps> = (props) => {
  // PARAM state
  const [isOpenModal, setIsOpenModal] = useState(false);

  // FUNCTION 클릭 시 팝업 핸들러
  const onClickItem = (e: React.MouseEvent<HTMLElement>, num: number) => {
    e.preventDefault();
    handleLink(num);
    return;
  };

  // FUNCTION detail handler
  const handleDetail = (num: number): JSX.Element | void => {
    switch (num) {
      case 4:
      case 9:
        return;
      default:
        return (
          <DesignModal
            srcNum={num}
            handleCloseModal={() => setIsOpenModal(false)}
          />
        );
    }
  };

  const handleLink = (num: number): string | void => {
    switch (num) {
      case 4:
        window.open('https://youtu.be/nIhcqw48Rc0');
        return;
      case 9:
        window.open(
          'https://www.husg.net/huge21/work/%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%eb%af%b8%eb%8b%88%ec%96%b4%ec%b2%98/'
        );
        return;
      default:
        setIsOpenModal(true);
        return;
    }
  };

  return (
    <>
      <Item duration={props.idx}>
        <a
          href='#'
          onClick={(e) => {
            onClickItem(e, props.idx + 1);
          }}
        >
          <Image
            alt={'design'}
            layout='fill'
            objectFit='cover'
            src={require(`src/assets/image/design/design0${props.idx + 1}.png`)}
          />
        </a>
      </Item>
      {isOpenModal && handleDetail(props.idx + 1)}
    </>
  );
};

export default DesignListItem;
