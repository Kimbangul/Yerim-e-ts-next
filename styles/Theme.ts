import styled, { css } from 'styled-components';

const windowSize = {
  'mb-s': '(max-width: 300px)',
  'mb-m': '(max-width: 480px)',
  'mb-l': '(max-width: 768px)',
  'lt-s': '(max-width: 1024px)',
  'lt-m': '(max-width: 1200px)',
  'lt-l': '(max-width: 1440px)',
};

const color = {
  bgColor: '#2F333E',
  headerColor: '#0E101D',
};

const theme = {
  windowSize,
  color,
};

export default theme;
