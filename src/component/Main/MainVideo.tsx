const MainVideo: React.FC = () => {
  return (
    <video
      className='Main__video'
      playsInline={true}
      webkit-playsinline='true'
      id='video-bg'
      autoPlay={true}
      loop={true}
      muted={true}
      data-keepplaying
    >
      <source
        src='https://media.githubusercontent.com/media/kimbangul/yerim.e/master/img/smoke_bg2.mp4'
        type='video/mp4'
      />
    </video>
  );
};

export default MainVideo;
