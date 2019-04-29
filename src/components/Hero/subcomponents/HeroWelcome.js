import styled from 'styled-components';
import theme from '../../../config/theme';


const HeroWelcome = styled.h2`
  font-family: ${theme.fontStack_3};
  color: #111;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: ${theme.rhythm(1.5)};
  will-change: transform;
  @media(max-width: ${theme.breakpoints.s}){
   font-size: 5.5vw;
  }
  @media(max-width: ${theme.breakpoints.xs}){
   font-size: 7.5vw;
  }
`;

export default HeroWelcome;