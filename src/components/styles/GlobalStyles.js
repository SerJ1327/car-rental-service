import { createGlobalStyle } from 'styled-components';
import ManropeLight from '../fonts/Manrope-Light.ttf';
import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import anropeSemiBold from '../fonts/Manrope-SemiBold.ttf';
import ManropeBold from '../fonts/Manrope-Bold.ttf';
import ManropeExtraBold from '../fonts/Manrope-ExtraBold.ttf';
import ManropeExtraLight from '../fonts/Manrope-ExtraLight.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
   font-family: 'ManropeExtraLight';
    src: local('ManropeExtraLight'), 
    url(${ManropeExtraLight}) format('truetype');
    font-weight: 300;
    font-style: normal; 
   }

@font-face {
   font-family: 'ManropeLight';
    src: local('ManropeLight'), 
    url(${ManropeLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
   }

 @font-face { 
 font-family: 'ManropeRegular';
    src: local('ManropeRegular'), 
    url(${ManropeRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
   }

@font-face { 
   font-family: 'ManropeMedium';
    src: local('ManropeMedium'), 
    url(${ManropeMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
   }

@font-face { 
   font-family: 'anropeSemiBold';
    src: local('anropeSemiBold'), 
    url(${anropeSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
   }

 @font-face {
   font-family: 'ManropeBold';
    src: local('ManropeBold'), 
    url(${ManropeBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
   }

 @font-face {
   font-family: 'ManropeExtraBold';
    src: local('ManropeExtraBold'), 
    url(${ManropeExtraBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
   }


html, body {
    font-family: 'InterTightRegular', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.mainBGColor};
    color: ${({ theme }) => theme.mainTextColor};
  }
 

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
