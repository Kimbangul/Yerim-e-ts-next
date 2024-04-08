// PARAM workList type
export interface WorkType {
  id: number;
  title: string;
  thumb: string;
  category: string;
  link?: string;
  tag: string[];
  github?: string;
  desc: string;
  duration: string;
  section: string;
  tool: string;
  width?: string;
  height?: string;
}

// PARAM designList type
export interface DesignListItemType {
  title: string;
  link?: string;
  thumb: string;
  detail?: string;
}
