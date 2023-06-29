import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';

import { ModalContext } from 'src/utils/ModalContext';
import Header from 'src/component/common/HeaderView';
import FullpageWrapper from 'src/component/common/FullpageWrapper';
import DesignModal from 'src/component/Design/DesignModal';
import useApiCall from 'utils/useApiCall';

// COMPONENT main component
const Home: NextPage = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  // const data = async () => {
  //   const res = await fetch('http://127.0.0.1:3000/api/crawler')
  //   // const data = await res;
  //   console.log(res.body);

  //   return data
  // }

  type VelogArticle = {
    headline: string;
    href: string;
    date: string;
    tags: string;
    context: string;
  };

  const postsCall = useApiCall<VelogArticle[]>(() =>
  axios.get('http://127.0.0.1:3000/api/crawler')
);

  
useEffect(()=>{
  console.log(postsCall);
}, [postsCall]);

  return (
    <>
      <Header />
      {/* <FullpageWrapper /> */}
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
