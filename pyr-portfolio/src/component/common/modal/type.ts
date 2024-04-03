import { RefObject } from 'react';

export interface ModalContextType {
  isOpenModal: false | string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<false | string>>;
}

export interface ModalViewType {
  modalImg: string | false;
  setCloseModal: () => void;
  handleClickOutSide: (e: React.MouseEvent) => void;
  setBodyPreventScroll: () => void;
  modalRef: RefObject<HTMLDivElement>;
}
