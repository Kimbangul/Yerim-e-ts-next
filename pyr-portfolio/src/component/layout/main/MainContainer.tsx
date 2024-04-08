import MainView from '@/component/layout/main/MainView';
import getBase64 from '@/util/getBase64';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const MainContainer = () => {
  // const { base64, img } = await getBase64(`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`);
  // console.log(base64, img);

  // const imgObj: { [key: string]: JSX.Element } = {
  //   moon: (
  //     <WithPlaceHolder src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/main/moon.png`} alt="main image" />
  //   ),
  // };

  return <MainView />;
};

export default MainContainer;
