import { motion, useAnimation } from 'framer-motion';
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
        animate={{ x: '-100%' }}
      >
        {children}
        {children}
      </TICKER.Inner>
    </TICKER.Container>
  );
};

export const TICKER = {
  Container: styled.div``,
  Inner: styled(motion.ul)`
    display: flex;
    gap: 0 2.4rem;
  `,
};

export default Ticker;
