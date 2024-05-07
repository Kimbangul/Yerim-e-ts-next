'use client';
import React, { createContext, useEffect, useState } from 'react';
import { ModalContextType, isOpenModalType, prevFocusType } from '@/component/common/modal/type';

export const ModalContext = createContext<ModalContextType>({
  isOpenModal: false,
  setIsOpenModal: e => {},
  prevFocus: null,
  setPrevFocus: e => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState<isOpenModalType>(false);
  const [prevFocus, setPrevFocus] = useState<prevFocusType>(null);

   // FUNCTION 모달이 닫혔을 때 focus 처리
  useEffect(() => {   
    if (isOpenModal === false && prevFocus) {
      prevFocus.focus();
      setPrevFocus(null);
    }
  }, [prevFocus, isOpenModal]);

  return (
    <ModalContext.Provider value={{ isOpenModal, setIsOpenModal, prevFocus, setPrevFocus }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
