'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useThrottle from '@/hook/useThrottle';

const Cursor = () => {
  const bodyRef = useRef<HTMLBodyElement>();
  const [xy, setXY] = useState({ x: -99, y: -99 });
  const [pointer, setPointer] = useState<'pointer' | null>(null);

  const onMoveMouse = (e: MouseEvent) => {
    if (e.target && e.target instanceof HTMLElement) {
      const style = window.getComputedStyle(e.target)['cursor'];
      style === 'pointer' ? setPointer(style) : setPointer(null);
    }
    setXY({ x: e.clientX, y: e.clientY });
  };

  const throttleOnMove = useThrottle<[MouseEvent]>(onMoveMouse, 30);

  useEffect(() => {
    bodyRef.current = document.querySelector('body') || undefined;

    if (bodyRef.current) {
      bodyRef.current.addEventListener('mousemove', throttleOnMove);
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.removeEventListener('mousemove', throttleOnMove);
      }
    };
  }, []);

  return <CursorStyle.Cursor $pointer={pointer} style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }} />;
};

const CursorStyle = {
  Cursor: styled.div<{ $pointer: string | null }>`
    width: 3rem;
    height: 3rem;
    margin: -1.5rem;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    transition: width 0.3s, height 0.3s, background 0.3s, margin 0.3s, backdrop-filter 0.3s;
    display: none;
    backdrop-filter: invert(0);
    transform-origin: center;
    //  backdrop-filter: invert(1);
    @media (any-pointer: fine) {
      display: block;
      position: fixed;
      z-index: 1000;
    }

    ${props =>
      props.$pointer === 'pointer' &&
      css`
        width: 8rem;
        height: 8rem;
        margin: -4rem;
        background: transparent;
        backdrop-filter: invert(1);
      `}
  `,
};
export default Cursor;
