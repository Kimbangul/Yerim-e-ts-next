import styled from 'styled-components';

// COMPONENT main component
const MainVideoView: React.FC = () => {
  const videoLink = `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/video/main_video.mp4`;

  return (
    <MainVideo.Container
      className='Main__MainVideo'
      playsInline={true}
      webkit-playsinline='true'
      id='video-bg'
      autoPlay={true}
      loop={true}
      muted={true}
      data-keepplaying
    >
      <source src={videoLink} type='video/mp4' />
    </MainVideo.Container>
  );
};

// COMPONENT style
const MainVideo = {
  Container: styled.video`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.34;
  `,
};

export default MainVideoView;
