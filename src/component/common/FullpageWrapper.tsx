import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import Main from 'src/component/Main/Main';
import About from 'src/component/About/About';
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
            <Container className='section' style={{ background: '#2A3950' }}>
              <p>반갑습니다.</p>
            </Container>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullpageWrapper;
