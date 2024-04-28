import { motion, useAnimation } from 'framer-motion';
import { styled } from 'styled-components';

interface TickerProps {
  children: React.ReactNode;
}

const Ticker: React.FC<TickerProps> = ({ children }) => {
  return (
    <TICKER.Container>
      <TICKER.Inner
        className="ticker-list"
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
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
  `,
};

export default Ticker;
