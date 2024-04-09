import MainView from '@/component/layout/main/MainView';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const MainContainer = async () => {
  const imgObj: { [key: string]: JSX.Element } = {
    moon: (
      <WithPlaceHolder src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`} alt="main image" />
    ),
  };

  return <MainView imgObj={imgObj} />;
};

export default MainContainer;
