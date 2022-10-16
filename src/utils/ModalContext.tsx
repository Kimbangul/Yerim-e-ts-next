import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpenModal: false | string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<false | string>>;
};
export const ModalContext = createContext<ModalContextType>({
  isOpenModal: false,
  setIsOpenModal: (e) => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState<false | string>(false);

  return (
    <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
