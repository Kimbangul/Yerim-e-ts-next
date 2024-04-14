import { Main, About, Tech, Contact, Post, Design, Work, Modal } from '@/component/layout/index';
import ObserverProvider from '@/component//observer/ObserverProvider';
// import FullPageProvider from '@/component/fullpage/FullPageProvider';

export default function Home() {
  const page = [
    <Main key="main" />,
    <About key="about" />,
    <Tech key="tech" />,
    <Work key="work" />,
    <Post key="post" />,
    <Design key="design" />,
    <Contact key="contact" />,
  ];
  return (
    <>
      {page.map((el, idx) => (
        <ObserverProvider key={`section${idx}${el.key}`}>{el}</ObserverProvider>
      ))}
      <Modal />
    </>
  );
}
