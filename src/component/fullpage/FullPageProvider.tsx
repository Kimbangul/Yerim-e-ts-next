'use client';
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useState } from 'react';

const FullPageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  // FUNCTION window load check
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true);
    }
  }, [typeof window]);

  return (
    <>
      {isReady && (
        <ReactFullpage
          // PARAM fullpage options
          credits={{ enabled: true }}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE}
          navigation={true}
          navigationPosition="left"
          navigationTooltips={['Main', 'About', 'Tech', 'Work', 'Design', 'Posts', 'Contact']}
          scrollingSpeed={1000}
          scrollOverflow={true}
          responsiveWidth={1024}
          normalScrollElements={'.Modal'}
          lazyLoading={false}
          render={() => {
            return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
          }}
        />
      )}
    </>
  );
};

export default FullPageProvider;
