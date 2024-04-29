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

const TechTickerItem = () => {
  const item = [
    <HTML_40 />,
    <CSS_40 />,
    <SASS_40 />,
    <SC_40 />,
    <JS_40 />,
    <JQUERY_40 />,
    <TS_40 />,
    <REACT_40 />,
    <NEXT_40 />,
    <PS_40 />,
    <ILLUSRATOR_40 />,
    <AE_40 />,
    <FIGMA_40 />,
    <GIT_40 />,
  ];
  return item.map((el, idx) => <TechTicker key={`ticker_item_${idx}`}>{el}</TechTicker>);
};

export const TechTicker = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  aspect-ratio: 1 / 1;
  padding: 1.6rem;
  border-radius: 1.2rem;
  min-width: 8rem;
  background: ${({ theme }) => theme.color.main};
  svg{
    height: 100%;
  }
`;

export default TechTickerItem;
