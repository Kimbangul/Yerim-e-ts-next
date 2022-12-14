import { useRef } from 'react';

import styled from 'styled-components';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';

import CLOSE_24 from 'public/icon/close_24.svg';

// PARAM type
type DesignModalType = {
  modalImg: string | false;
  handleCloseModal: () => void;
};

const DesignModal: React.FC<DesignModalType> = (props) => {
  // PARAM dom
  const bodyDom = document.querySelector('body');
  // PARAM ref
  const dimmerRef = useRef<HTMLDivElement>(null);

  // FUNCTION 모달 열렸을 때 스크롤 방지
  const setBodyPreventScroll = () => {
    if (bodyDom) {
      bodyDom.style.overflow = 'hidden';
    }
    return;
  };
  setBodyPreventScroll();

  // FUNCTION 모달 바깥 클릭 시 닫기
  const handleClickOutSide = (e: React.MouseEvent) => {
    if (e.target === dimmerRef.current) {
      onClickCloseBtn();
    }
    return;
  };

  // FUNCTION 모달 닫기 버튼 눌렀을 때
  const onClickCloseBtn = () => {
    if (bodyDom) {
      bodyDom.style.overflow = 'visible';
    }
    props.handleCloseModal();
    return;
  };

  return (
    <Modal.Page
      className='Modal'
      ref={dimmerRef}
      onClick={(e) => {
        handleClickOutSide(e);
      }}
    >
      <Modal.Container className='Modal__container'>
        <Modal.Button.Close
          className='Modal__close-btn'
          onClick={onClickCloseBtn.bind(this)}
        >
          <CLOSE_24 />
        </Modal.Button.Close>
        <Modal.Inner className='Modal__inner'>
          <AutoHeightImageView
            alt={'design detail'}
            src={props.modalImg || ''}
          />
        </Modal.Inner>
      </Modal.Container>
    </Modal.Page>
  );
};

// COMPONENT style
const Modal = {
  Page: styled.div`
    @keyframes modalAni {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    transition: padding 0.3s;
    animation: modalAni 0.3s ease-in-out;

    /* FUNCTION pc */
    @media (${(props) => props.theme.windowSize['lt-s']}) {
      /* position: fixed; */
      padding: 0 6rem;
    }
    /* FUNCTION mb */
    @media (${(props) => props.theme.windowSize['mb-m']}) {
      padding: 0 3rem;
    }
    /* FUNCTION mb */
    @media (${(props) => props.theme.windowSize['mb-s']}) {
      padding: 0 2rem;
    }
  `,
  Container: styled.div`
    width: 100rem;
    height: 70vh;
    position: relative;
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
    overflow-y: auto;
    scrollbar-width: none;
    background: #fff;
    position: relative;
  `,
  Button: {
    Close: styled.div`
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: calc(100% + 0.8rem);
      right: 0;
    `,
  },
};

export default DesignModal;
