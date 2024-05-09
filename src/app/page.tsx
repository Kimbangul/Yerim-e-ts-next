import { Main, About, Tech, Contact, Post, Design, Work, Modal } from '@/component/layout/index';
import ObserverProvider from '@/component//observer/ObserverProvider';

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

export default function Home() {
  return (
    <>
      {page.map((el, idx) => el)}
      <Modal />
    </>
  );
}
