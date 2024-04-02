import MainContainer from '@/component/layout/main/MainContainer';
import AboutContainer from '@/component/layout/about/AboutContainer';
import TechContainer from '@/component/layout/tech/TechContainer';
import FooterContainer from '@/component/layout/footer/FooterContainer';
import ContactContainer from '@/component/layout/contact/ContactContainer';

export default function Home() {
  return (
    <>
      <MainContainer />
      <AboutContainer />
      <TechContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  );
}
