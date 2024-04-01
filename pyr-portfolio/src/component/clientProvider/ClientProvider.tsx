'use client';
import { PropsWithChildren, useState } from 'react';

/** 클라이언트 환경에서 구동이 필요한 컴포넌트**/
const ReactClientProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default ReactClientProvider;
