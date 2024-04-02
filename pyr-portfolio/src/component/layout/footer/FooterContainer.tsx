import FooterView from '@/component/layout/footer/FooterView';

const FooterContainer = () => {
  return <FooterView currentYear={new Date().getFullYear().toString()} />;
};

export default FooterContainer;
