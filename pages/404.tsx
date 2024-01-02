import Link from "next/link";
import styled from "styled-components";
import { Button, Container, MaxWidthContainer } from "styles/Common";

const Page404 = () => {
  return(
    <NotFound.Page>
      <NotFound.Container>
        <h1>404</h1>
        <p>요청하신 페이지가 삭제되었거나 존재하지 않는 주소입니다.<br/>주소에 오타가 없는지 다시 확인해 주세요.</p>
        <NotFound.Button.Container>
          <NotFound.Button.Button href='/'>메인 페이지로</NotFound.Button.Button>
        </NotFound.Button.Container>  
      </NotFound.Container>      
    </NotFound.Page>
  )
}

// COMPONENT style
const NotFound = {
  Page: styled(Container)`
  `,
  Container: styled(MaxWidthContainer)`
    /* position: relative;
    z-index: 2;
    margin: 0 auto;
    transition: width 0.3s, padding 0.3s;
    text-align: center; */
  `,
Button: {
  Container: styled.div`
    /* 
    @media (${(props) => props.theme.windowSize['lt-s']}) {
      flex-direction: column;
    } */
  `,
  Button: styled(Button)`
    display: inline-flex;
    /* @media (${(props) => props.theme.windowSize['lt-s']}) {
      margin-right: 0;
    } */
  `,
}
}

export default Page404;