import styled, { css } from 'styled-components';

import { MaxWidthContainer } from 'styles/Common';

const FooterView: React.FC = () => {
  return (
    <Footer.Container className='section fp-auto-height'>
      <Footer.Inner className='Footer__container'>
        <p className='Footer__desc'>
          Made with Next.js <br />본 페이지는 상업적 목적이 아닌 개인
          포트폴리오용으로 제작되었습니다.
        </p>
        <Footer.Copy className='Footer__copy'>
          © 2022 Park-Ye-Rim. All Rights Reserved.
        </Footer.Copy>
      </Footer.Inner>
    </Footer.Container>
  );
};

const Footer = {
  Container: styled.footer`
    background: ${({ theme }) => theme.color.header};
    @media (max-width: ${({ theme }) => theme.maxWidth}) {
      min-height: unset !important;
    }
  `,
  Inner: styled(MaxWidthContainer)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 24rem;
    padding: 3.2rem 0;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.color.text_4};
  `,
  Copy: styled.span`
    margin-top: 1.6rem;
    font-size: ${({ theme }) => theme.fontSize.body.xs};
    color: ${({ theme }) => theme.color.text_6};
  `,
};

export default FooterView;
