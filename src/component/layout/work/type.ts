import { WorkType } from '@/util/type';

export type WorkItemType = WorkType & {
  imgObj: JSX.Element;
};

export interface WorkViewPropType {
  work: WorkItemType[];
  // isAbleLoad: boolean;
  // onClickLoadBtn: () => void;
}

export type GetListItemType = (page: number, allList: WorkType[], list: WorkType[]) => WorkType[];
