import { WorkType } from '@/util/type';

export interface DetailType {
  data: WorkType | null;
}

export interface DetailViewPropType extends DetailType {
  imgObj: { [key: string]: JSX.Element };
}

export interface DetailContainerPropType {
  params: {
    id: string;
  };
}
