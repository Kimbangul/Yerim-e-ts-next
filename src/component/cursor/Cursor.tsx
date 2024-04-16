'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const bodyRef = useRef<HTMLBodyElement>();
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const onMoveMouse = (e: MouseEvent) => {
    console.log(e);
    setXY({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    bodyRef.current = document.querySelector('body') || undefined;

    if (bodyRef.current) {
      bodyRef.current.addEventListener('mousemove', onMoveMouse);
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.removeEventListener('mousemove', onMoveMouse);
      }
    };
  }, []);

  return <CursorStyle $x={xy.x} $y={xy.y} />;
};

const CursorStyle = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  /* transform: translate(${props => props.$x}px, ${props => props.$y}px); */
`;

export default Cursor;
