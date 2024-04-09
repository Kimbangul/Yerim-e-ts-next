'use client';
import Footer from '@/component/layout/footer/FooterStyle';
import { FooterViewPropType } from '@/component/layout/footer/type';

const FooterView: React.FC<FooterViewPropType> = ({ currentYear }) => {
  return (
    <Footer.Container className="section fp-auto-height">
      <Footer.Inner className="Footer__container">
        <p className="Footer__desc">
          본 페이지는 상업적 목적이 아닌 <br />
          개인 포트폴리오용으로 제작되었습니다.
        </p>
        <Footer.Copy className="Footer__copy">© {currentYear} Park-Ye-Rim. All Rights Reserved.</Footer.Copy>
      </Footer.Inner>
    </Footer.Container>
  );
};

export default FooterView;
