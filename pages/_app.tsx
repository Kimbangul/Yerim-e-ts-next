import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'styles/font.css';

import HeaderInfo from 'utils/HeaderInfo';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';

import ModalContextProvider from 'src/utils/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalContextProvider>
        <HeaderInfo />
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
