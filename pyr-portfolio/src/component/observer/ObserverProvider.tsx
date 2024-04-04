'use client';
import useIntersect from '@/hook/useIntersect';
import { ReactNode, useEffect } from 'react';

const ObserverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof window === undefined) return;
    document.querySelector('');
  }, [typeof window]);
  // const [target, view] = useIntersect();
  return <>{children}</>;
};

export default ObserverProvider;
