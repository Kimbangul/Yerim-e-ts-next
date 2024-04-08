import { MainVideo } from '@/component/layout/main/MainStyle';

const MainVideoView: React.FC = () => {
  const videoLink = `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/video/main_video.mp4`;

  return (
    <MainVideo.Container
      className="Main__MainVideo"
      playsInline={true}
      webkit-playsinline="true"
      id="video-bg"
      autoPlay={true}
      loop={true}
      muted={true}
      data-keepplaying
    >
      <source src={videoLink} type="video/mp4" />
    </MainVideo.Container>
  );
};

export default MainVideoView;