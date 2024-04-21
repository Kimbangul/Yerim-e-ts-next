import { WorkType } from '@/util/type';
import { Variants } from 'framer-motion';
import { MutableRefObject } from 'react';

export type WorkItemType = WorkType & {
  imgObj: JSX.Element;
  variants?: Variants;
  delay: number;
  viewRef: MutableRefObject<HTMLUListElement | null>;
};

export interface WorkViewPropType {
  list: WorkItemType[];
}

export type GetListItemType = (page: number, allList: WorkItemType[], list: WorkItemType[]) => WorkItemType[];
