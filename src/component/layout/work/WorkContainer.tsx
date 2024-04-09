import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const newList = workList.map(el => {
  return { ...el, imgObj: <WithPlaceHolder src={el.thumb} alt={`${el.title} 이미지`} /> };
});

const WorkContainer = () => {
  return <WorkView list={newList} />;
};

export default WorkContainer;
