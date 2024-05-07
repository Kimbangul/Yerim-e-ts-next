'use client';

import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import CLOSE_24 from '/public/icon/close_24.svg';
import Modal from '@/component/common/modal/ModalStyle';
import { ModalViewType } from '@/component/common/modal/type';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { handleKeyDown } from '@/util/event';

const animateModalPage = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const animateModalInner = {
  initial: { scale: 0, radius: '100%' },
  animate: { scale: 1, radius: '1.6rem' },
  exit: { scale: 0, radius: '100%' },
};

const ModalView: React.FC<ModalViewType> = ({
  modalImg,
  setCloseModal,
  modalRef,
  setBodyPreventScroll,
  handleClickOutSide,
}) => {
  setBodyPreventScroll();

  const innerRef = useRef<HTMLDivElement>(null);

  // FUNCTION 모달이 열렸을 경우, 포커스 이동 처리
  useEffect(() => {
    if (modalImg && innerRef.current) {
      innerRef.current.focus();
    }
  }, [modalImg]);

  return (
    <AnimatePresence initial={false}>
      {modalImg && (
        <Modal.Page
          className="Modal"
          tabIndex={0}
          ref={modalRef}
          onClick={handleClickOutSide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onKeyDown={handleKeyDown('Escape', setCloseModal)}
        >
          <Modal.Container
            className="Modal__container"
            layout
            variants={animateModalPage}
            initial="initial"
            animate="animate"
            exit="exit"
            tabIndex={0}
          >
            <Modal.Inner
              className="Modal__inner"
              ref={innerRef}
              tabIndex={0}
              variants={animateModalInner}
              transition={{ type: 'spring', stiffness: 600, damping: 30, duration: 0.3 }}
            >
              <AutoHeightImageView alt={modalImg.alt} src={modalImg.detail || ''} />
            </Modal.Inner>
            <Modal.Button.Close
              className="Modal__close-btn"
              onClick={setCloseModal}
              onKeyDown={handleKeyDown('Enter', setCloseModal)}
              tabIndex={0}
            >
              <CLOSE_24 />
            </Modal.Button.Close>
          </Modal.Container>
        </Modal.Page>
      )}
    </AnimatePresence>
  );
};

export default ModalView;
