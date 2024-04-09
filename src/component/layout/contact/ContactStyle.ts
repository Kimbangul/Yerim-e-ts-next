import styled from 'styled-components';
import { Page, Button, MaxWidthContainer } from '@/styles/Common';

const Contact = {
  Page: styled(Page)`
    flex-direction: column;
    .Contact__profile-img {
      opacity: 0; // TODO
      transition: opacity 0.3s 0.3s;
    }
    /* FUNCTION pc */
    /* @media (${props => props.theme.windowSize['lt-s']}) {
      padding-bottom: 7.2rem;
    } */
    .fp-overflow {
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        width: 100%;
      }
    }
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      .Contact__profile-img {
        display: none;
      }
    }

    /* FUNCTION section animation */
    &.active {
      .Contact__profile-img {
        opacity: 1;
      }
      .Contact__blockquote {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 0.8s;
      }
      .Contact__desc {
        opacity: 1;
        transition: font-size 0.3s, opacity 0.3s 1.4s;
      }
      .Contact__button {
        opacity: 1;
        &:nth-child(1) {
          transition: all 0.3s, opacity 0.3s 2s;
        }
        &:nth-child(2) {
          transition: all 0.3s, opacity 0.3s 2.2s;
        }
        &:nth-child(3) {
          transition: all 0.3s, opacity 0.3s 2.4s;
        }
      }
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        .Contact__blockquote {
          opacity: 1;
          transition: font-size 0.3s, opacity 0.3s 0.3s;
        }
        .Contact__desc {
          opacity: 1;
          transition: font-size 0.3s, opacity 0.3s 0.9s;
        }
        .Contact__button {
          opacity: 1;
          &:nth-child(1) {
            transition: all 0.3s, opacity 0.3s 1.2s;
          }
          &:nth-child(2) {
            transition: all 0.3s, opacity 0.3s 1.4s;
          }
          &:nth-child(3) {
            transition: all 0.3s, opacity 0.3s 1.6s;
          }
        }
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    display: flex;
    gap: 5.6rem;
    /* FUNCTION pc */
    @media (${({ theme }) => theme.windowSize['lt-m']}) {
      align-items: center;
    }
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  Text: {
    Container: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    Blockquote: styled.blockquote`
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      color: ${({ theme }) => theme.color.text_head};
      font-weight: 600;
      opacity: 0; //TODO
      transition: font-size 0.3s, opacity 0.3s;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xs};
      }
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      color: ${({ theme }) => theme.color.text_4};
      margin-top: 2.4rem;
      word-break: keep-all;
      line-height: 1.8;
      opacity: 0; //TODO
      transition: font-size 0.3s, opacity 0.3s;
      /* FUNCTION mb */
      @media (${props => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
    `,
    Point: styled.span`
      color: ${({ theme }) => theme.color.point};
      font-weight: 500;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 4.8rem;
      gap: 1.6rem;
      @media (${props => props.theme.windowSize['lt-s']}) {
        flex-direction: column;
      }
    `,
    Item: styled(Button)`
      display: flex;
      align-items: center;
      gap: 1.2rem;
      opacity: 0; //TODO
      transition: width 0.3s, background 0.3s, color 0.3s, opacity 0.3s;
      svg {
        width: ${({ theme }) => theme.fontSize.head.xs};
        /* margin-left: calc(${({ theme }) => theme.fontSize.head.sm} / -2); */
      }
    `,
  },
};

export default Contact;
