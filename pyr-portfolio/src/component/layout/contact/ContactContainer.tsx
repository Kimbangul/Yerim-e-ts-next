import { link } from '@/util/data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactView from '@/component/layout/contact/ContactView';

const ContactContainer = () => {
  return <ContactView linkData={linkData} />;
};

const linkData = [
  {
    text: 'Mail',
    icon: faEnvelope,
    link: link.mail,
    linkOption: '_self',
  },
  {
    text: 'Tel',
    icon: faPhone,
    link: link.tel,
    linkOption: '_self',
  },
  {
    text: 'Github',
    icon: faGithub,
    link: link.github,
    linkOption: '_blank',
  },
];

export default ContactContainer;
