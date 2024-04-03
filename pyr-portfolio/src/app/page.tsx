import MainContainer from '@/component/layout/main/MainContainer';
import AboutContainer from '@/component/layout/about/AboutContainer';
import TechContainer from '@/component/layout/tech/TechContainer';
import FooterContainer from '@/component/layout/footer/FooterContainer';
import ContactContainer from '@/component/layout/contact/ContactContainer';
import PostContainer from '@/component/layout/post/PostContainer';
import DesignContainer from '@/component/layout/design/DesignContainer';
import WorkContainer from '@/component/layout/work/WorkContainer';
import ModalContainer from '@/component/common/modal/ModalContainer';

export default function Home() {
  return (
    <>
      <MainContainer />
      <AboutContainer />
      <TechContainer />
      <WorkContainer />
      <DesignContainer />
      <PostContainer />
      <ContactContainer />
      <FooterContainer />
      <ModalContainer />
    </>
  );
}
