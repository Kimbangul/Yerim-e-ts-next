import MainView from '@/component/layout/main/MainView';
import { imgObjType } from '@/component/layout/main/type';

const charJson = require('/public/lottie/space2.json');
const lottieJson = require('/public/lottie/space.json');

const MainContainer = () => {
  const imgObj: imgObjType = {
    char: charJson,
    lottie: lottieJson,
  };

  return <MainView imgObj={imgObj} />;
};

export default MainContainer;
