import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const Modal = {
  Page: styled(motion.div)`
    /* @keyframes modalAni {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    } */
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    /* transition: padding 0.3s; */
    /* animation: modalAni 0.3s ease-in-out; */

    /* FUNCTION pc */
    @media (${props => props.theme.windowSize['lt-s']}) {
      /* position: fixed; */
      padding: 0 6rem;
    }
    /* FUNCTION mb */
    @media (${props => props.theme.windowSize['mb-m']}) {
      padding: 0 3rem;
    }
    /* FUNCTION mb */
    @media (${props => props.theme.windowSize['mb-s']}) {
      padding: 0 2rem;
    }
  `,
  Container: styled(motion.div)`
    width: 100rem;
    height: 70vh;
    position: relative;
  `,
  Inner: styled(motion.div)`
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
    overflow-y: auto;
    scrollbar-width: none;
    background: #fff;
    position: relative;
  `,
  Button: {
    Close: styled.div`
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: calc(100% + 0.8rem);
      right: 0;
    `,
  },
};

export default Modal;
