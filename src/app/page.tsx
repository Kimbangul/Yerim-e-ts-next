import { Main, About, Tech, Contact, Post, Design, Work, Modal } from '@/component/layout/index';
import ObserverProvider from '@/component/observer/ObserverProvider';

const page = [
  <Main key="Main" />,
  <About key="about" />,
  <Tech key="tech" />,
  <Work key="work" />,
  <Design key="design" />,
  <ObserverProvider key="post">
    <Post />
  </ObserverProvider>,
  <Contact key="contact" />,
];

export default function Home() {
  return (
    <>
      {page.map((el, idx) => el)}
      <Modal />
    </>
  );
}
