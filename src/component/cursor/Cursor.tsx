'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useThrottle from '@/hook/useThrottle';

const Cursor = () => {
  const bodyRef = useRef<HTMLBodyElement>();
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const onMoveMouse = (e: MouseEvent) => {
    console.log(e.clientX, e.clientY);
    setXY({ x: e.clientX, y: e.clientY });
  };

  const throttleOnMove = useThrottle<[MouseEvent]>(onMoveMouse, 30);

  useEffect(() => {
    bodyRef.current = document.querySelector('body') || undefined;

    if (bodyRef.current) {
      console.log('add');
      bodyRef.current.addEventListener('mousemove', throttleOnMove);
    }

    return () => {
      if (bodyRef.current) {
        console.log('remove');
        bodyRef.current.removeEventListener('mousemove', throttleOnMove);
      }
    };
  }, []);

  return <CursorStyle.Cursor style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }} />;
};

const CursorStyle = {
  Cursor: styled.div`
    position: fixed;
    z-index: 999;
    width: 5rem;
    height: 5rem;
    margin: -2.5rem -5rem 0 0;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
  `,
};
export default Cursor;
