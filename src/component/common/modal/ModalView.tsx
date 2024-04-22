'use client';

import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import CLOSE_24 from '/public/icon/close_24.svg';
import Modal from '@/component/common/modal/ModalStyle';
import { ModalViewType } from '@/component/common/modal/type';
import { AnimatePresence, spring } from 'framer-motion';

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

  return (
    <AnimatePresence initial={false}>
      {modalImg && (
        <Modal.Page
          className="Modal"
          ref={modalRef}
          onClick={handleClickOutSide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Modal.Container
            className="Modal__container"
            layout
            variants={animateModalPage}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Modal.Button.Close className="Modal__close-btn" onClick={setCloseModal}>
              <CLOSE_24 />
            </Modal.Button.Close>
            <Modal.Inner
              className="Modal__inner"
              variants={animateModalInner}
              transition={{ type: 'spring', stiffness: 600, damping: 30, duration: 0.3 }}
            >
              <AutoHeightImageView alt={'design detail'} src={modalImg || ''} />
            </Modal.Inner>
          </Modal.Container>
        </Modal.Page>
      )}
    </AnimatePresence>
  );
};

export default ModalView;
