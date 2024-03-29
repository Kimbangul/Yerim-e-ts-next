import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useState } from 'react';

import Main from 'src/component/Main/MainView';
import About from 'src/component/About/AboutView';
import Tech from 'src/component/Tech/TechView';
import Work from 'src/component/Work/WorkView';
import Design from 'src/component/Design/DesignView';
import Contact from 'src/component/Contact/ContactView';
import PostsView from 'src/component/Posts/PostsView';
import Footer from 'src/component/common/FooterView';

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
          credits={{enabled: true}}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE}
          navigation={true}
          navigationPosition='left'
          navigationTooltips={[
            'Main',
            'About',
            'Tech',
            'Work',
            'Design',
            'Posts', 
            'Contact',
          ]}
          scrollingSpeed={1000}
          scrollOverflow={true}
          responsiveWidth={1024}
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
                <PostsView />
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
