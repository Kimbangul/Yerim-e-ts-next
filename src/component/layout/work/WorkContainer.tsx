import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import WithPlaceHolder from '@/component/common/image/WithPlaceHolder';

const newList = workList.map(el => {
  return {
    ...el,
    imgObj: (
      <WithPlaceHolder
        src={el.thumb}
        alt={`${el.title} 이미지`}
        sizes="(max-width: 480px) 90vw, (max-width: 768px) 50vw, (min-width: 769px) 33vw"
      />
    ),
  };
});

const WorkContainer = () => {
  return <WorkView list={newList} />;
};

export default WorkContainer;
