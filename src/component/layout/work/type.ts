import { WorkType } from '@/util/type';

export type WorkItemType = WorkType & {
  imgObj: JSX.Element;
};

export interface WorkViewPropType {
  list: WorkItemType[];
}

export type GetListItemType = (page: number, allList: WorkItemType[], list: WorkItemType[]) => WorkItemType[];
