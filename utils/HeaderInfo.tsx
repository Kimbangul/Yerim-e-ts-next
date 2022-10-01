import Head from 'next/head';

const HeaderInfo = () => {
  return (
    <Head>
      <title>YERIM.e</title>
      <meta charSet='UTF-8' />
      <meta property='og:url' content='https://yerim-e.com/' />
      <meta property='og:title' content='YERIM.e' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://yerim-e.com/img/title-image.png'
      />
      <meta
        property='og:description'
        content='박예림 개인 포트폴리오 사이트입니다.'
      />
      <link rel='shortcut icon' href='icon.png' type='image/x-icon' />
      <link rel='icon' href='icon.png' type='image/x-icon' />
    </Head>
  );
};

export default HeaderInfo;
