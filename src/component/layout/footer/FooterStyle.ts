import styled from 'styled-components';
import { MaxWidthContainer } from '@/styles/Common';

const Footer = {
  Container: styled.footer`
    background: ${({ theme }) => theme.color.header};
    transition: padding 0.3s;
    @media (max-width: ${({ theme }) => theme.maxWidth}) {
      min-height: unset !important;
    }
    /* FUNCTION pc */
    @media (${({ theme }) => theme.windowSize['lt-m']}) {
      padding: 0 6rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding: 0 3rem;
    }
    /* FUNCTION mb */
    @media (${props => props.theme.windowSize['mb-s']}) {
      padding: 0 2rem;
    }
  `,
  Inner: styled(MaxWidthContainer)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 24rem;
    padding: 3.2rem 0;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.color.text_4};
  `,
  Copy: styled.span`
    margin-top: 1.6rem;
    font-size: ${({ theme }) => theme.fontSize.body.xs};
    color: ${({ theme }) => theme.color.text_5};
  `,
};

export default Footer;
