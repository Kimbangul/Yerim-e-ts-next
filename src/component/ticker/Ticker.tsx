import { motion } from 'framer-motion';
import { styled } from 'styled-components';

interface TickerProps {
  children: React.ReactNode;
  duration: number;
}

const Ticker: React.FC<TickerProps> = ({ children, duration }) => {
  return (
    <TICKER.Container>
      <TICKER.Inner
        className="ticker-list"
        transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        whileHover={{ x: 0, transition: {duration: duration * 0.5} }}
      >
        {children}
        {children}
      </TICKER.Inner>
    </TICKER.Container>
  );
};

export const TICKER = {
  Container: styled(motion.div)`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
  `,
  Inner: styled(motion.ul)`
    display: flex;
    justify-content: center;
    width: fit-content;
    gap: 0 3.2rem;

    /* @media (${({ theme }) => theme.windowSize['mb-l']}){
      gap: 0 1.6rem;
    } */
  `,
};

export default Ticker;
