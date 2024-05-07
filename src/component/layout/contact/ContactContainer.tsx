import { link } from '@/util/data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactView from '@/component/layout/contact/ContactView';
import { linkItemType } from '@/component/layout/contact/type';

const ContactContainer = () => {
  return <ContactView linkData={linkData} />;
};

const linkData: linkItemType[] = [
  {
    text: 'Mail',
    icon: faEnvelope,
    link: link.mail,
    linkOption: '_self',
    title: '메일 보내기',
  },
  {
    text: 'Tel',
    icon: faPhone,
    link: link.tel,
    linkOption: '_self',
    title: '전화 걸기',
  },
  {
    text: 'Github',
    icon: faGithub,
    link: link.github,
    linkOption: '_blank',
    title: 'Github 방문하기',
  },
];

export default ContactContainer;
