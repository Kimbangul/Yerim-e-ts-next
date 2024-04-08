import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import { WorkType } from '@/util/type';
import { GetListItemType } from '@/component/layout/work/type';
import getBase64 from '@/util/getBase64';

const getList = async () => {
  // const newList = await workList.map(async el => {
  //   const size = await getBase64(el.thumb);
  //   return { ...el, width: size.img.width, height: size.img.height };
  // });

  return workList;

  // console.log(newList);
  // return newList;
};

const WorkContainer = async () => {
  const list = await getList();
  return <WorkView work={list} />;
};

export default WorkContainer;
