import DetailContainer from '@/component/layout/work/detail/DetailContainer';
import { DetailContainerPropType } from '@/component/layout/work/detail/type';
import { workList } from '@/util/data';

export default function Detail({ params }: DetailContainerPropType) {
  const { id } = params;
  const work = workList.filter(el => el.id.toString() === id)[0];
  //return <></>;
  return <DetailContainer data={work || null} />;
}

export async function generateStaticParams() {
  return workList.map(work => ({
    id: work.id.toString(),
  }));
}
