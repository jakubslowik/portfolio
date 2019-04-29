import styled from 'styled-components';
import theme from '../../../config/theme';


const HeroTitle = styled.h1`
  color: #222;
  font-family: ${theme.fontStack_1};
  font-weight: 400;
  animation-delay: 0.2s;
  letter-spacing: -0.15rem;
  margin-bottom: ${theme.rhythm(0.5)};
  will-change: transform;
  line-height: 1;
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 11.5vw;
    line-height: 1;
  }
  @media(max-width: ${theme.breakpoints.xs}){
    font-size: 14vw;
    line-height: 1;
  }
`;

export default HeroTitle;