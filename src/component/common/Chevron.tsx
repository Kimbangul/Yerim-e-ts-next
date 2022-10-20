import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import CHEVRON_64 from 'public/icon/chevron_64.svg';

// PARAM type
type ChevronType = {
  [key: string]: any;
  direction: string;
};

// COMPONENT main component
const Chevron = forwardRef<HTMLElement, ChevronType>((props, ref) => {
  return (
    <ChevronButton.Container {...props} ref={ref}>
      <CHEVRON_64 />
    </ChevronButton.Container>
  );
});

Chevron.displayName = 'Chevron';

// COMPONENT style
const ChevronButton = {
  Container: styled.button`
    cursor: pointer;
    background: transparent;
    ${(props: ChevronType) =>
      props.direction === 'next' &&
      css`
        svg {
          transform: rotate(-180deg);
        }
      `};
  `,
};

export default Chevron;
