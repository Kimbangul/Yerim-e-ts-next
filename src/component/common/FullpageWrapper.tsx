import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import Main from 'src/component/Main/Main';
import About from 'src/component/About/About';
import Tech from 'src/component/Tech/Tech';
import Work from 'src/component/Work/Work';
import { Container, SectionCategoryTitle } from 'styles/Common';

const FullpageWrapper: React.FC = () => {
  return (
    <ReactFullpage
      // PARAM fullpage options
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      responsiveWidth={1000}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Main />
            <About />
            <Tech />
            <Work />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullpageWrapper;
