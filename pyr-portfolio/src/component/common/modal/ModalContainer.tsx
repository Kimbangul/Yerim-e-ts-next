'use client';
import ModalView from '@/component/common/modal/ModalView';
import { useContext, useRef } from 'react';
import { ModalContext } from '@/component/common/modal/ModalProvider';

const ModalContainer = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);
  // PARAM dom
  const bodyDom = document.querySelector('body');
  // PARAM ref
  const dimmerRef = useRef<HTMLDivElement>(null);

  // FUNCTION 모달 닫기 버튼 눌렀을 때
  const setCloseModal = () => {
    if (bodyDom) {
      bodyDom.style.overflow = 'visible';
    }
    setIsOpenModal(false);
  };

  // FUNCTION 모달 열렸을 때 스크롤 방지
  const setBodyPreventScroll = () => {
    if (bodyDom) {
      bodyDom.style.overflow = 'hidden';
    }
  };

  // FUNCTION 모달 바깥 눌렀을 때 닫기
  const handleClickOutSide = (e: React.MouseEvent) => {
    if (e.target === dimmerRef.current) {
      setCloseModal();
    }
  };

  return (
    <ModalView
      modalImg={isOpenModal}
      setCloseModal={setCloseModal}
      setBodyPreventScroll={setBodyPreventScroll}
      handleClickOutSide={handleClickOutSide}
      modalRef={dimmerRef}
    />
  );
};

export default ModalContainer;
