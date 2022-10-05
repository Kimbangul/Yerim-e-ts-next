import Image from 'next/image';
import { useRef } from 'react';

import styled from 'styled-components';
import { Container } from 'styles/Common';

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  .Modal {
    &__container {
      width: 60rem;
      height: 70rem;
      position: relative;
      /* position: absolute; */
      background: #fff;
    }
  }
`;

// PARAM type
type DesignModalType = {
  srcNum: number;
  handleCloseModal: () => void;
};

const DesignModal: React.FC<DesignModalType> = (props) => {
  // PARAM ref
  const containerRef = useRef<HTMLDivElement>(null);

  // FUNCTION 모달 바깥 클릭 시 닫기
  const handleClickOutSide = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      props.handleCloseModal();
    }
    return;
  };

  return (
    <Modal
      ref={containerRef}
      onClick={(e) => {
        handleClickOutSide(e);
      }}
    >
      <div className='Modal__container'>
        <Image
          alt={'design detail'}
          layout='fill'
          objectFit='cover'
          src={require(`src/assets/image/design/design0${props.srcNum}_2.png`)}
        />
      </div>
    </Modal>
  );
};

export default DesignModal;
