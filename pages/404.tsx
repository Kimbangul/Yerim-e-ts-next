import Link from "next/link";
import styled from "styled-components";
import { Button, Container, MaxWidthContainer, WordEffectGlow } from "src/styles/Common";


const Page404 = () => {
  return(
    <NotFound.Page>
      <NotFound.Container>
        <NotFound.Title>
          {
            '404 Not Found.'.split('').map((el,idx)=>
            <NotFound.Word key={el+idx} delay={`${0.1*idx}s`}>{el}</NotFound.Word>
            )
          }
        </NotFound.Title>
        <NotFound.Desc>요청하신 페이지가 삭제되었거나 존재하지 않는 주소입니다.<br/>주소에 오타가 없는지 다시 확인해 주세요.</NotFound.Desc>
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

  `,
   Title: styled.h1`
    font-size: ${({ theme }) => theme.fontSize.head.xl};
    font-weight: 700;
    color: ${({ theme }) => theme.color.text_head};
    text-align: center;
    line-height: 1.6;
    transition: font-size 0.3s, letter-spacing 0.3s;

      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.md};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.rg};
      }
  `,
  Word: styled(WordEffectGlow)``,
  Button: {
    Container: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4.8rem;
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
  },
  Desc: styled.p`
      margin-top: 1.6rem;
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_4};
      line-height: 1.6;
      word-break: keep-all;
      text-align: center;
      display: block;

      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.md};
      }
      @media (${(props) => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
  `
}

export default Page404;