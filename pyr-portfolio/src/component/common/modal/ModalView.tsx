'use client';

import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import CLOSE_24 from '/public/icon/close_24.svg';
import Modal from '@/component/common/modal/ModalStyle';
import { ModalViewType } from '@/component/common/modal/type';

const ModalView: React.FC<ModalViewType> = ({
  modalImg,
  setCloseModal,
  modalRef,
  setBodyPreventScroll,
  handleClickOutSide,
}) => {
  setBodyPreventScroll();

  return (
    modalImg && (
      <>
        <Modal.Page className="Modal" ref={modalRef} onClick={handleClickOutSide}>
          <Modal.Container className="Modal__container">
            <Modal.Button.Close className="Modal__close-btn" onClick={setCloseModal}>
              <CLOSE_24 />
            </Modal.Button.Close>
            <Modal.Inner className="Modal__inner">
              <AutoHeightImageView alt={'design detail'} src={modalImg || ''} />
            </Modal.Inner>
          </Modal.Container>
        </Modal.Page>
      </>
    )
  );
};

export default ModalView;
