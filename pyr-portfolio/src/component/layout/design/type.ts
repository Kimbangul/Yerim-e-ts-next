import { DesignListItemType } from '@/util/type';

export interface DesignViewPropType {
  focusItem: string;
  list: DesignListItemType[];
  onMouseEnterDesignItem: (title: string) => void;
  onMouseOutDesginItem: () => void;
}

export interface DesignItemPropType extends DesignListItemType {
  idx: number;
  focusItem: string;
  onMouseEnter: () => void;
  onMouseOut: () => void;
}
