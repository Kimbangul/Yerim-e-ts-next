import { RefObject } from 'react';

export interface modalDataType {
  detail: string;
  alt: string;
}
export type isOpenModalType = false | modalDataType;
export type prevFocusType = HTMLElement | null;
export interface ModalContextType {
  isOpenModal: isOpenModalType;
  setIsOpenModal: React.Dispatch<React.SetStateAction<isOpenModalType>>;
  prevFocus: prevFocusType;
  setPrevFocus: React.Dispatch<React.SetStateAction<prevFocusType>>;
}

export interface ModalViewType {
  modalImg: isOpenModalType;
  setCloseModal: () => void;
  handleClickOutSide: (e: React.MouseEvent) => void;
  setBodyPreventScroll: () => void;
  modalRef: RefObject<HTMLDivElement>;
}
