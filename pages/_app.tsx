import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import HeaderInfo from 'utils/HeaderInfo';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import FontStyle from 'styles/FontStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderInfo />
      <GlobalStyle />
      <FontStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
