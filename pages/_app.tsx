import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// import '/public/fonts/font.css';

import HeaderInfo from 'utils/HeaderInfo';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import FontStyle from 'styles/FontStyle';

import ModalContextProvider from 'src/utils/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
