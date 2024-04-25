import { Main, About, Tech, Contact, Post, Design, Work, Modal } from '@/component/layout/index';
import ObserverProvider from '@/component//observer/ObserverProvider';

export default function Home() {
  const page = [
    <ObserverProvider key="main">
      <Main />
    </ObserverProvider>,
    <About key="about" />,
    <Tech key="tech" />,
    <Work key="work" />,
    <Design key="design" />,
    <ObserverProvider key="post">
      <Post />
    </ObserverProvider>,
    <ObserverProvider key="contact">
      <Contact />
    </ObserverProvider>,
  ];
  return (
    <>
      {/* {page.map((el, idx) => (
        <ObserverProvider key={`section${idx}${el.key}`}>{el}</ObserverProvider>
      ))} */}
      {page.map((el, idx) => el)}
      <Modal />
    </>
  );
}
