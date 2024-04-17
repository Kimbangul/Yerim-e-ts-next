'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/styles/provider/Registry';
import GlobalStyles from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

export default function StylesProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
