import styled, { css } from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.color.headerColor};
  .Footer {
    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 24rem;
      padding: 3.2rem 0;
      width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
      text-align: center;
      color: ${({ theme }) => theme.color.f_bodyColor_4};
    }
    &__copy {
      margin-top: 1.6rem;
      font-size: ${({ theme }) => theme.fontSize.body.xs};
      color: ${({ theme }) => theme.color.f_bodyColor_6};
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer className='section fp-auto-height'>
      <div className='Footer__container'>
        <p className='Footer__desc'>
          Made with Next.js <br />본 페이지는 상업적 목적이 아닌 개인
          포트폴리오용으로 제작되었습니다.
        </p>
        <span className='Footer__copy'>
          © 2022 Park-Ye-Rim. All Rights Reserved.
        </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
