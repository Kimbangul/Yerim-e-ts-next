import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import { WorkType } from '@/util/type';
import { GetListItemType } from '@/component/layout/work/type';
import getBase64 from '@/util/getBase64';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const newList = workList.map(el => {
  return { ...el, imgObj: <WithPlaceHolder src={el.thumb} alt={`${el.title} 이미지`} /> };
});

const WorkContainer = () => {
  return <WorkView work={newList} />;
};

export default WorkContainer;
