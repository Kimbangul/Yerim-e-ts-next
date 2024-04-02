import MainContainer from '@/component/layout/main/MainContainer';
import AboutContainer from '@/component/layout/about/AboutContainer';
import TechContainer from '@/component/layout/tech/TechContainer';
import FooterContainer from '@/component/layout/footer/FooterContainer';

export default function Home() {
  return (
    <>
      <MainContainer />
      <AboutContainer />
      <TechContainer />
      <FooterContainer />
    </>
  );
}
