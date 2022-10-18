import { useContext } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { ModalContext } from 'src/utils/ModalContext';
import Header from 'src/component/common/HeaderView';
import FullpageWrapper from 'src/component/common/FullpageWrapper';
import DesignModal from 'src/component/Design/DesignModal';

// COMPONENT main component
const Home: NextPage = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);
  return (
    <>
      <Header />
      <FullpageWrapper />
      {isOpenModal && (
        <DesignModal
          modalImg={isOpenModal}
          handleCloseModal={() => {
            setIsOpenModal(false);
            return;
          }}
        />
      )}
    </>
  );
};

// COMPONENT style
const ParticleContainer = styled.div`
  width: 100%;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  .ParticleContainer__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export default Home;
