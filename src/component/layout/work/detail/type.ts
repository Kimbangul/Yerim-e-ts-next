import { WorkType } from '@/util/type';

export interface DetailType {
  data: WorkType | null;
}

export interface DetailContainerPropType {
  params: {
    id: string;
  };
}
