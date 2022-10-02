import type { NextPage } from 'next';

import Header from 'src/component/common/Header';
import Main from 'src/component/Main/Main';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
