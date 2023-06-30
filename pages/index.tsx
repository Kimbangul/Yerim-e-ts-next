import { useContext } from 'react';
import type { NextPage } from 'next';

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

export default Home;
