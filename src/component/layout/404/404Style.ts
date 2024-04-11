import { MaxWidthContainer, Page } from '@/styles/Common';
import styled from 'styled-components';

export const Custom404 = {
  Page: styled(Page)``,
  Container: styled(MaxWidthContainer)`
    text-align: center;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.color.text_head};
    font-size: 7rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    transition: font-size 0.3s, letter-spacing 0.3s;

    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${({ theme }) => theme.fontSize.head.ul};
      letter-spacing: 0.2rem;
    }
    /* FUNCTION mb */
    @media (${props => props.theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      letter-spacing: 0rem;
    }
    @media (${props => props.theme.windowSize['mb-s']}) {
      font-size: ${({ theme }) => theme.fontSize.head.lg};
    }
  `,
  Sub: styled.p`
    color: ${({ theme }) => theme.color.text_head};
    font-size: ${({ theme }) => theme.fontSize.body.md};
    font-weight: 300;
    letter-spacing: 0.8rem;
    transition: font-size 0.3s, letter-spacing 0.3s, top 0.3s;
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-l']}) {
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      letter-spacing: 0.4rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.sm};
    }
    @media (${({ theme }) => theme.windowSize['mb-s']}) {
      font-size: ${({ theme }) => theme.fontSize.body.xs};
    }
  `,
  Desc: styled.p`
    font-size: ${({ theme }) => theme.fontSize.body.rg};
    line-height: 1.6;
    font-weight: 400;
    color: ${({ theme }) => theme.color.text_4};
    margin-top: 2.4rem;
    word-break: keep-all;
    transition: font-size 0.3s, opacity 0.3s;
    @media (${props => props.theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.sm};
    }
  `,
  Btn: {
    Container: styled.div`
      display: flex;
      justify-content: center;
      margin-top: 3.6rem;
    `,
  },
};
