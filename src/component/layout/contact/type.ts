import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface linkItemType {
  text: string;
  icon: IconProp;
  title: string;
  link: string;
  linkOption: string;
}

export interface ContactViewPropType {
  linkData: linkItemType[];
}
