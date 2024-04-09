'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/styles/provider/Registry';
import GlobalStyles from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import FontStyle from '@/styles/FontStyle';

export default function StylesProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <FontStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
