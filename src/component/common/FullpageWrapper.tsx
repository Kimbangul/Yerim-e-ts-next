import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
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
