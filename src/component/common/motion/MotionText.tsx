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
  transition: { delay: 0.6 },
};

const MotionText: React.FC<MotionTextPropType> = props => {
  const { text } = props;
  const words = text.split('');
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
    $text.length === 0 &&
    css`
      min-width: 1rem;
    `}
`;

export default MotionText;
