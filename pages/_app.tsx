import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// import { Analytics } from '@vercel/analytics/react';

import HeaderInfo from 'src/utils/HeaderInfo';
import Theme from 'src/styles/Theme';
import GlobalStyle from 'src/styles/GlobalStyle';
import FontStyle from 'src/styles/FontStyle';

import ModalContextProvider from 'src/utils/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Analytics/> */}
      <ModalContextProvider>
        <HeaderInfo />
        <GlobalStyle />
        <FontStyle />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
