import { WorkType } from '@/util/type';

export interface WorkViewPropType {
  work: WorkType[];
  // isAbleLoad: boolean;
  // onClickLoadBtn: () => void;
}

export type GetListItemType = (page: number, list: WorkType[]) => WorkType[];
