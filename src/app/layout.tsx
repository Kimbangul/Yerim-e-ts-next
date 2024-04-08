import type { Viewport } from 'next';
import type { Metadata } from 'next';

import { Header, Footer } from '@/component/layout/index';
import StylesProvider from '@/styles/provider/StyleProvider';
import ReactClientProvider from '@/query/clientQueryProvider/ClientQueryProvider';
import ModalContextProvider from '@/component/common/modal/ModalProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <StylesProvider>
        <ReactClientProvider>
          <ModalContextProvider>
            <body>
              <Header />
              {children}
              <Footer />
            </body>
          </ModalContextProvider>
        </ReactClientProvider>
      </StylesProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'YERIM.e',
  description: '프론트엔드 개발자, 웹 퍼블리셔, 웹 개발자, UI 개발자 박예림 포트폴리오입니다.',
  keywords: ['프론트엔드 개발자, 프론트엔드 포트폴리오, 웹 퍼블리셔 포트폴리오, UI 개발자, 웹 퍼블리셔'],
  icons: {
    icon: {
      url: '/favicon.png',
    },
    shortcut: {
      url: '/favicon.png',
    },
  },
  verification: {
    google: 'YxlqZ71uNOrnU5b6IEnjMCb7CYtdr-LeWdgBl6WlY5o',
  },
  applicationName: 'YERIM.e',
  openGraph: {
    images: '/og-image.png',
    title: 'YERIM.e :: 박예림 - 프론트엔드 개발자 포트폴리오',
    type: 'website',
    description: '프론트엔드 개발자, 웹 퍼블리셔, 웹 개발자, UI 개발자 박예림 포트폴리오입니다.',
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
