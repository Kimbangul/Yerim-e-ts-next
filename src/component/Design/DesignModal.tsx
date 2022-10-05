import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';

const Modal = styled.div`
  .Modal {
    &__container {
      width: 6rem;
      height: 7rem;
      position: absolute;
      background: #fff;
    }
  }
`;

// PARAM type
type DesignModalType = {
  srcNum: number;
};

const DesignModal: React.FC<DesignModalType> = (props) => {
  return (
    <Modal>
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
