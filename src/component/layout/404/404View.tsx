'use client';
import { Custom404 } from '@/component/layout/404/404Style';
import { Button } from '@/styles/Common';

const Custom404View = () => {
  return (
    <Custom404.Page className="Custom404__section">
      <Custom404.Container className="Custom404__section-inner">
        <Custom404.Title className="Custom404__title">
          {'404'.split('').map((el, idx) => (
            <span key={'title' + el + idx}>{el}</span>
          ))}
        </Custom404.Title>
        <Custom404.Sub className="Custom404__sub">
          {'Page Not Found'.split('').map((el, idx) => (
            <span key={'sub' + el + idx}>{el}</span>
          ))}
        </Custom404.Sub>
        <Custom404.Desc className="Custom404__desc">
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          존재하지 않는 주소이거나 페이지가 삭제되었을 수 있습니다.
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </Custom404.Desc>
        <Custom404.Btn.Container className="Custom404__btn-container">
          <Button className="Custom404__btn" href="/">
            Go Home
          </Button>
        </Custom404.Btn.Container>
      </Custom404.Container>
    </Custom404.Page>
  );
};

export default Custom404View;
