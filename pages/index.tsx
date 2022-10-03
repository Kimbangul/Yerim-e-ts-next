import type { NextPage } from 'next';

import Header from 'src/component/common/Header';
import FullpageWrapper from 'src/component/common/FullpageWrapper';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FullpageWrapper />
    </>
  );
};

export default Home;
