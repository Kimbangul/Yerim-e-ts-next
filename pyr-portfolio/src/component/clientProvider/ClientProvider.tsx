'use client';
import { PropsWithChildren, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import FontStyle from '@/styles/FontStyle';
import theme from '@/styles/theme';

/** 클라이언트 환경에서 구동이 필요한 컴포넌트**/
const ReactClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default ReactClientProvider;
