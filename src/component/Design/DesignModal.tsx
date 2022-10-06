import Image from 'next/image';
import { useRef } from 'react';

import styled from 'styled-components';
import { Container } from 'styles/Common';

// PARAM type
type DesignModalType = {
  srcNum: number;
  handleCloseModal: () => void;
};

const DesignModal: React.FC<DesignModalType> = (props) => {
  // PARAM ref
  const dimmerRef = useRef<HTMLDivElement>(null);

  // FUNCTION 모달 바깥 클릭 시 닫기
  const handleClickOutSide = (e: React.MouseEvent) => {
    if (e.target === dimmerRef.current) {
      props.handleCloseModal();
    }
    return;
  };

  return (
    <Modal
      className='Modal'
      ref={dimmerRef}
      onClick={(e) => {
        handleClickOutSide(e);
      }}
    >
      <div className='Modal__container'>
        <div className='Modal__inner'>
          <Image
            alt={'design detail'}
            layout='fill'
            width='100%'
            // height='auto'
            objectFit='cover'
            src={require(`src/assets/image/design/design0${props.srcNum}_2.png`)}
          />
        </div>
      </div>
    </Modal>
  );
};

// COMPONENT style
const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  .Modal {
    &__container {
      width: 100rem;
      height: 70vh;
      /* padding: 3.2rem; */
      background: #fff;
      overflow-y: auto;
      border-radius: 1.6rem;
    }
    &__inner {
      width: 100%;
      min-height: 100%;
      position: relative;
    }
  }
`;

export default DesignModal;
