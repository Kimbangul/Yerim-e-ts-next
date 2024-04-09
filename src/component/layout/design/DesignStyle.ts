import styled from 'styled-components';
import { Page, MaxWidthContainer } from '@/styles/Common';

const Design = {
  Page: styled(Page)`
    background-color: ${props => props.theme.color.secondBg};
    .fp-overflow {
      overflow-x: visible !important;
      overflow-y: visible !important;
      /* FUNCTION pc*/
      @media (${({ theme }) => theme.windowSize['lt-l']}) {
        width: 100%;
      }
    }
    /* FUNCTION section animation */
    &.active {
      .Design__container {
        opacity: 1;
        transition: opacity 0.3s 0.5s;
      }
    }
  `,
  Container: styled(MaxWidthContainer)`
    opacity: 0; // TODO
    transition: opacity 0.3s;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column-reverse;
    }
    /* @media (${({ theme }) => theme.windowSize['mb-m']}) {
      opacity: 1;
    } */
  `,
  List: styled.ul`
    width: 100%;
    display: flex;

    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5.6rem 2.4rem;
    transition: gap 0.3s;

    /* FUNCTION pc*/
    @media (${({ theme }) => theme.windowSize['lt-l']}) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-content: center;
      gap: 0;
      grid-gap: 3.6rem 2.4rem;
      padding-top: 5.6rem;
    }

    @media (${({ theme }) => theme.windowSize['lt-m']}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  Desc: {
    Text: styled.p`
      text-align: center;
      color: ${({ theme }) => theme.color.text_2};
      font-size: ${({ theme }) => theme.fontSize.head.xs};
      margin-top: 5.6rem;
      position: relative;
      transition: font-size 0.3s;
      @media (max-width: 1000px) {
        margin-top: 0;
        margin-bottom: 0;
      }

      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.md};
      }
    `,
    Title: styled.span`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      font-weight: 400;
      color: ${({ theme }) => theme.color.text_4};
      position: absolute;
      margin-top: 0.8rem;
      white-space: nowrap;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: font-size 0.3s;

      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.sm};
      }
    `,
  },
};

export const Item = {
  Container: styled.li<{ $duration: number }>`
    width: 100%;
    border-radius: 0.4rem;
    cursor: pointer;
    flex-basis: calc(20% - 3.2rem);
    aspect-ratio: 1 / 1;
    .DesignListItem__title {
      opacity: 0; // TODO
    }
    &:hover {
      img {
        transform: scale(1.12);
        filter: saturate(1);
      }
    }
  `,
  Hover: styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    z-index: 3;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color.text};
    padding: 2.4rem;
    text-align: center;
    pointer-events: none;
  `,
  Link: styled.a`
    @keyframes up-down-ani {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(1rem);
      }
    }
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.8rem;
    box-shadow: 0rem 0rem 2.4rem rgba(0, 0, 0, 0.5);
    background-color: ${props => props.theme.color.skeletonBg};
    animation: up-down-ani 1.7s ease-in-out 0s infinite alternate both;

    img {
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0);
    }
  `,
};

export default Design;
