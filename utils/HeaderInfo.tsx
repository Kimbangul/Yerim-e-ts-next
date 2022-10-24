import Head from 'next/head';

const HeaderInfo = () => {
  return (
    <Head>
      <title>YERIM.e</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='UTF-8' />
      <meta property='og:url' content='https://yerim-e.com/' />
      <meta property='og:title' content='YERIM.e' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://yerim-e.com/image/og-image.jpg'
      />
      <meta
        property='og:description'
        content='웹 퍼블리셔, 프론트엔드 개발자 박예림 포트폴리오입니다.'
      />
      <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      <link rel='icon' href='favicon.png' type='image/x-icon' />
    </Head>
  );
};

export default HeaderInfo;
