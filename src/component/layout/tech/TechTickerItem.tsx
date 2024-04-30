import styled from 'styled-components';
import AE_40 from '/public/icon/tech/ae_40.svg';
import CSS_40 from '/public/icon/tech/css_40.svg';
import FIGMA_40 from '/public/icon/tech/figma_40.svg';
import GIT_40 from '/public/icon/tech/git_40.svg';
import HTML_40 from '/public/icon/tech/html_40.svg';
import ILLUSRATOR_40 from '/public/icon/tech/il_40.svg';
import JQUERY_40 from '/public/icon/tech/jquery_40.svg';
import JS_40 from '/public/icon/tech/js_40.svg';
import REACT_40 from '/public/icon/tech/react_40.svg';
import PS_40 from '/public/icon/tech/ps_40.svg';
import NEXT_40 from '/public/icon/tech/next_40.svg';
import SASS_40 from '/public/icon/tech/sass_40.svg';
import SC_40 from '/public/icon/tech/sc_40.svg';
import TS_40 from '/public/icon/tech/ts_40.svg';
import { motion } from 'framer-motion';
import { animateSpringButton } from '@/styles/motion';

const TechTickerItem = () => {
  const item = [
    <HTML_40 key='ico_html'/>,
    <CSS_40 key='ico_css'/>,
    <SASS_40 key='ico_sass'/>,
    <SC_40 key='icon_sc'/>,
    <JS_40 key='ico_js'/>,
    <JQUERY_40 key='ico_jq'/>,
    <TS_40 key='ico_ts'/>,
    <REACT_40 key='ico_react'/>,
    <NEXT_40 key='ico_next'/>,
    <PS_40 key='ico_ps'/>,
    <ILLUSRATOR_40 key='ico_ill'/>,
    <AE_40 key='ico_ae'/>,
    <FIGMA_40 key='ico_figma'/>,
    <GIT_40 key='ico_git'/>,
  ];
  return item.map((el, idx) => <TechTicker
  variants={animateSpringButton}
                  initial="active"
                  whileHover="hover"
                  whileTap="hover"
  key={`ticker_item_${idx}`}>{el}</TechTicker>);
};

export const TechTicker = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  border-radius: 2.4rem;
  width: 9.6rem;
  height: 9.6rem; 
  

  background: ${({ theme }) => theme.color.main};
  svg{
    height: 100%;
  }

  @media (${({theme}) => theme.windowSize['mb-l']}) {
    width: 8rem;
    height: 8rem;
    padding: 1.8rem;
    border-radius: 1.8rem;
  }

  @media (${({theme}) => theme.windowSize['mb-m']}) {
    width: 6rem;
    height: 6rem;
    padding: 1.4rem;
    border-radius: 1.4rem;
  }
`;

export default TechTickerItem;
