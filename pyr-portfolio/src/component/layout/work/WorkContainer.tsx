import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';

const WorkContainer = () => {
  return <WorkView list={workList} />;
};

export default WorkContainer;
