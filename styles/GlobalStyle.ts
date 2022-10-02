import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html{
  font-size: 10px;   
 }
 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: inherit;     
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a, img{
    display: block;
  }
  body{
    font-family: 'Pretendard', 'sans-serif';
    font-size: 1.4rem;
    background-color: #2A3950;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pretendard', 'sans-serif';
  }

  /* NOTE fullpage setting */
  .fullpage-wrapper {
	width: 100%!important;
	transform: none!important;
}

.fp-section {
	width: 100%!important;
	position: absolute;
	left: 0;
	top: 0;
	visibility: hidden;
	opacity: 0;
	z-index: 0;
	transition: all .7s ease-in-out;
}

.fp-section.active {
	visibility: visible;
	opacity: 1;
	z-index: 1;
}
`;

export default GlobalStyle;
