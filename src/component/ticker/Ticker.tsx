import { motion, useAnimation } from 'framer-motion';
import { styled } from 'styled-components';

interface TickerProps {
  children: React.ReactNode;
}

const Ticker: React.FC<TickerProps> = ({ children }) => {
  return (
    <TICKER.Container>
      <motion.ul
        className="ticker-list"
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
        initial={{ y: 0 }}
        animate={{ y: -innerHeight }}
      >
        {children}
        {children}
      </motion.ul>
    </TICKER.Container>
  );
};

export const TICKER = {
  Container: styled.div``,
};

export default Ticker;
