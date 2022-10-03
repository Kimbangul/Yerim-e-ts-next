import styled, { css } from 'styled-components';

const windowSize = {
  'mb-s': '(max-width: 300px)',
  'mb-m': '(max-width: 480px)',
  'mb-l': '(max-width: 768px)',
  'lt-s': '(max-width: 1024px)',
  'lt-m': '(max-width: 1200px)',
  'lt-l': '(max-width: 1440px)',
};

const fontSize = {
  body: {
    xs: '1.2rem',
    sm: '1.4rem',
    rg: '1.6rem',
    md: '1.8rem',
    lg: '2rem',
  },
  head: {
    xs: '2.4rem',
    sm: '2.8rem',
    rg: '3.2rem',
    md: '3.6rem',
    lg: '4.2rem',
    xl: '4.8rem',
  },
};

const maxWidth = '1200px';

const color = {
  bgColor: 'linear-gradient(180deg, #355C7D 0%, #725A7A 100%)',
  headerColor: '#2A3950',
  mainColor: '#2A3950',
  secondaryBlue: '#355c7d',
  secondaryPurple: '#725a7a',
  secondaryPink: '#c56c86',
  pointPink: '#FF7582',
};

const theme = {
  windowSize,
  color,
  maxWidth,
  fontSize,
};

export default theme;
