import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';
import DetailView from '@/component/layout/work/detail/DetailView';
import { DetailType } from '@/component/layout/work/detail/type';

const DetailContainer = ({ data }: DetailType) => {
  const imgObj = {
    thumb: <WithPlaceHolder src={data?.thumb || ''} alt={data?.title || ''} priority loading="eager" />,
  };

  return <DetailView data={data} imgObj={imgObj} />;
};

export default DetailContainer;
