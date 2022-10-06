import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import styled, { css } from 'styled-components';

import Main from 'src/component/Main/Main';
import About from 'src/component/About/About';
import Tech from 'src/component/Tech/Tech';
import Work from 'src/component/Work/Work';
import Design from 'src/component/Design/Design';
import Contact from 'src/component/Contact/Contact';
import Footer from 'src/component/common/Footer';
import { Container, SectionCategoryTitle } from 'styles/Common';

const FullpageWrapper: React.FC = () => {
  return (
    <ReactFullpage
      // PARAM fullpage options
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      scrollOverflow={true}
      responsiveWidth={1000}
      normalScrollElements={'.Modal'}
      render={() => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <Main />
              <About />
              <Tech />
              <Work />
              <Design />
              <Contact />
              <Footer />
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

export default FullpageWrapper;
