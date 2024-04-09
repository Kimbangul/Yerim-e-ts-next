'use client';
import useIntersect from '@/hook/useIntersect';
import { ReactNode, useEffect } from 'react';

const ObserverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const CLASS_NAME = 'active';
  const [target, isView] = useIntersect<HTMLDivElement>();

  useEffect(() => {
    const section = target.current?.querySelector('.section');
    if (isView === true) {
      section?.classList.add(CLASS_NAME);
    } else {
      section?.classList.remove(CLASS_NAME);
    }
  }, [target, isView]);

  return (
    <>
      <div className="Observer" ref={target}>
        {children}
      </div>
    </>
  );
};

export default ObserverProvider;
