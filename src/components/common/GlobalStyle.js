import { createGlobalStyle } from 'styled-components';
import theme from '../../config/theme';

let DEBUG_CSS = false;
// DEBUG_CSS = true; //TURN THIS ON TO DEBUG CSS

const GlobalStyle = createGlobalStyle`
  html{
    min-height: 100vh;
    position: absolute; 
    width: 100%; 
    height: 100%; 
    overflow-y: scroll;
  }
  
  body{
    height: 100%;
    background: #f8f9fb;
  }
  
  h1, h2, h3, h4, h5, h6{
    font-weight: 400!important; //fix for inconsistent firefox bold font rendering
  }
  
  p{
    letter-spacing: 0.015em;
    //text-shadow: 0 0 0.1px rgba(0,0,0,0.1); //emulate stronger antialiasing
    @media(max-width: ${theme.breakpoints.l}){
      font-size: 0.9rem;
    }
    @media(max-width: ${theme.breakpoints.s}){
      font-size: 0.85rem;
    }
  }

  b {
    font-weight: 800;
    font-family: ${theme.fontStack_2};
  } 
    
  .scroll-disabled {
    overflow-y: hidden!important;
  }
 
  ${DEBUG_CSS ? `
  *:not(path):not(g) {
    color:  hsla(210, 100%, 100%, 1);
    background: hsla(210, 100%,  50%, 0.2);
    outline:  solid 2px hsla(210, 100%, 100%, 0.5);
    box-shadow: none !important;
  }` : ''}
`;

export default GlobalStyle;