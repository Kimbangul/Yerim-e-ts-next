'use client';

import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

const AnalyticsProvider = () => {
  return (
    <>
      <Analytics mode={'production'} />;
    </>
  );
};

export default AnalyticsProvider;
