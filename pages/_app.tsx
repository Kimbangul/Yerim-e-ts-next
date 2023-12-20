import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// import { Analytics } from '@vercel/analytics/react';

import HeaderInfo from 'utils/HeaderInfo';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import FontStyle from 'styles/FontStyle';

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
