import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import HeaderInfo from 'utils/HeaderInfo';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'src/component/common/Header';
import Main from 'src/component/common/Main';

const Home: NextPage = () => {
  return (
    <>
      <HeaderInfo />
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Home;
