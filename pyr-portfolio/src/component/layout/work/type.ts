import { WorkType } from '@/util/type';

export interface WorkViewPropType {
  list: WorkType[];
  isAbleLoad: boolean;
  onClickLoadBtn: () => void;
}

export type GetListItemType = (page: number, list: WorkType[]) => WorkType[];
