import { RefObject } from 'react';

export type isOpenModalType = false | string;
export type prevFocusType = HTMLElement | null;
export interface ModalContextType {
  isOpenModal: isOpenModalType;
  setIsOpenModal: React.Dispatch<React.SetStateAction<isOpenModalType>>;
  prevFocus: prevFocusType;
  setPrevFocus: React.Dispatch<React.SetStateAction<prevFocusType>>;
}

export interface ModalViewType {
  modalImg: string | false;
  setCloseModal: () => void;
  handleClickOutSide: (e: React.MouseEvent) => void;
  setBodyPreventScroll: () => void;
  modalRef: RefObject<HTMLDivElement>;
}
