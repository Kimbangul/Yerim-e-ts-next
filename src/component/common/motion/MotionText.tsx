import { animateSpringUpContainer, animateSpringUpText, animateSpringUpTextTransition } from '@/styles/motion';
import { HTMLMotionProps, motion } from 'framer-motion';
import { styled } from 'styled-components';

const initialMotion = {
  variants: animateSpringUpText,
  transition: animateSpringUpTextTransition,
};

export const motionTextContainerOption = {
  variants: animateSpringUpContainer(),
  initial: 'initial',
  whileInView: 'active',
};

// COMPONENT component
const MotionText: React.FC<MotionTextPropType> = props => {
  const { text } = props;
  const words = text.split('');
  const motionOption = {
    ...initialMotion,
    className: props.className,
  };

  return words.map((el, idx) => (
    <MotionTextStyle {...motionOption} key={`${el}_${idx}`}>
      {el !== ' ' ? el : `${'\u00A0'}`}
    </MotionTextStyle>
  ));
};

export interface MotionTextPropType extends HTMLMotionProps<'span'> {
  text: string;
}

const MotionTextStyle = styled(motion.span)`
  display: inline-block;
`;

export default MotionText;
