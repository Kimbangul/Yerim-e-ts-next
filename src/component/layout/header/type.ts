import { ReactNode } from 'react';

export interface socialItem {
  title: string;
  href: string;
  icon: ReactNode;
  alt: string;
}

export interface HeadComponentPropType {
  // [key: string]: any;
  isOpen: boolean;
  socialList: socialItem[];
  onClickMbMenuBtn: (e: React.MouseEvent) => void;
}
