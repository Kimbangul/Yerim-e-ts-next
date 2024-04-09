import MainView from '@/component/layout/main/MainView';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const MainContainer = async () => {
  // const videoLink = await fetch(`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/video/main_video.mp4`);
  // console.log(videoLink);

  const imgObj: { [key: string]: JSX.Element } = {
    moon: (
      <WithPlaceHolder
        src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.webp`}
        alt="main image"
        sizes="(max-width: 480px) 90vw, (max-width: 768px) 700px, (min-width: 769px) 1000px"
      />
    ),
  };

  return <MainView imgObj={imgObj} />;
};

export default MainContainer;
