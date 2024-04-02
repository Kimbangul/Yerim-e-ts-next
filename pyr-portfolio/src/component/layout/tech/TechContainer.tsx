import TechView from '@/component/layout/tech/TechView';
import { techList } from '@/util/data';

const TechContainer = () => {
  return <TechView list={techList} />;
};

export default TechContainer;
