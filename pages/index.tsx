import { useContext } from 'react';
import type { NextPage } from 'next';

import { ModalContext } from 'src/utils/ModalContext';
import Header from 'src/component/common/HeaderView';
import FullpageWrapper from 'src/component/common/FullpageWrapper';
import DesignModal from 'src/component/Design/DesignModal';

// COMPONENT main component
const Home: NextPage = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  const data = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/crawler')
    const data = await res.json()
    console.log(data);

    return data
  }

  
  data();

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
