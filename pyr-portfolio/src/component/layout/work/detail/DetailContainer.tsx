import DetailView from '@/component/layout/work/detail/DetailView';
import { workList } from '@/util/data';
import { DetailType } from '@/component/layout/work/detail/type';

const getWorkData = () => {
  console.log(typeof window);
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  const pathArr = url.pathname.split('/');
  const workId = pathArr[pathArr.length - 1];

  return workList.filter(({ id }) => workId === id.toString())[0];
};

const DetailContainer = ({ data }: DetailType) => {
  return <DetailView data={data} />;
};

export default DetailContainer;
