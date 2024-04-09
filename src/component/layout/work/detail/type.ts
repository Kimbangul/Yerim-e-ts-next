import { WorkType } from '@/util/type';

export interface DetailType {
  data: WorkType | null;
  imgObj: { [key: string]: JSX.Element };
}

export interface DetailContainerPropType {
  params: {
    id: string;
  };
}
