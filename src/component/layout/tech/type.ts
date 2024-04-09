export interface TechListItemType {
  title: string;
  content: string[];
  tag: string[];
}

export interface TechListType {
  develop: TechListItemType;
  design: TechListItemType;
}

export interface TechListPropType {
  techName: TechListItemType;
}

export interface TechViewPropType {
  list: TechListType;
}
