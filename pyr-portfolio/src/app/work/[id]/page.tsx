import DetailContainer from '@/component/layout/work/detail/DetailContainer';
import { DetailContainerPropType } from '@/component/layout/work/detail/type';
import { workList } from '@/util/data';

export default function Detail({ params }: DetailContainerPropType) {
  const { id } = params;
  console.log(id);
  //return <></>;
  return <DetailContainer data={workList[parseInt(id)] || null} />;
}

export async function generateStaticParams() {
  return workList.map(work => ({
    id: work.id.toString(),
  }));
}
