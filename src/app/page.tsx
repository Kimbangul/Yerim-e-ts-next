import { Main, About, Tech, Contact, Post, Design, Work, Modal } from '@/component/layout/index';
import ObserverProvider from '@/component//observer/ObserverProvider';

export default function Home() {
  const page = [
    <Main key="main" />,
    <About key="about" />,
    <Tech key="tech" />,
    <Work key="work" />,
    <Design key="design" />,
    <Post key="post" />,
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
