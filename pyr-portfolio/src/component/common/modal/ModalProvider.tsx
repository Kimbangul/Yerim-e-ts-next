'use client';
import React, { createContext, useState } from 'react';
import { ModalContextType } from '@/component/common/modal/type';

export const ModalContext = createContext<ModalContextType>({
  isOpenModal: false,
  setIsOpenModal: e => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState<false | string>(false);

  return <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
