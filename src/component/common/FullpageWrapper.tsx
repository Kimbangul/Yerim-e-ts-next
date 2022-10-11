import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Main from 'src/component/Main/MainView';
import About from 'src/component/About/AboutView';
import Tech from 'src/component/Tech/TechView';
import Work from 'src/component/Work/WorkView';
import Design from 'src/component/Design/DesignView';
import Contact from 'src/component/Contact/ContactView';
import Footer from 'src/component/common/FooterView';
import { Container, SectionCategoryTitle } from 'styles/Common';

const FullpageWrapper: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  // FUNCTION window load check
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true);
    }
    return;
  }, [typeof window]);

  return (
    <>
      {isReady && (
        <ReactFullpage
          // PARAM fullpage options
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
          navigation={true}
          navigationPosition='left'
          navigationTooltips={[
            'Main',
            'About',
            'Tech',
            'Work',
            'Design',
            'Contact',
          ]}
          scrollingSpeed={1000}
          scrollOverflow={true}
          responsiveWidth={1000}
          normalScrollElements={'.Modal'}
          lazyLoading={false}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Main />
                <About />
                <Tech />
                <Work />
                <Design />
                <Contact />
                <Footer />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </>
  );
};

export default FullpageWrapper;
