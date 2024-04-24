import { animateSpringUpContainer, animateSpringUpText, animateSpringUpTextTransition } from '@/styles/motion';
import { HTMLMotionProps, motion } from 'framer-motion';
import { css, styled } from 'styled-components';

const initialMotion = {
  variants: animateSpringUpText,
  transition: animateSpringUpTextTransition,
};

export const motionTextContainerOption = {
  variants: animateSpringUpContainer,
  initial: 'initial',
  whileInView: 'active',
};

// COMPONENT component
const MotionText: React.FC<MotionTextPropType> = props => {
  const { text } = props;
  const words = text.split('');
  console.log(words);
  const motionOption = {
    ...initialMotion,
    ...props,
  };

  return words.map((el, idx) => (
    <MotionTextStyle {...motionOption} key={`${el}_${idx}`} $text={el}>
      {el}
    </MotionTextStyle>
  ));
};

export interface MotionTextPropType extends HTMLMotionProps<'span'> {
  text: string;
}

const MotionTextStyle = styled(motion.span)<{ $text: string }>`
  display: inline-block;

  ${({ $text }) =>
    $text === ' ' &&
    css`
      min-width: 1rem;
    `}

  ${({ $text }) =>
    $text === ' \n' &&
    css`
      &::after {
        content: 'ff';
        display: inline-block;
      }
    `}
`;

export default MotionText;
